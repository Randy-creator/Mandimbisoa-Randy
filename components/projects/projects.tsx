"use client";

import { useSite } from "@/components/providers";
import { sectionIds } from "@/lib/content";
import { Section } from "@/components/layout";
import { ProjectsCarousel } from "./projects-carousel";

export function Projects() {
  const { t, locale } = useSite();

  return (
    <Section
      id={sectionIds[locale].projects}
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      subtitle={t.projects.subtitle}
      garden="bottom"
      rule
    >
      <ProjectsCarousel />
    </Section>
  );
}
