"use client";

import { TranslateHumanButton } from "./TranslateHumanButton/TranslateHumanButton";

import { useState } from "react";

import { CodeProfileSection } from "./CodeProfileSection/CodeProfileSection";
import { ProfileSection } from "./ProfileSection/ProfileSection";
import { GoBackButton } from "./GoBackButton/GoBackButton";

export const Content = () => {
  const [isHuman, setIsHuman] = useState(false);

  return (
    <>
      <ProfileSection isHuman={isHuman} />
      <CodeProfileSection isHuman={isHuman} />
      <TranslateHumanButton
        onClick={() => setIsHuman(true)}
        isHuman={isHuman}
      />
      <GoBackButton onClick={() => setIsHuman(false)} isHuman={isHuman} />
    </>
  );
};
