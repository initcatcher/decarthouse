"use client";

import Header from "./Header";
import Hero from "./Hero";
import TopNavigation from "./TopNavigation";
import IntroduceSection from "./IntroduceSection";
import CounselingSection from "./CounselingSection";
import PersonSection from "./PersonSection";

export default function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <TopNavigation />
      <div className="space-y-24">
        <IntroduceSection />
        <CounselingSection />
        <PersonSection />
      </div>
    </>
  );
}
