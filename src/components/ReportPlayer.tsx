import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InboxForm } from "./forms/InboxForm";

// /report: reporting a player or a situation, kept apart from the feedback
// page because it is about people, not about the game. The Terms (section 9)
// point here; the in-game Report button opens Discord.
const ReportPlayerPage = () => (
  <div className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Report a player</CardTitle>
        <CardDescription>
          For behaviour that breaks our{" "}
          <Link to="/termsofservice" className="font-medium text-primary hover:underline">
            Terms of Service
          </Link>
          : insults, harassment, hate, an offensive username, cheating or match-fixing.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <ul className="list-disc space-y-1 pl-5">
          <li>Give the exact username; a screenshot of the message or the profile helps most.</li>
          <li>Reports are read by a person. The player you report does not learn who reported them.</li>
          <li>We confirm that we received your report and tell you what we decided. Sanctions can be appealed, see the Terms.</li>
        </ul>
        <p>
          A bug, a translation error or an idea?{" "}
          <Link to="/feedback" className="font-medium text-primary hover:underline">
            Use the feedback page
          </Link>
          .
        </p>
      </CardContent>
    </Card>
    <InboxForm kind="report" />
  </div>
);

export default ReportPlayerPage;
