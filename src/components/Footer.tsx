// styles
import "@/components/ui/Pattern.css";

// translations
import { useTranslations } from 'next-intl';

// utils
import { getSelectedLanguage } from '@/utils/getSelectedLanguage';

// components
import { Icon } from '@/components/Icon';
import { Button } from "@/components/shadcn/ui/button";

// components ui
import { ButtonSocials } from '@/components/ui/button/ButtonSocials';
import { Separator } from "@/components/shadcn/ui/separator";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/shadcn/ui/navigation-menu"
import { LabelAsync } from "@/components/ui/label/LabelAsync";

export function Footer() {
    const t = useTranslations('Footer');

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentUrl = window.location.pathname;
    const language = getSelectedLanguage(currentUrl);

    const menuItems = [
        { label: t('Link.home'), section: 'Home' },
        { label: t('Link.team'), section: 'Team' },
        { label: t('Link.joinUs'), section: 'JoinUs' },
        { label: t('Link.contact'), section: 'Contact' }
    ];

    return (
        <div>
            <div className="flex justify-between items-center">
                <Icon className="w-36 lg:mb-0" name="logo" />
                <div>
                    <NavigationMenu>
                        <NavigationMenuList className="grid grid-cols-2 lg:grid-cols-1 lg:mt-4 lg:flex text-center items-center gap-x-8 lg:gap-x-0 lg:space-x-8">
                            {menuItems.map((item) => (
                                <NavigationMenuItem className="cursor-pointer" key={item.section}>
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
                </div>
            </div>
            <Separator />
            <div className="flex flex-col-reverse mt-8 lg:mt-0 lg:flex-row justify-between items-center text-white">
                <div className="text-lg py-8 text-center">
                    {language === 'en' && <p>
                        {` ${t('Copyright.copyright')} @ ${t('Copyright.year')} `}
                        <span className="text-xl text-highlight">{`${t('Domain.text')} `}</span>
                        {` ${t('Copyright.allRightsReserved')}. `}
                        <div className="flex flex-row justify-center mt-2">
                        <LabelAsync text1={`${t('designBy')}`} text1Class="text-purple" text3={`${t('studio')}`} text3Class="text-accent" text2={`${t('developedBy')}`} text2Class="text-purple" text4="Kerem Ketenci" text4Class="text-accent"/>
                        </div>
                    </p>}
                    {language === 'tr' && <p>
                        {` ${t('Copyright.copyright')} @ ${t('Copyright.year')} `}
                        <span className="text-xl text-highlight">{`${t('Domain.text')} `}</span>
                        {` ${t('Copyright.allRightsReserved')}. `}
                        <div className="flex flex-row justify-center mt-2">
                        <LabelAsync text1={`${t('studio')}`} text1Class="text-accent" text3={`${t('designBy')}`} text3Class="text-purple" text2="Kerem Ketenci" text2Class="text-accent" text4={`${t('developedBy')}`} text4Class="text-purple"/>
                        </div>
                    </p>}
                </div>
                <div className="flex flex-wrap justify-center mb-0 lg:mb-2 gap-y-2 sm:gap-x-0 items-center">
                    <ButtonSocials
                        link="https://www.linkedin.com/company/dawnwave-games/"
                        icon="instagram"
                        iconClass="w-8"
                        isActive={true}
                    />
                    <ButtonSocials
                        link="https://www.instagram.com/dawnwavegames/"
                        icon="linkedin"
                        iconClass="w-6"
                        isActive={true}
                    />
                    <ButtonSocials
                        link="https://discord.com/invite/W3Bn8AkWg3"
                        icon="discord"
                        iconClass="w-8"
                        isActive={true}
                    />
                    <ButtonSocials
                        link="https://github.com/DawnWave-Studio"
                        icon="github"
                        iconClass="w-8"
                        isActive={true}
                    />
                    <ButtonSocials
                        link="https://www.youtube.com/channel/UCPafZ1CJUTh_ycPAseFqKxg"
                        icon="youtube"
                        iconClass="w-8"
                        isActive={true}
                    />
                    <ButtonSocials
                        link="https://x.com/dawnwavegames"
                        icon="x"
                        iconClass="w-8"
                        isActive={true}
                    />
                </div>
            </div>
        </div>
    );
}
