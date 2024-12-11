"use client";

import { useMemo, useState } from "react";

import { CodeProfileSection } from "./CodeProfileSection/CodeProfileSection";
import { ProfileSection } from "./ProfileSection/ProfileSection";
import { ButtonSection } from "./ButtonSection/ButtonSection";
import { useMedia } from "@/hooks/useMedia";
import { getDelay } from "@/components/CodeSection/utils";
import { useDictionary } from "@/locale/useDictionary";

export const Content = () => {
  const { dictionary } = useDictionary();
  const { isMobile } = useMedia();
  const [isHuman, setIsHuman] = useState(false);

  const code = useMemo(() => {
    if (isMobile) return dictionary?.home.profile.code.mobile || [];

    return dictionary?.home.profile.code.desktop || [];
  }, [isMobile, dictionary]);

  const translateSlideInDelay = getDelay(code);

  return (
    <>
      <ProfileSection isHuman={isHuman} />
      <CodeProfileSection isHuman={isHuman} code={code} />
      <ButtonSection
        onClick={() => setIsHuman(true)}
        shouldShow={!isHuman}
        showUpDelay={translateSlideInDelay}
      >
        {dictionary?.home.translate_button}
      </ButtonSection>
      <ButtonSection
        onClick={() => setIsHuman(false)}
        shouldShow={isHuman}
        showUpDelay={1}
      >
        {dictionary?.home.go_back_button}
      </ButtonSection>
    </>
  );
};
