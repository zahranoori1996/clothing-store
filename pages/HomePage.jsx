import React from "react";
import SocialMedia from "../src/components/SocialMedia";
import SearchSection from "../src/components/SearchSection";
import Menu from "../src/components/Menu";
import Banner from "../src/components/Banner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <SocialMedia />
      <SearchSection />
      <Menu />
      <Banner />
    </div>
  );
}
