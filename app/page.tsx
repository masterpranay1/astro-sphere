import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import horoscopeImage from "@/public/horoscope.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden mb-16">
      <h1 className="text-white font-bold text-2xl mx-auto my-4 p-2 border-b-2">
        Astrosphere
      </h1>

      <p className="mx-auto text-5xl md:text-6xl text-white font-extrabold w-2/3 text-center mt-24 md:mt-32">
        India's Number <span className="text-orange-400">1</span> Astrology
        Platform
        <span className="text-orange-400">.</span> Try it now
        <span className="text-orange-400"> !</span>
      </p>

      <Button
        className="mx-auto text-xl md:text-2xl border-2 border-orange-400 mt-16 md:mt-20 bg-black hover:bg-orange-400 hover:text-black p-8"
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
        <div className="border-orange-400 border-4 p-8 py-16 rounded-2xl w-full lg:w-96 flex justify-center items-center text-xl cursor-pointer">
          <h2 className="text-white text-2xl hover:text-orange-400 hover:-translate-y-1 transition-all text-center uppercase font-bold">
            <Link href="/horoscope">Today's Horoscope</Link>
          </h2>
        </div>

        <div className="border-orange-400 border-4 p-8 py-16 rounded-2xl w-full lg:w-96 flex justify-center items-center text-xl cursor-pointer">
          <h2 className="text-white text-2xl hover:text-orange-400 hover:-translate-y-1 transition-all text-center uppercase font-bold">
            Online Kundli - Coming Soon
          </h2>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section
      className="w-full p-4 mx-auto flex flex-col items-center"
      id="contact-astrologer"
    >
      <h2 className="text-white text-5xl md:text-6xl font-extrabold">
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

export default function Home() {
  return (
    <main className="bg-white p-4">
      <section className="bg-black rounded-2xl w-full">
        <Hero />
        <Features />
        <ContactForm />
      </section>
    </main>
  );
}
