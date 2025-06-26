import { Metadata } from 'next';


export const metadata : Metadata = {
    title: "Decor Services • SeasonDecor",
    description: "Decor Services"
  };
  export default function ClientLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return children;
  }