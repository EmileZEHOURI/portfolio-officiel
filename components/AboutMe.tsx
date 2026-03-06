import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="mb-10 px-8">
      <div className="flex justify-between">
        <div className="w-1/3">
          <div className="">
            <h1 className="text-4xl font-regular tracking-wide ">Expérience</h1>
            <p>Socializus</p>
            <p>Negativ Basketball</p>
          </div>
          {/* Texte gauche */}

          <div className="flex flex-col  text-right pr-2">
            <h1 className="text-3xl font-extrabold tracking-tighter ">Parcours</h1>
            <p className=""> Université</p>
          </div>
        </div>

        {/* Image centre */}
        <div className="flex  flex-col justify-center w-1/3">
          <img
            src="/assets/images/emile-photo-blur.jpg"
            alt="photo-emile"
            width={400}
            height={800}
            className=" object-cover object-center"
          />
          <p className="relative ">About me</p>
        </div>

        {/* Texte droite */}
        <div className="w-1/3">
             <h1 className="text-3xl font-semibold  text-left">My Favorite Stack</h1>
        <p>
            ReactJS, NextJs, TailwindCss, MondoDB, Firebase Hosting
        </p>
        <h1 className="text-3xl font-regular text-left">I haved also work on : </h1>
        <p>Java, JavaScript, C, Python, </p>
        </div>
       
      </div>
    </section>
  );
};

export default AboutMe;
