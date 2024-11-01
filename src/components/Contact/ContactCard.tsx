// translations
import { useTranslations } from 'next-intl';

// components ui
import { CardHighlighted } from "@/components/ui/card/CardHighlighted";
import { ButtonSocials } from '@/components/ui/button/ButtonSocials';
import { Separator } from "@/components/shadcn/ui/separator";
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactCard() {
    const t = useTranslations('Contact');

    return (
        <div className="grid grid-cols-1 gap-8">

            <CardHighlighted
                cardType='Horizontal'
                cardClass={`bg-card-background text-white border border-slate-800 flex items-center p-4`}
                icon={<Mail size={64} />}
                content={<div>{`${t('Card.Content.Mail.contact')}@${t('Card.Content.Mail.domain')}`}</div>}
                contentClass='text-2xl break-all'
                description={`${t('Card.Description.mail')}`} descriptionClass='text-lg ml-3' />


            <CardHighlighted
            cardType='Horizontal'
                cardClass={`bg-card-background text-white border border-slate-800 flex items-center p-4`}
                icon={<Phone size={64} />}
                content={`${t('Card.Content.phone')}`}
                contentClass='text-2xl'
                description={`${t('Card.Description.phone')}`} descriptionClass='text-lg ml-3' />


            <CardHighlighted
                cardType='Horizontal'
                cardClass={`bg-card-background text-white border border-slate-800 flex items-center p-4`}
                icon={<MapPin size={64} />}
                content={`${t('Card.Content.address')}`}
                contentClass='text-2xl'
                description={`${t('Card.Description.address')}`} descriptionClass='text-lg ml-3' />

            <Separator />

            <div className="flex flex-wrap justify-center gap-y-2 sm:gap-x-0">
                <ButtonSocials
                    link='https://www.instagram.com/dawnwavegames/'
                    icon='instagram'
                    iconClass='w-8'
                    isActive={true}
                />
                <ButtonSocials
                    link='https://www.linkedin.com/company/dawnwave-games/'
                    icon='linkedin'
                    iconClass='w-6'
                    isActive={true}
                />
                <ButtonSocials
                    link='https://discord.com/invite/W3Bn8AkWg3'
                    icon='discord'
                    iconClass='w-8'
                    isActive={true}
                />
                <ButtonSocials
                    link='https://github.com/DawnWave-Studio'
                    icon='github'
                    iconClass='w-8'
                    isActive={true}
                />
                <ButtonSocials
                    link='https://www.youtube.com/channel/UCPafZ1CJUTh_ycPAseFqKxg'
                    icon='youtube'
                    iconClass='w-8'
                    isActive={true}
                />
                <ButtonSocials
                    link='https://x.com/dawnwavegames'
                    icon='x'
                    iconClass='w-8'
                    isActive={true}
                />
            </div>
            <Separator />

        </div >

    );
};
