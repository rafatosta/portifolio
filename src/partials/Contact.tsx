import Container from "../styles/Container";
import { useForm } from "react-hook-form";

interface MailMessage {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MailMessage>();

  function onFormSubmit(data: MailMessage) {
    console.log(data);
  }
  return (
    <Container id="contact">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col justify-center items-center w-full p-8 gap-2"
      >
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <label className="flex flex-col w-full">
            Nome{" "}
            <input
              type="text"
              id="name"
              className={`border-2 rounded-lg p-2`}
              {...register("name", { required: true })}
            />
            <span className="text-[red]">
              {errors.name?.type === "required" && "Por favor, preencha o nome"}
            </span>
          </label>
          <label className="flex flex-col ">
            Telefone (opicional){" "}
            <input
              type="tel"
              id="phone"
              className="border-2 rounded-lg p-2"
              {...register("phone")}
            />
          </label>
        </div>

        <label className="flex flex-col w-full">
          Email{" "}
          <input
            type="text"
            id="email"
            className="border-2 rounded-lg p-2"
            {...register("email", { required: true })}
          />
          <span className="text-[red]">
            {errors.email?.type === "required" && "Por favor, preencha o email"}
          </span>
        </label>

        <label className="flex flex-col w-full">
          Assunto{" "}
          <input
            type="text"
            id="subject"
            className="border-2 rounded-lg p-2"
            {...register("subject", { required: true })}
          />
          <span className="text-[red]">
            {errors.subject?.type === "required" &&
              "Por favor, preencha o assunto"}
          </span>
        </label>

        <label className="flex flex-col w-full">
          Menssagem{" "}
          <textarea
            id="message"
            className="border-2 rounded-lg p-2"
            rows={10}
            {...register("message", { required: true })}
          />
          <span className="text-[red]">
            {errors.message?.type === "required" &&
              "A mensagem não pode ser vazia"}
          </span>
        </label>

        <button
          type="submit"
          className="border rounded-md font-semibold bg-primary text-white p-2 px-4 hover:bg-secondary hover:text-black active:bg-secondary/70"
        >
          Enviar menssagem
        </button>
      </form>
    </Container>
  );
}

export default Contact;
