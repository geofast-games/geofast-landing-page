import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReportBugPage } from "./ReportBug";
import { ReportTranslationErrorPage } from "./ReportTranslationError";
import { SuggestionsPage } from "./Suggestions";

const FeedbackPage = () => {
  const [selectedFeedbackType, setSelectedFeedbackType] = useState<string>("");

  const renderFeedbackForm = () => {
    switch (selectedFeedbackType) {
      case "bug":
        return <ReportBugPage />;
      case "translation":
        return <ReportTranslationErrorPage />;
      case "suggestion":
        return <SuggestionsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Feedback Center</CardTitle>
          <CardDescription>
            Please select the type of feedback you would like to provide for <em>Geofast: Battle of Nations</em>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select
            value={selectedFeedbackType}
            onValueChange={setSelectedFeedbackType}
          >
            <SelectTrigger className="w-full md:w-[300px]">
              <SelectValue placeholder="Select feedback type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bug">Report a bug</SelectItem>
              <SelectItem value="translation">
                Report a translation error
              </SelectItem>
              <SelectItem value="suggestion">Make a suggestion</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedFeedbackType && (
        <div className="mt-6">{renderFeedbackForm()}</div>
      )}
    </div>
  );
};

export default FeedbackPage;
