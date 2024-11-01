// translations
import { useTranslations } from 'next-intl';

// components
import { TeamMemberCard } from "@/components/Team/TeamMemberCard";

// components ui
import { ButtonSocials } from "@/components/ui/button/ButtonSocials";

export function EmployeeCard() {
    const t = useTranslations('Team');

    return (
        <>
            <div>
                <TeamMemberCard
                    title='Enes ÇAĞATAY'
                    description={`${t('Job.Title.3d artist')}`}
                    contentImage="/images/team/pp_enes.png"
                    footerText={
                        <div>
                            <ButtonSocials
                                link='https://www.instagram.com/nott.ns/'
                                icon='instagram2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://www.linkedin.com/in/enes-%C3%A7a%C4%9Fatay/'
                                icon='linkedin2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://www.artstation.com/enescagatay'
                                icon='artstation'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='enescagatay2@gmail.com'
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
                    title="Fatma Nur ŞEN"
                    description={`${t('Job.Title.2d artist')}`}
                    contentImage="/images/team/pp_nur.png"
                    footerText={
                        <div>
                            <ButtonSocials
                                link='https://www.instagram.com/4iko.miru/'
                                icon='instagram2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://www.linkedin.com/in/fatma-nur-%C5%9Fen-22729a224/'
                                icon='linkedin2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://www.artstation.com/reicchi'
                                icon='artstation'
                                iconClass='w-8'
                                isActive={false}
                            />
                            <ButtonSocials
                                link='fatma.nursenn@outlook.com'
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
                    title="Kerem KETENCİ"
                    description={`${t('Job.software')} & ${t('Job.web')} ${t('Job.Title.developer')}`}
                    contentImage="/images/team/pp_kerem.jpg"
                    footerText={
                        <div>
                            <ButtonSocials
                                link='https://www.instagram.com/realkeremketenci/'
                                icon='instagram2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://www.linkedin.com/in/kerem-ketenci/'
                                icon='linkedin2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='https://github.com/keremketenci'
                                icon='github2'
                                iconClass='w-8'
                                isActive={false}
                            />

                            <ButtonSocials
                                link='keremketenci.dev@protonmail.com'
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
