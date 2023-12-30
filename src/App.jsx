import React from "react";
import {
  CustomerReviews,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  Subscribe,
  Footer,
} from "./section";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
        <section className="padding"><PopularProducts /></section>
        <section className="padding"><SuperQuality /></section>
        <section className="padding-x py-10"><Services /></section>
        <section className="padding"><SpecialOffer /></section>
        <section className="bg-pale-blue padding"><CustomerReviews /></section>
        <section className="padding-x sm:py-32 w-full"><Subscribe /></section>
        <section className="padding bg-black padding-x padding-t pb-8">
          Footer
        </section>
      </section>
    </main>
  );
};

export default App;
