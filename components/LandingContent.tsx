import { cn } from "@/lib/utils";
import { Noto_Serif_Georgian } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { homeAITools } from "@/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <>
      <div className="mb-[60px]">
        <h1 className="text-center text-4xl text-white font-extrabold mb-10">
          Top Notch Features
        </h1>
        <div className={""}>
          {homeAITools.map((tool) => (
            <div
              className={`flex flex-col text-center ${
                tool.index % 2 === 0
                  ? "md:flex-row md:text-right"
                  : "md:flex-row-reverse md:text-left"
              } mt-10 md:mt-[60px] mb-5 md:mb-[80px] gap-5 rounded-2xl w-fit m-auto h-full`}
              key={tool.index}
            >
              <div
                className={cn(
                  "text-white p-4 flex flex-col  justify-between h-full",
                  font.className
                )}
              >
                <div>
                  <h1 className="text-3xl font-extrabold mb-[15px] tracking-wide">
                    {tool.title}
                  </h1>
                  <p
                    className={`max-w-[400px] text-zinc-400 text-sm tracking-wide ${
                      tool.index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    {tool.desc}
                  </p>
                </div>
                <div className="bg-transparent mt-5">
                  <Link href={tool.href}>
                    <Button variant={"secondary"} className="rounded-md">
                      Start Generating
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="m-auto">
                <Image
                  className="w-[320px] md:w-[400px] h-[240px] md:h-[300px] object-cover bg-[#192339] p-4 rounded-xl"
                  alt={tool.title}
                  src={tool.src}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </>
  );
};

export default LandingContent;
