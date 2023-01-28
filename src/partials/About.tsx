import Link from "next/link";
import Container from "../styles/Container";

function About() {
  return (
    <Container id="about" className="flex flex-col p-8 gap-y-10">
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div className="w-full flex flex-col items-start justify-center">
          <p className="font-mono font-bold text-xl text-secondary">Sobre</p>
          <p className="text-primary text-3xl font-extrabold">Quem sou eu</p>
        </div>
        <p className="text-justify w-30 sm:w-[500px] text-primary">
          Falar um pouco sobre mim
        </p>

        <Link href="/#projects" className="w-full underline"> Confira alguns dos meus projetos.</Link>

        {/* <button className="bg-primary text-white font-bold p-4 mt-8 rounded-md hover:bg-secondary hover:text-primary">
          Acessar currículo
        </button> */}
      </div>
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div className="w-full flex flex-col items-start justify-center">
          <p className="text-primary text-3xl font-extrabold">Formação</p>
        </div>
        <div>
          <div>Mestrado</div>
          <div>Graduação</div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div className="w-full flex flex-col items-start justify-center">
          <p className="text-primary text-3xl font-extrabold">Trabalho</p>
        </div>
        <div>
          <div>UEFS</div>
          <div>SENAC</div>
          <div>IFBA</div>
        </div>
      </div>
    </Container>
  );
}

export default About;
