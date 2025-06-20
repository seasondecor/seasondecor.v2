"use client";

import { ErrorPage } from "@/components";

export default function Error() {
  return <ErrorPage code={500} message="Internal server error" />;
}
