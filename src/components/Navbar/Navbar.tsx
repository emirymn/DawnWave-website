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
import { toast } from 'sonner';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/shadcn/ui/navigation-menu"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu"

import { ChevronDown, ChevronUp } from "lucide-react"

// components
import { LanguageChangeButton } from "@/components/LanguageChangeButton";
import { Separator } from '@/components/shadcn/ui/separator';

interface MenuItem {
    label: string;
    section?: string;
    // If this item should render as a dropdown, supply a `children` array.
    children?: {
        label: string;
        section: string;
        serverIp: string;
    }[];
}

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const t = useTranslations('Navbar');
    const t2 = useTranslations("Toast");

    const menuItems: MenuItem[] = [
        { label: t('Link.home'), section: 'Home' },
        { label: t('Link.team'), section: 'Team' },
        { label: t('Link.joinUs'), section: 'JoinUs' },
        { label: t('Link.contact'), section: 'Contact' },
        {
            label: t('Link.gameServers'),
            children: [
                { label: t('Link.cs2server'), section: 'CS2Server', serverIp: 'connect 95.173.175.61' },
            ]
        },
    ];

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isButtonNavChecked, setIsButtonNavChecked] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const navbarRef = useRef<HTMLDivElement>(null);

    const toggleNavbar = () => {
        setIsNavbarOpen(prev => !prev);
        setIsButtonNavChecked(prev => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setIsNavbarOpen(false);
            setIsButtonNavChecked(false);
            setOpenSubmenu(null);
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

    return (
        <>
            <div className={`${className} hidden md:block`} ref={navbarRef}>
                <div className='flex justify-between'>
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-8">
                            {menuItems.map((item) => (
                                <NavigationMenuItem className='cursor-pointer' key={item.label}>
                                    {item.children ? (
                                        <NavigationMenuLink
                                            className={`hover:text-white hover:bg-transparent hover:text-accent text-xl ${navigationMenuTriggerStyle()}`}
                                            onClick={() => scrollToSection(item.section ?? '')}
                                        >
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    {item.label}
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="dark bg-black border-slate-800 text-white">
                                                    {item.children.map((child) => (
                                                        <DropdownMenuItem
                                                            key={child.section}
                                                            onClick={() => {
                                                                scrollToSection(child.section);
                                                                navigator.clipboard.writeText(child.serverIp);
                                                                if (child.serverIp.includes('.')) {
                                                                    toast(t2('GameServers.ServerIp.success'));
                                                                } else if (child.serverIp.includes('#')) {
                                                                    toast(t2('GameServers.ServerIp.failed'));
                                                                } else {
                                                                    toast(t2('GameServers.ServerIp.noip'));
                                                                }
                                                            }}
                                                        >
                                                            {child.label}
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </NavigationMenuLink>
                                    ) : (
                                        <NavigationMenuLink
                                            className={`hover:text-white hover:bg-transparent hover:text-accent text-xl ${navigationMenuTriggerStyle()}`}
                                            onClick={() => scrollToSection(item.section ?? '')}
                                        >
                                            {item.label}
                                        </NavigationMenuLink>
                                    )}
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

            <div className={`${className} flex flex-col md:hidden justify-between`} ref={navbarRef}>
                <div className='flex justify-between'>
                    <div className='p-1'>
                        <ButtonNav onClick={toggleNavbar} checked={isButtonNavChecked} />
                    </div>
                    <LanguageChangeButton />
                </div>

                {isNavbarOpen && (
                    <div>
                        <Separator className='my-4' />
                        <ScrollArea className="flex w-full h-[150px] rounded-md">
                            <div className="px-1 text-start space-y-2">
                                {menuItems.map((item) => {
                                    if (item.children) {
                                        const isOpen = openSubmenu === item.label;
                                        return (
                                            <div key={item.label}>
                                                <div
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setOpenSubmenu(isOpen ? null : item.label);
                                                    }}
                                                    className="flex items-center justify-between cursor-pointer text-xl hover:text-accent"
                                                >
                                                    <span>{item.label}</span>
                                                    {isOpen ? (
                                                        <ChevronUp className="h-5 w-5" />
                                                    ) : (
                                                        <ChevronDown className="h-5 w-5" />
                                                    )}
                                                </div>

                                                {isOpen && (
                                                    <div className="ml-4 mt-1 space-y-1">
                                                        {item.children.map((child) => (
                                                            <div
                                                                key={child.section}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    scrollToSection(child.section);
                                                                    navigator.clipboard.writeText(child.serverIp);
                                                                    if (child.serverIp.includes('.')) {
                                                                        toast(t2('GameServers.ServerIp.success'));
                                                                    } else if (child.serverIp.includes('#')) {
                                                                        toast(t2('GameServers.ServerIp.failed'));
                                                                    } else {
                                                                        toast(t2('GameServers.ServerIp.noip'));
                                                                    }
                                                                }}
                                                                className="cursor-pointer text-lg hover:text-accent"
                                                            >
                                                                {child.label}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }

                                    return (
                                        <div
                                            key={item.section}
                                            onClick={() => {
                                                scrollToSection(item.section ?? '');
                                                setIsNavbarOpen(false);
                                                setIsButtonNavChecked(false);
                                                setOpenSubmenu(null);
                                            }}
                                            className="cursor-pointer text-xl hover:text-accent"
                                        >
                                            {item.label}
                                        </div>
                                    );
                                })}
                            </div>
                        </ScrollArea>
                    </div>
                )}
            </div>
        </>
    )
}
