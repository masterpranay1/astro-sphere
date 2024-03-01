import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import horoscopeImage from "@/public/horoscope.png";
import Link from "next/link";
import { AudioLines, LightbulbIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Astrologer1 from "@/public/astrologer1.jpeg";
import Astrologer2 from "@/public/astrologer2.jpeg";
import Astrologer3 from "@/public/astrologer3.jpeg";
import Astrologer4 from "@/public/astrologer4.jpeg";
import Astrologer5 from "@/public/astrologer5.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden mb-16">
      <h1 className="text-white font-bold text-2xl mx-auto my-4 p-2 border-b-2">
        Astrosphere
      </h1>

      <p className="mx-auto text-5xl md:text-6xl text-white font-extrabold w-2/3 text-center mt-24 md:mt-32 lg:mt-40">
        India&apos;s Number <span className="text-orange-400">1</span> Astrology
        Platform
        <span className="text-orange-400">.</span> Try it now
        <span className="text-orange-400"> !</span>
      </p>

      <Button
        className="mx-auto text-xl md:text-2xl border-2 border-orange-400 mt-16 md:mt-20 lg:mt-24 bg-black hover:bg-orange-400 hover:text-black p-8"
        asChild
      >
        <Link href="#contact-astrologer">Talk to our Astrologer</Link>
      </Button>

      <Image
        src={horoscopeImage}
        width={200}
        height={200}
        alt="chakra-image"
        className="hidden md:block absolute -top-16 -right-16 w-64 animate-spin-slow"
      />
    </section>
  );
};

const Features = () => {
  return (
    <section className="w-full p-4 mx-auto flex flex-col items-center">
      <h2 className="text-white text-5xl md:text-6xl font-extrabold">
        Services
      </h2>

      <div className="flex flex-col md:flex-row gap-16 mx-auto my-32">
        <Link
          href="/horoscope"
          className="border-white border rounded-2xl p-12 w-full lg:w-96 flex flex-col justify-center items-center text-xl cursor-pointer shadow-lg shadow-gray-50 transition-all hover:-translate-y-1 hover:border-orange-400 hover:text-orange-400"
        >
          <LightbulbIcon size={64} className="text-white" />
          <h2 className="mt-4 text-white text-2xl text-center uppercase font-bold">
            Today&apos;s Horoscope
          </h2>
          <p className="text-white text-center mt-2">
            Get your daily horoscope and astrological predictions.
          </p>
          <span className="text-orange-400 mt-8">Click here</span>
        </Link>

        <div className="border-white border p-4 rounded-2xl w-full lg:w-96 flex flex-col justify-center items-center text-xl cursor-pointer shadow-lg shadow-gray-50 transition-all hover:-translate-y-1 hover:border-orange-400 hover:text-orange-400">
          <AudioLines size={64} className="text-white" />
          <h2 className="mt-4 text-white text-2xl text-center uppercase font-bold">
            Online Kundli - Coming Soon
          </h2>
          <p className="text-white text-center mt-2">
            Generate your online Kundli and explore your birth chart. Coming
            soon!
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section
      className="w-full p-4 mx-auto flex flex-col items-center mt-32"
      id="contact-astrologer"
    >
      <h2 className="text-white text-3xl md:text-5xl xl:text-6xl font-extrabold text-center">
        Contact <span className="text-orange-400">Astrologer</span>
      </h2>

      <form className="flex flex-col gap-8 w-full md:w-1/2 my-24 text-xl">
        <Input placeholder="Name" className="py-6 text-xl" />

        <Input placeholder="Email" className="py-6 text-xl" />

        <Textarea placeholder="Message" className="text-xl" />

        <Button className="mt-8 border-2 border-orange-400 bg-black hover:bg-orange-400 hover:text-black py-6">
          Submit
        </Button>
      </form>
    </section>
  );
};

const OurAstrologers = () => {
  const astrologers = [
    {
      name: "Astrologer 1",
      image: Astrologer1,
      description:
        "Astrologer 1 is a well known astrologer with 10+ years of experience.",
    },
    {
      name: "Astrologer 2",
      image: Astrologer2,
      description:
        "Astrologer 2 is a well known astrologer with 10+ years of experience.",
    },
    {
      name: "Astrologer 3",
      image: Astrologer3,
      description:
        "Astrologer 3 is a well known astrologer with 10+ years of experience.",
    },
    {
      name: "Astrologer 4",
      image: Astrologer4,
      description:
        "Astrologer 4 is a well known astrologer with 10+ years of experience.",
    },
    {
      name: "Astrologer 5",
      image: Astrologer5,
      description:
        "Astrologer 5 is a well known astrologer with 10+ years of experience.",
    },
  ];

  return (
    <section className="mt-32 flex flex-col items-center s w-full">
      <h2 className="text-white text-3xl md:text-6xl font-extrabold text-center">
        Our Astrologers
      </h2>

      <div className="flex flex-row w-9/12 mx-auto">
        <Carousel className="w-full border m-4 p-8 mt-16 rounded-2xl">
          <CarouselContent>
            {astrologers.map((astrologer, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center p-4 rounded-2xl md:basis-1/2 lg:basis-1/3"
              >
                <Image
                  src={astrologer.image}
                  alt={astrologer.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-orange-400 cursor-pointer hover:animate-pulse hover:scale-110"
                />
                <h3 className="text-white text-2xl font-bold mt-4">
                  {astrologer.name}
                </h3>
                <p className="text-white text-center mt-4">
                  {astrologer.description}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 md:-left-24 p-1" />
          <CarouselNext className="absolute right-4 md:-right-24 p-1" />
        </Carousel>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center p-8 rounded-2xl border border-white hover:border-orange-400 shadow-lg shadow-gray-400 hover:shadow-orange-400">
      <p className="text-white text-xl md:text-2xl text-center">
        {description}
      </p>
      <p className="text-white text-xl md:text-2xl text-center mt-8">~ {name}</p>
    </div>
  );
};

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Anjum Pathak",
      description:
        "Astrosphere has helped me to understand my life better. I have been using their services for the past 5 years and I am very satisfied with the predictions.",
    },
    {
      name: "Vivek Sharma",
      description:
        "Life is unpredictable and I have always been curious about my future. Astrosphere has helped me to understand my life better.",
    },
    {
      name: "Rohan Singh",
      description:
        "When I was going through a tough time, Astrosphere has helped me",
    },
  ];

  return (
    <section className="w-full p-4 mx-auto flex flex-col items-center mt-32">
      <h2 className="text-white text-5xl md:text-6xl font-extrabold relative">
        Testimonials
      </h2>

      <Carousel className="w-9/12 mx-auto mt-16">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center p-4 rounded-2xl"
            >
              <TestimonialCard
                name={testimonial.name}
                description={testimonial.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 md:-left-24 p-1" />
        <CarouselNext className="absolute right-4 md:-right-24 p-1" />
      </Carousel>
    </section>
  );
};

export default function Home() {
  return (
    <main className="bg-white p-4">
      <section className="bg-black rounded-2xl w-full">
        <Hero />
        <Features />
        <OurAstrologers />
        <TestimonialCarousel />
        <ContactForm />
      </section>
    </main>
  );
}
