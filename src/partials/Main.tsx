import Container from "../styles/Container";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import MarcaIcon from "../../public/assets/marca.svg";
import { motion } from "framer-motion";

function Main() {
  return (
    <Container id="home" className="bg-primary gap-8">
      <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            x: { duration: 1 },
            default: { ease: "linear" }
          }}
        ><Image alt="Logo marca" src={MarcaIcon} width={840} /></motion.div>
      
      <SocialMedia />
    </Container>
  );
}

export default Main;
