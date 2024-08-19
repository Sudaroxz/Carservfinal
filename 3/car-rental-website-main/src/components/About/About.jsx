import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <dotlottie-player
              src="YOUR_LOTTIE_FILE_URL" // Replace with the actual .lottie file URL
              background="transparent"
              speed="1"
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                We Offer Full Service Auto Repair & Maintenance
              </p>
              <p data-aos="fade-up">
                Diagnostics | Dent & Paint | Oil / Lube /Filter | Brakes | Suspension | Detailing
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="1500"
                className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
              >
                <a href="http://localhost:3000/Home">Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

