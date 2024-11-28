"use client";

// hooks & utils
import { isLoading } from "@/hooks/isLoading";

// components
import { Loading } from "@/components/Loading";
import { Home } from "@/components/Home";
import { Team } from "@/components/Team/Team";
import { CarouselImage } from "@/components/CarouselImage";
import { CarouselYouTube } from "@/components/CarouselYouTube";
import { JoinUs } from "@/components/JoinUs/JoinUs";
import { Contact } from "@/components/Contact/Contact";
import { Subscribe } from "@/components/Subscribe/Subscribe";
import { Footer } from "@/components/Footer";

export default function Page() {
  const loading = isLoading();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center pb-96 bg-background h-screen">
        <Loading text="Loading..." />
      </div>
    );
  }

  return (
    <main>
      {/* Home Section */}
      <section
        className="py-24 xs:py-16 sm:py-12 md:py-20 lg:py-0 px-4 sm:px-16 md:px-24 xl:px-32 2xl:px-48"
        id="Home"
      >
        <Home />
      </section>

      <div className="mt-0 2xl:mt-32"></div>

      {/* Team Section */}
      <section className="py-20 sm:py-18 md:py-20 2xl:py-16" id="Team">
        <Team />
      </section>

      <div className="mt-24"></div>

      {/* Team Photos Section */}
      <section id="TeamPhotos">
        <div className="w-full">
          <CarouselImage
            Images={[
              "/images/carouselImages/1.png",
              "/images/carouselImages/2.png",
              "/images/carouselImages/3.jpg",
            ]}
          />
        </div>
      </section>

      <div className="mt-48"></div>

      {/* YouTube Video Section */}
      <section id="CarouselVideos">
        <div className="w-full h-full">
          <CarouselYouTube
            videoIds={[
              "kszsfo2ydfU?si=_ZsgCeDIQaqqETAE",
              "42XXGTINTzg?si=VsnwIBoH25cHagHQ",
              "aGqMDtUQPKk?si=yUXQylZuq5CnqVnm",
            ]}
          />
        </div>
      </section>

      {/* JoinUs Section */}
      <section
        className="py-16 2xs:py-16 xs:py-44 sm:py-48 md:py-48 lg:py-56 xl:py-56 px-4 sm:px-16 md:px-24 xl:px-32 2xl:px-48"
        id="JoinUs"
      >
        <JoinUs />
      </section>

      {/* Contact Section */}
      <section
        className="py-16 2xs:py-20 md:py-16 2xl:py-18 px-4 sm:px-16 md:px-24 xl:px-32 2xl:px-48"
        id="Contact"
      >
        <Contact />
      </section>

      <div className="mt-16"></div>

      {/* Subscribe Section */}
      <section id="Subscribe">
        <div className="flex flex-col justify-center px-4 sm:px-16 md:px-24 xl:px-32 2xl:px-48">
          <Subscribe />
        </div>
      </section>

      <div className="mt-32"></div>

      {/* Footer Section */}
      <section
        className="px-4 sm:px-16 md:px-24 xl:px-32 2xl:px-48"
        id="Footer"
      >
        <Footer />
      </section>

      <div className="pt-12"></div>
    </main>
  );
}
