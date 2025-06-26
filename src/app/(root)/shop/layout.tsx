import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop • SeasonDecor",
  description: "Shop",
};
export default function ClientLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return children;
}
