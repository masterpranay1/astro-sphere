import React, { useMemo } from "react";

const ZodiacSignHoroScope = ({
  sign,
  horoscope,
}: {
  sign: string;
  horoscope: string;
}) => {
  return (
    <div className="bg-black p-4 shadow-lg my-4 border-b border-gray-600">
      <h2 className="text-2xl font-bold text-orange-400">{sign}</h2>
      <p className="text-lg text-white">{horoscope}</p>
    </div>
  );
};

const HoroscopePage = () => {
  // Dummy data for zodiac signs
  const zodiacSigns = useMemo(() => {
    return [
      { sign: "Aries", horoscope: "Today is a good day for new beginnings." },
      {
        sign: "Taurus",
        horoscope: "You may face some challenges today, but stay determined.",
      },
      {
        sign: "Gemini",
        horoscope: "Your communication skills will be on point today.",
      },
      {
        sign: "Cancer",
        horoscope: "Today is a good day to take a break and relax.",
      },
      {
        sign: "Leo",
        horoscope: "You will be in the spotlight today.",
      },
      {
        sign: "Virgo",
        horoscope: "You will be in the spotlight today.",
      },
      {
        sign: "Libra",
        horoscope: "You will be in the spotlight today.",
      },
      {
        sign: "Scorpio",
        horoscope: "You will be in the spotlight today.",
      },
      {
        sign: "Sagittarius",
        horoscope: "You will be in the spotlight today.",
      },
      {
        sign: "Capricorn",
        horoscope: "You will be in the spotlight today.",
      },
      {
        sign: "Aquarius",
        horoscope: "You will be in the spotlight today.",
      },
      {
        sign: "Pisces",
        horoscope: "You will be in the spotlight today.",
      },
    ];
  }, []);

  return (
    <main className="bg-white p-4 min-h-screen w-full">
      <section className="bg-black p-4 rounded-2xl w-full flex flex-col">
        <h1 className="text-white font-bold text-2xl mx-auto my-4 p-2 border-b-2">
          Astrosphere
        </h1>

        <h2 className="text-white text-4xl font-bold my-12 ml-4">Today's Horoscope</h2>

        {zodiacSigns.map((sign, index) => (
          <ZodiacSignHoroScope
            key={index}
            sign={sign.sign}
            horoscope={sign.horoscope}
          />
        ))}
      </section>
    </main>
  );
};

export default HoroscopePage;
