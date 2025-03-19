"use client";
// @ts-ignore
import React from "react";

import { ProfileInfo } from "./ProfileInfo";

export const MembershipCard: React.FC = () => {
  return (
    <main className="flex flex-col w-full bg-white min-h-[screen]">
      <ProfileInfo />
    </main>
  );
};

export default MembershipCard;
