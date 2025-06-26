import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart • SeasonDecor",
  description: "Cart"
};
export default function ClientLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return children;
}
