import AboutMe from "../../../components/AboutMe";

import Header from "../../../components/Header";
import NegativHero from "../../../components/NegativHero";
import NegativPhotoHero from "../../../components/NegativPhotoHero";
import { PortfolioTimelineView } from "../../../components/PortofolioTimeLine";

export default function NegativBasketProjectPage() {
  return (
    <main className="" >
      <Header/>
      <div className="flex flex-col justify-center items-center">
          <>
          <NegativPhotoHero/>
          <NegativHero/>
          <PortfolioTimelineView/>
          <AboutMe/>
          </>
      </div>
    
    
    </main>
  );
}
