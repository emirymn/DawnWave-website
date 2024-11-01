// translations
import { useTranslations } from 'next-intl';

// components
import { TeamMemberCard } from "@/components/Team/TeamMemberCard";

// components ui
import { ButtonSocials } from "@/components/ui/button/ButtonSocials";

export function WantedCard() {
    const t = useTranslations('Team');

    return (
        <>
            <div>
                <TeamMemberCard
                    title={`${t('wanted')}`}
                    description={`${t('Job.Title.game designer')}`}
                    contentImage="/images/dawnwave/logo.png"
                    footerText={
                        <div>
                            <ButtonSocials
                                link='https://www.linkedin.com/company/dawnwave-games/'
                                icon='linkedin2'
                                iconClass='w-8'
                                isActive={false}
                            />
                        </div>
                    }
                />
            </div>
            <div>
                <TeamMemberCard
                    title={`${t('wanted')}`}
                    description={`${t('Job.Title.3d artist')}`}
                    contentImage="/images/dawnwave/logo.png"
                    footerText={
                        <div>
                            <ButtonSocials
                                link='https://www.linkedin.com/company/dawnwave-games/'
                                icon='linkedin2'
                                iconClass='w-8'
                                isActive={false}
                            />
                        </div>
                    }
                />
            </div>
        </>
    )
}
