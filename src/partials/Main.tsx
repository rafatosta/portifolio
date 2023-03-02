import Container from "../styles/Container";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import MarcaIcon from "../../public/assets/marca.svg";
import { motion } from "framer-motion";
import Link from "next/link";

function Main() {
  return (
    <Container id="home" className="bg-primary gap-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
      >
        <Image alt="Logo-marca" src={MarcaIcon} width={840} priority />
      </motion.div>

      <SocialMedia />
      <Link
        className="border-2 border-secondary hover:bg-secondary/90 hover:text-primary text-secondary text-lg font-bold px-8 py-2 rounded-2xl"
        href="/#contact"
      >
        Contate-me
      </Link>
    </Container>
  );
}

export default Main;
