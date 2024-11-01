"use client"

// translations
import { useTranslations } from 'next-intl';

// react
import React, { useEffect, useRef, useState } from 'react';

// next
import Link from "next/link"

// hooks & utils
import { cn } from "@/lib/utils"

// components ui
import { ButtonNav } from "@/components/ui/button/ButtonNav";
import { ScrollArea } from "@/components/shadcn/ui/scroll-area"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/shadcn/ui/navigation-menu"

// components
import { LanguageChangeButton } from "@/components/LanguageChangeButton";
import { Separator } from '@/components/shadcn/ui/separator';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const t = useTranslations('Navbar');

    const menuItems = [
        { label: t('Link.home'), section: 'Home' },
        { label: t('Link.team'), section: 'Team' },
        { label: t('Link.joinUs'), section: 'JoinUs' },
        { label: t('Link.contact'), section: 'Contact' }
    ];

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isButtonNavChecked, setIsButtonNavChecked] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    const toggleNavbar = () => {
        setIsNavbarOpen(prev => !prev);
        setIsButtonNavChecked(prev => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        // Check if the click is outside the navbar
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setIsNavbarOpen(false);
            setIsButtonNavChecked(false);
        }
    };

    useEffect(() => {
        if (isNavbarOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isNavbarOpen]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMenuClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <>
            <div className={`${className} hidden sm:block`} ref={navbarRef}>
                <div className='flex justify-between'>
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-8">
                            {menuItems.map((item) => (
                                <NavigationMenuItem className='cursor-pointer' key={item.section}>
                                    <NavigationMenuLink
                                        className={`hover:text-white hover:bg-transparent hover:text-accent text-xl ${navigationMenuTriggerStyle()}`}
                                        onClick={() => scrollToSection(item.section)}
                                    >
                                        {item.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList className="cursor-pointer">
                            <NavigationMenuItem>
                                <LanguageChangeButton />
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>

            <div className={`${className} flex flex-col sm:hidden justify-between`} ref={navbarRef}>
                <div className='flex justify-between'>
                    <div className='p-1'>
                        <ButtonNav onClick={toggleNavbar} checked={isButtonNavChecked} />
                    </div>
                    <LanguageChangeButton />
                </div>

                {isNavbarOpen && (
                    <div>
                        <Separator className='my-4' />
                        <ScrollArea className="flex w-full h-[120px] rounded-md">
                            <div className="px-1 text-start space-y-1">
                                {menuItems.map((item) => (
                                    <div
                                        onClick={() => scrollToSection(item.section)}
                                        key={item.section}
                                        className="cursor-pointer text-xl hover:text-accent"
                                    >
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                )}



            </div>
        </>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem";
