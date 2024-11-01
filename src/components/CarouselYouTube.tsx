// react
import React from "react";

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

interface CarouselYouTubeProps {
    videoIds: string[],
}

export function CarouselYouTube({ videoIds, }: CarouselYouTubeProps) {
    // const plugin = React.useRef(
    //     Autoplay({ delay: 5000, stopOnInteraction: true })
    // )

    return (
        <Carousel
            opts={{
                align: "center",
                loop: false,
            }}
            // plugins={[plugin.current]}
            // onMouseEnter={() => plugin.current.stop()}
            // onMouseLeave={() => plugin.current.play()}
        >
            <CarouselContent>
                {videoIds.map((id) => (
                    <CarouselItem
                        key={id}
                        className="flex items-center h-[400px] 2xs:h-[450px] xs:h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px]"
                    >
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${id}`}
                            title={`YouTube video player - ${id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-center my-2">
                <CarouselPrevious className="border-slate-800 bg-slate-950 text-white hover:bg-accent hover:text-white mx-1" />
                <CarouselNext className="border-slate-800 bg-slate-950 text-white hover:bg-accent hover:text-white mx-1" />
            </div>
        </Carousel>
    );
}
