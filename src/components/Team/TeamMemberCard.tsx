// react
import React from "react";

// next
import Image from "next/image"

// components ui
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/ui/card"

interface TeamMemberCardProps {
    title: string;
    titleClass?: string;
    description?: string;
    contentImage: string;
    footerText?: React.ReactNode;
}

export function TeamMemberCard({
    title,
    titleClass,
    description,
    contentImage,
    footerText,
}: TeamMemberCardProps) {
    return (
        <Card className={`bg-black text-white border border-slate-800 w-full 2xs:w-[300px] flex flex-col`}>
            <CardContent className="flex-grow min-h-[300px]">
                <div className="relative w-full h-72">
                    <Image
                        src={contentImage}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full rounded-lg"
                    />
                </div>
            </CardContent>
            <CardHeader className="text-center flex flex-col flex-grow-0">
                <CardTitle className={titleClass}>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            {footerText && (
                <CardFooter className="flex justify-center text-center">
                    {footerText}
                </CardFooter>
            )}
        </Card>
    );
}
