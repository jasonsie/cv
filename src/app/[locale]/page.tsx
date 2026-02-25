import { useMessages, useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { FalconLogo, SeidorLogo, TsengLogo,CathayLogo } from "@/images/logos";

type Props = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function ResumePage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const messages: any = useMessages();
  const resumePageT = useTranslations("ResumePage");
  const resumePageLayoutT = useTranslations("PageLayout");
  const contactSocial = messages.ResumePage?.contact?.social ?? [];
  const _icon = {
    LinkedInIcon: LinkedInIcon,
    GitHubIcon: GitHubIcon,
  };
  const _logo = {
    SeidorLogo: SeidorLogo,
    FalconLogo: FalconLogo,
    TsengLogo: TsengLogo,
    CathayLogo: CathayLogo,
  };
  const works = messages.ResumePage?.work ?? [];
  const skills = messages.ResumePage?.skills ?? [];
  const education = messages.ResumePage?.education ?? [];
  const projects = messages.ResumePage?.projects ?? [];

  return (
    <main className="container relative p-4 mx-auto overflow-auto scroll-my-12 print:p-12 md:p-16">
      <section className="w-full max-w-2xl mx-auto space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{resumePageT("name")}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {resumePageT("about")}
            </p>
            <p className="items-center max-w-md font-mono text-xs text-pretty text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={resumePageT("locationLink")}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {resumePageT("location")}
              </a>
            </p>
            <div className="flex pt-1 font-mono text-sm gap-x-1 text-muted-foreground print:hidden">
              {resumePageT("contact.email") ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${resumePageT("contact.email")}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {contactSocial.map((social: any) => {
                const Icon = _icon[social.icon as keyof typeof _icon];
                return (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <Icon className="size-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              {resumePageT("contact.email") ? (
                <a href={`mailto:${resumePageT("contact.email")}`}>
                  <span className="underline">
                    {resumePageT("contact.email")}
                  </span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage
              alt={resumePageT("name")}
              src={resumePageT("avatarUrl")}
            />
            <AvatarFallback>{resumePageT("initials")}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">
            {resumePageLayoutT("title.about")}
          </h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {resumePageT("summary")}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">
            {resumePageLayoutT("title.workExperience")}
          </h2>
          {works.map((work: any, i: number) => {
            const logo = _logo[work.logo as keyof typeof _logo];
            const badgesls = work.badges;

            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between text-base gap-x-2">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none gap-x-1">
                      {logo && (
                        <Image
                          src={logo}
                          alt={work.company}
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                      )}
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {badgesls.map((badge: string) => {
                          return (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          );
                        })}
                      </span>
                    </h3>
                    <div className="text-sm text-gray-500 tabular-nums">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none print:text-[12px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 whitespace-pre-line text-xs print:text-[10px]">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">
            {resumePageLayoutT("title.education")}
          </h2>
          {education.map((education: any) => {
            return (
              <Card key={education?.school?.name}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2 text-base gap-x-2">
                    <h3 className="font-semibold leading-none">
                      {education?.school?.name}
                    </h3>
                  </div>
                </CardHeader>
                {education?.school?.record?.map((record: any) => {
                  return (
                    <CardContent key={record.degree}>
                      <div className="flex items-center justify-between text-xs gap-x-2">
                        {record.degree}
                        <div className="text-sm text-gray-500 tabular-nums">
                          {record.start} - {record.end}
                        </div>
                      </div>
                    </CardContent>
                  );
                })}
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">
            {resumePageLayoutT("title.skills")}
          </h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill: string) => (
              <Badge className="print:text-[10px]" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Section>
        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">
            {resumePageLayoutT("title.projects")}
          </h2>
          <div className="-mx-3">
            {projects.map((project: any) => {
              const logo = _logo[project.logo as keyof typeof _logo];
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  position={project.position}
                  business={project.business}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  image={project.image}
                  logo={logo}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          ...contactSocial.map((socialMediaLink: any) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
