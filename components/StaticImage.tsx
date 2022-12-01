import Image from "next/image";
import StaticImage from "public/test-image.jpeg";

export default function StaticImageTest() {
  return <Image src={StaticImage} alt="test-image" placeholder="blur" />;
}
