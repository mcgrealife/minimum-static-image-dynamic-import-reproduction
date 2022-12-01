import dynamic from "next/dynamic";

const DynamicStaticImage = dynamic(() => import("../components/StaticImage"), {
  ssr: false,
});

export default function Home() {
  return <DynamicStaticImage />;
}
