"use client";

import { useEffect } from "react";

interface OnMountTopProps {
  pathname: string;
}

export const OnMountTop = ({ pathname }: OnMountTopProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
