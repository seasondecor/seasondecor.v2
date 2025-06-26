import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Log in • SeasonDecor",
    description: "Log in to your account",
  };
  export default function ClientLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return children;
  }