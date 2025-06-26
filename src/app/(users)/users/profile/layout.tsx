import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest profile • SeasonDecor",
  description: "Guest profile",
};
export default function ClientLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return children;
}
