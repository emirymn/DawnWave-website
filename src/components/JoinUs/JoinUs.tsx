// translations
import { useTranslations } from 'next-intl';

// components ui
import { ButtonSlideX } from "@/components/ui/button/ButtonSlideX";

// components
import { JoinUsCard } from "@/components/JoinUs/JoinUsCard";
import { JoinUsCarousel } from "@/components/JoinUs/JoinUsCarousel";
import { Icon } from '@/components/Icon';

export function JoinUs() {
    const t = useTranslations('JoinUs');
    const jobs = [
        {
            title: `${t('Job.Title.3d artist')}`,
            description: (
                <div className="flex items-center">
                    <Icon name="clock" className="w-6 mr-1" />
                    <span>{`${t('Job.Time.hybrid')}`}</span>
                </div>
            ),
            content: `${t('Job.content')}.`,
            footer: (
                <a href="https://www.linkedin.com/company/dawnwave-games/">
                    <ButtonSlideX text={`${t('Button.apply')}`} />
                </a>
            ),
        },
        {
            title: `${t('Job.Title.game designer')}`,
            description: (
                <div className="flex items-center">
                    <Icon name="clock" className="w-6 mr-1" />
                    <span>{`${t('Job.Time.hybrid')}`}</span>
                </div>
            ),
            content: `${t('Job.content')}.`,
            footer: (
                <a href="https://www.linkedin.com/company/dawnwave-games/">
                    <ButtonSlideX text={`${t('Button.apply')}`} />
                </a>
            ),
        }
    ];
    
    return (
        <div>
            <p className="text-4xl font-bold text-center p-4 text-accent">{`${t('title')}`}</p>

            <div className="block xl:hidden">
                <JoinUsCarousel jobs={jobs} />
            </div>

            <div className="hidden xl:block">
                <div className='flex gap-8'>
                    <JoinUsCard jobs={jobs} />
                </div>
            </div>

        </div>
    );
};
