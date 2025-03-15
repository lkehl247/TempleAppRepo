"use client";
import React from "react";
import { StatusBar } from "./StatusBar";
import { ProfileInfo } from "./ProfileInfo";
import { NavigationBar } from "./NavigationBar";

export const MembershipCard = () => {
  return (
    <main className="flex flex-col w-full bg-white min-h-[screen]">
      <StatusBar />
      <ProfileInfo />
      <NavigationBar />
    </main>
  );
};

export default MembershipCard;
