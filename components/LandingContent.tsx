import { cn } from "@/lib/utils";
import { Noto_Serif_Georgian } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Abhaya Shankar",
    Avatar: "A",
    title: "Software Engineer",
    description:
      "This is the best AI Tool I have used that is also free of cost. Really amazing!",
  },
  {
    name: "Harsh Pandey",
    Avatar: "H",
    title: "Full Stack Web3 Developer",
    description:
      "This is the best AI Tool I have used that is also free of cost. Really amazing!",
  },
  {
    name: "Prashik Mayur",
    Avatar: "P",
    title: "ML/AI Developer",
    description:
      "This is the best AI Tool I have used that is also free of cost. Really amazing!",
  },
  {
    name: "Akshay Kumar",
    Avatar: "A",
    title: "Full Stack Developer",
    description:
      "This is the best AI Tool I have used that is also free of cost. Really amazing!",
  },
];

const font = Noto_Serif_Georgian({
  subsets: ["latin"],
  weight: "500",
});

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h1 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-[10px]">
                <Avatar className={cn("font-extrabold", font.className)}>
                  <AvatarImage src="" alt={testimonial.Avatar} />
                  <AvatarFallback className="text-zinc-800">
                    {testimonial.Avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm tracking-wide">
                    {testimonial.title}
                  </p>
                </div>
              </CardTitle>
              <CardContent className="px-0 pt-4 italic text-slate-400">
                &quot;{testimonial.description}&quot;
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
