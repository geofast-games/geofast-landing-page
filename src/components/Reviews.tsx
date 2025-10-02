import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Футбол Кубок и лига",
    userName: "",
    comment: "The game is awesome, I’ve been watching you since TT.",
  },
  {
    name: "Kamil Wyszynski",
    userName: "",
    comment:
      "First person to review this game and I must say, this is brilliant.",
  },
  {
    name: "Pau Robles",
    userName: "",
    comment:
      "The game is very good, it would be cool to be able to choose a country and with that, make a Campaign mode, in which you could improve that country, and unlock heart improvements. Keep it up.",
  },
  {
    name: "Daniel Simões",
    userName: "",
    comment:
      "Incredible and sensational game, a great pastime. I recommend it for people who like geopolitics and at the same time want to be distracted by something.",
  },
  {
    name: "Servula Pacheco",
    userName: "",
    comment:
      "Geofast is amazing, congratulations on the incredible work! Keep evolving the game!",
  },
  {
    name: "Jonathan Carbajal",
    userName: "",
    comment: "Very fun and addictive, I bought the sandbox pass 10 minutes in and I'm having lots of fun.",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ name, userName, comment }: TestimonialProps) => (
          <Card
            key={userName}
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription>{userName}</CardDescription>
            </CardHeader>

            <CardContent>{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
