import Container from "../styles/Container";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import MarcaIcon from "../../public/assets/marca.svg";

function Main() {
  return (
    <Container id="home" className="bg-primary gap-8">
      <Image alt="Logo marca" src={MarcaIcon} width={840} />
      <SocialMedia />
    </Container>
  );
}

export default Main;
