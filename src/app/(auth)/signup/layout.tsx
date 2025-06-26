import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Sign up • SeasonDecor",
    description: "Sign up"
  };
  export default function ClientLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return children;
  }