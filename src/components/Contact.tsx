import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import supportIcon from "../assets/support.webp";
import businessIcon from "../assets/business.webp";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32 text-center">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Contact{" "}
          </span>
          Us
        </h3>
        <p className="text-sm text-muted-foreground mt-2">geofast.help@gmail.com</p>
        <div className="grid gap-8 mt-12 mx-auto md:grid-cols-2 md:gap-12 md:w-3/4">
          {/* Questions Card */}
          <Card className="relative bg-muted/50 drop-shadow-md shadow-black/10">
            <img
              src={supportIcon}
              alt="Support"
              className="absolute top-4 right-4 h-8 w-8"
            />
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Support</CardTitle>
              <CardDescription className="text-muted-foreground">
                Have a question or need assistance? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:geofast.help@gmail.com?subject=Support Request"
                className="w-full"
              >
                <Button
                  variant="secondary"
                  className="bg-muted text-primary w-full hover:bg-muted/80"
                >
                  Reach Out
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Business Opportunities Card */}
          <Card className="relative bg-muted/50 drop-shadow-md shadow-black/10">
            <img
              src={businessIcon}
              alt="Business Opportunities"
              className="absolute top-4 right-4 h-8 w-8"
            />
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Business Opportunities</CardTitle>
              <CardDescription className="text-muted-foreground">
                We are actively looking for investors and business partners to grow our game studio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:geofast.help@gmail.com?subject=Business Inquiry"
                className="w-full"
              >
                <Button
                  variant="secondary"
                  className="bg-muted text-primary w-full hover:bg-muted/80"
                >
                  Reach Out
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
