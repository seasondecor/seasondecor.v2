import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Humans • SeasonDecor",
  description: "Humans",
};
export default function ClientLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return children;
}
