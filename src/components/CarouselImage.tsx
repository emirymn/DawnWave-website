'use client'

// react
import * as React from "react"

// next
import Image from "next/image"

// embla carousel
import Autoplay from "embla-carousel-autoplay"

// components ui
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui/carousel"

interface CarouselImageProps {
  Images: string[]
}

export function CarouselImage({ Images }: CarouselImageProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {Images.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex items-center w-full h-[210px] 2xs:h-[330px] xs:h-[440px] sm:h-[530px] md:h-[710px] basis-[100%] xl:basis-[80%]"
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`Team Photo ${index + 1}`}
                layout="fill"
                className="object-contain lg:object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center my-2">
        <CarouselPrevious className="border-slate-800 bg-slate-950 text-white hover:bg-accent hover:text-white mx-1" />
        <CarouselNext className="border-slate-800 bg-slate-950 text-white hover:bg-accent hover:text-white mx-1" />
      </div>
    </Carousel>
  )
}
