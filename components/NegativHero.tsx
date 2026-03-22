import React from "react";

const NegativHero = () => {
  return (
    <>
      <section id="next-section">
        <div className="flex justify-between mt-[50px]">
          <h2 className="text-9xl font-[600]">
            NEGATIV <br /> BASKETBALL{" "}
          </h2>
          <h2 className="text-9xl font-[600] text-left">
            {" "}
            <br /> <br /> WEBSITE REDESIGN
          </h2>
        </div>

        <div>
          <p className="text-3xl max-w-3xl font-[500] px-1">
            I wanted to redesign the website of my former basketball club. The
            objective was to give it a more modern and more coherent identity,
            while turning it into a platform that could do more than simply
            display information. I wanted it to better reflect the club, its
            energy, and the needs of the people around it.
          </p>
        </div>
      </section>
    </>
  );
};

export default NegativHero;
