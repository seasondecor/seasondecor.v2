import React from "react";
import {
  TbLeaf,
  TbSun,
  TbSunset,
  TbSnowflake,
  TbChristmasTree,
  TbGift,
  TbGhost2,
  TbEgg,
  TbHeart,
  TbCampfire,
  TbCake,
  TbDiamond,
  TbConfetti,
} from "react-icons/tb";

export type Season = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export const seasons: Season[] = [
  // Seasons
  { label: "Spring", value: "spring", icon: React.createElement(TbLeaf, { size: 18 }) },
  { label: "Summer", value: "summer", icon: React.createElement(TbSun, { size: 18 }) },
  { label: "Autumn", value: "autumn", icon: React.createElement(TbSunset, { size: 18 }) },
  { label: "Winter", value: "winter", icon: React.createElement(TbSnowflake, { size: 18 }) },

  // Holidays
  { label: "Christmas", value: "christmas", icon: React.createElement(TbChristmasTree, { size: 18 }) },
  { label: "New Year", value: "new-year", icon: React.createElement(TbGift, { size: 18 }) },
  { label: "Halloween", value: "halloween", icon: React.createElement(TbGhost2, { size: 18 }) },
  { label: "Easter", value: "easter", icon: React.createElement(TbEgg, { size: 18 }) },
  { label: "Valentine", value: "valentine", icon: React.createElement(TbHeart, { size: 18 }) },
  { label: "Tet", value: "tet", icon: React.createElement(TbCampfire, { size: 18 }) },

  // Personal Events
  { label: "Birthday", value: "birthday", icon: React.createElement(TbCake, { size: 18 }) },
  { label: "Wedding", value: "wedding", icon: React.createElement(TbDiamond, { size: 18 }) },
  { label: "Anniversary", value: "anniversary", icon: React.createElement(TbConfetti, { size: 18 }) },
];