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
    name: "اصر المقرحي",
    date: "Sep 23, 2025",
    rating: 5,
    comment: "🤩🫶The best game in the world",
    country: "Saudi Arabia"
  },
  {
    name: "Nebithron",
    date: "Sep 9, 2025",
    rating: 5,
    comment: "The game is very good and this meme increases the pleasure very well (so good that I stood upright and suggested it to my grandmother)",
    country: "Turkey"
  },
  {
    name: "Sina Kazeminia",
    date: "Sep 9, 2025",
    rating: 5,
    comment: "It is a good game, but I would like to add better tools to the game or add some maps with more updates",
    country: "Iran"
  },
  {
    name: "رهام سعدی",
    date: "Sep 8, 2025",
    rating: 5,
    comment: "It's very good, be sure to install it, it has all the languages, even Persian, Iran.",
    country: "Iran"
  },
  {
    name: "Никита Кайзер",
    date: "Sep 6, 2025",
    rating: 5,
    comment: "Good game. Cool physics. I managed to win against the USA with a nuke for Russia.",
    country: "Russia"
  },
  {
    name: "Julian Campo",
    date: "Sep 4, 2025",
    rating: 5,
    comment: "A gem, but they should add more weapons, more things, and put an offline mode that allows you to play quick games without internet. Please stretch it even better. 🗿",
    country: "Spain"
  },
  {
    name: "Irfan Karademir",
    date: "Sep 3, 2025",
    rating: 5,
    comment: "Very good",
    country: "Turkey"
  },
  {
    name: "Дима",
    date: "Aug 29, 2025",
    rating: 5,
    comment: "There are very few games like this, especially with countries, thank you 🔶️🔶️🔶️🔶️🔶️",
    country: "Russia"
  },
  {
    name: "Skg Skg",
    date: "Aug 15, 2025",
    rating: 5,
    comment: "Very fun, enjoyable to play.",
    country: "Thailand"
  },
  {
    name: "Pourya sanami",
    date: "Aug 15, 2025",
    rating: 5,
    comment: "Excellent, unique",
    country: "Iran"
  },
  {
    name: "Тимофей",
    date: "Aug 8, 2025",
    rating: 5,
    comment: "Overall, the game is good. You can even laugh a little. Some of the skins are funny. By the way, the game only works with the internet.",
    country: "Russia"
  },
  {
    name: "Felix Troy",
    date: "Aug 2, 2025",
    rating: 5,
    comment: "fun and easy to play. really appreciated tournaments via world war mode",
    country: "United Kingdom"
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
