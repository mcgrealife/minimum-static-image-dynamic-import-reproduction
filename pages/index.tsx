import dynamic from "next/dynamic";
import StaticImageTest from "../components/StaticImage";

// use the image directly (non-dynamic import) – no problems!
export default function Home() {
  return <StaticImageTest />;
}
