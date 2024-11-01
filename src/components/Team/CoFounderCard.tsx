// translations
import { useTranslations } from 'next-intl';

// components
import { TeamMemberCard } from "@/components/Team/TeamMemberCard";

// components ui
import { ButtonSocials } from "@/components/ui/button/ButtonSocials";

export function CoFounderCard() {
    const t = useTranslations('Team');

    return (
        <>
            <div>
                <TeamMemberCard
                    title="Emirhan YAMAN"
                    description={`${t('Roles.co-founder')} & ${t('Job.Title.game developer')}`}
                    contentImage="/images/team/pp_emirhan.png"
                    footerText={
                        <div>
                            <ButtonSocials
                                link='https://www.instagram.com/emir.yaman57/'
                                icon='instagram2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://www.linkedin.com/in/emirymn/'
                                icon='linkedin2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://github.com/emirymn'
                                icon='github2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='emirhanyaman@dawnwave.com.tr'
                                icon='mail2'
                                iconClass='w-8'
                                isActive={false}
                                onClick={() => { }}
                            />
                        </div>
                    }
                />
            </div>
            <div>
                <TeamMemberCard
                    title="Mert Can DOĞAN"
                    description={`${t('Roles.co-founder')} & ${t('Job.Title.game developer')}`}
                    contentImage="/images/team/pp_mert.png"
                    footerText={
                        <div>
                            <ButtonSocials
                                link='https://www.instagram.com/ecostavakya/'
                                icon='instagram2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://www.linkedin.com/in/ecostavakya/'
                                icon='linkedin2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://github.com/Ecostavakya'
                                icon='github2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='mertcandogan@dawnwave.com.tr'
                                icon='mail2'
                                iconClass='w-8'
                                isActive={false}
                                onClick={() => { }}
                            />
                        </div>
                    }
                />
            </div>
            <div>
                <TeamMemberCard
                    title="Mustafa Yusuf AKSU"
                    description={`${t('Roles.co-founder')} & ${t('Job.Title.game developer')}`}
                    contentImage="/images/team/pp_mustafa.png"
                    footerText={
                        <div>
                            <ButtonSocials
                                link='https://www.instagram.com/mustafayusufaksu/'
                                icon='instagram2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://www.linkedin.com/in/mustafa-yusuf-aksu/'
                                icon='linkedin2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://github.com/ALTENALT'
                                icon='github2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='myusufaksu@dawnwave.com.tr'
                                icon='mail2'
                                iconClass='w-8'
                                isActive={false}
                                onClick={() => { }}
                            />
                        </div>
                    }
                />
            </div>
        </>
    )
}
