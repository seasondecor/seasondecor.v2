import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About us • SeasonDecor",
    description: "About us"
  };
  export default function ClientLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return children;
  }