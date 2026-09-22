import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

interface GoogleFormProps {
  formUrl: string;
  title?: string;
  description?: string;
  height?: number;
}

const GoogleFormIntegration: React.FC<GoogleFormProps> = ({
  formUrl,
  title = "Feedback Form",
  description = "Please provide your feedback",
  height = 800,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Validate the Google Form URL
  const isValidGoogleFormUrl = (url: string): boolean => {
    try {
      const formUrl = new URL(url);
      return (
        formUrl.hostname === "docs.google.com" &&
        formUrl.pathname.includes("/forms/")
      );
    } catch {
      return false;
    }
  };

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Check URL validity on mount
  React.useEffect(() => {
    if (!isValidGoogleFormUrl(formUrl)) {
      setError(
        "Invalid Google Form URL. Please provide a valid Google Forms URL."
      );
      setIsLoading(false);
    }
  }, [formUrl]);

  // An embed that never loads (blocked network, a region where Google is
  // unreachable) would otherwise leave a skeleton pulsing forever. After
  // this long, stop waiting and offer the form as a plain link instead.
  const [embedStalled, setEmbedStalled] = React.useState(false);
  React.useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => setEmbedStalled(true), 12000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {error ? (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : isLoading && embedStalled ? (
          <div className="space-y-3">
            <p className="text-muted-foreground">
              The form could not be loaded here.
            </p>
            <a
              href={formUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              Open the form in a new tab
            </a>
          </div>
        ) : (
          <>
            {isLoading && <Skeleton className="w-full h-96" />}
            <iframe
              src={`${formUrl}?embedded=true`}
              width="100%"
              height={height}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              onLoad={handleIframeLoad}
              style={{ display: isLoading ? "none" : "block" }}
              title="Google Form"
            >
              Loading form...
            </iframe>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default GoogleFormIntegration;

// Usage example:
/*
import GoogleFormIntegration from './GoogleFormIntegration';

const MyFeedbackPage = () => {
  return (
    <div className="container mx-auto p-4">
      <GoogleFormIntegration
        formUrl="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
        title="Customer Feedback"
        description="We value your feedback! Please take a moment to fill out this form."
        height={800}
      />
    </div>
  );
};
*/
