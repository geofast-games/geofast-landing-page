import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Nakama server configuration
const NAKAMA_SERVER_URL = import.meta.env.VITE_NAKAMA_SERVER_URL || "https://api.geofastgames.com";
const NAKAMA_SERVER_KEY = import.meta.env.VITE_NAKAMA_SERVER_KEY || "";

type ResetState = "form" | "loading" | "success" | "error" | "invalid-token";

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState<ResetState>(token ? "form" : "invalid-token");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setState("invalid-token");
    }
  }, [token]);

  const validatePasswords = (): string | null => {
    if (!newPassword) {
      return "Please enter a new password";
    }
    if (newPassword.length < 8) {
      return "Password must be at least 8 characters";
    }
    if (newPassword !== confirmPassword) {
      return "Passwords do not match";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validatePasswords();
    if (validationError) {
      setErrorMessage(validationError);
      setState("error");
      return;
    }

    setState("loading");
    setErrorMessage("");

    try {
      // Call Nakama RPC endpoint with HTTP key for unauthenticated access
      const payload = JSON.stringify({
        token: token,
        new_password: newPassword,
      });

      const response = await fetch(
        `${NAKAMA_SERVER_URL}/v2/rpc/reset_password?http_key=${encodeURIComponent(NAKAMA_SERVER_KEY)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload), // RPC payloads are stringified JSON
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
      }

      const data = await response.json();

      // Nakama RPC returns payload as a string
      const result: ResetPasswordResponse = typeof data.payload === "string"
        ? JSON.parse(data.payload)
        : data.payload || data;

      if (result.success) {
        setState("success");
      } else {
        setErrorMessage(result.message || "Failed to reset password");
        setState("error");
      }
    } catch (error) {
      console.error("Password reset error:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again."
      );
      setState("error");
    }
  };

  const handleOpenApp = () => {
    // Try to open the app via deep link
    window.location.href = "geofast://login";
  };

  // Invalid token state
  if (state === "invalid-token") {
    return (
      <div className="container mx-auto p-4 max-w-md min-h-[60vh] flex items-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-destructive">Invalid Link</CardTitle>
            <CardDescription>
              This password reset link is invalid or has expired.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Please request a new password reset link from the app.
            </p>
            <Button onClick={handleOpenApp} variant="outline" className="w-full">
              Open Geofast App
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Success state
  if (state === "success") {
    return (
      <div className="container mx-auto p-4 max-w-md min-h-[60vh] flex items-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-green-600 dark:text-green-400">
              Password Reset Successful
            </CardTitle>
            <CardDescription>
              Your password has been updated successfully.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
              <AlertTitle>All done!</AlertTitle>
              <AlertDescription>
                You can now log in to Geofast with your new password.
              </AlertDescription>
            </Alert>
            <Button onClick={handleOpenApp} className="w-full">
              Open Geofast App
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Form state (default)
  return (
    <div className="container mx-auto p-4 max-w-md min-h-[60vh] flex items-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Reset Your Password</CardTitle>
          <CardDescription>
            Enter your new password for your Geofast account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {state === "error" && errorMessage && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <label htmlFor="newPassword" className="text-sm font-medium">
                New Password
              </label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                disabled={state === "loading"}
                minLength={8}
                required
              />
              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={state === "loading"}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={state === "loading"}
            >
              {state === "loading" ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;
