import dynamic from "next/dynamic";

const DynamicStaticImage = dynamic(() => import("../components/StaticImage"), {
  ssr: true,
});

export default function Home() {
  return <DynamicStaticImage />;
}
