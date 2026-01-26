import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
  country?: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Gor",
    date: "Jan 25, 2026",
    rating: 5,
    comment: "Great game",
    country: "Russia"
  },
  {
    name: "Артур Тимофiєнко",
    date: "Jan 25, 2026",
    rating: 5,
    comment: "Good game, lots of features and lots of possibilities, this game is my favorite.",
    country: "Ukraine"
  },
  {
    name: "Hashim Jahuri",
    date: "Jan 24, 2026",
    rating: 5,
    comment: "The Longer, The Better👏",
    country: "Indonesia"
  },
  {
    name: "أنس ans",
    date: "Jan 21, 2026",
    rating: 5,
    comment: "Honestly, the game is much better than before, and all the problems have been fixed. Thank you to the developers, and we wish you all the best! ❤️🥰🥰👍",
    country: "Saudi Arabia"
  },
  {
    name: "Norbert Dávid Csendes",
    date: "Jan 17, 2026",
    rating: 5,
    comment: "It's a pretty good and complex game. It can keep you hooked for hours, we need more active & persistent Hungarians, come as many as possible. ( ZuZoKinG )",
    country: "Hungary"
  },
  {
    name: "Samuel Wielganczuk Lopes",
    date: "Jan 7, 2026",
    rating: 5,
    comment: "Wow, I loved this game!",
    country: "Brazil"
  },
];

export const Reviews = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Geofast: Battle of Nations
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Reviews{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Reviews from Google Play Store.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {testimonials.map(({ name, date, rating, comment, country }: TestimonialProps, index) => (
          <Card
            key={index}
            className="max-w-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{name}</CardTitle>
                  {country && (
                    <CardDescription className="text-sm">{country}</CardDescription>
                  )}
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <CardDescription className="text-xs">{date}</CardDescription>
            </CardHeader>

            <CardContent className="text-sm leading-relaxed">{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
