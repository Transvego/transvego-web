import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useForm, ValidationError } from "@formspree/react";
import { TextArea } from "../ui/TextArea";

const initialFormState = {
  name: "",
  email: "",
  msg: "",
};

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqeepkgo");
  const [contactForm, setContactForm] = useState(initialFormState);

  if (state.succeeded) {
    return (
      <p className="text-primary-transvego">
        Estartemos en contacto contigo al correo que indicaste.
      </p>
    );
  }

  const handleForm = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    contactForm.name.trim() !== "" &&
    contactForm.email.trim() !== "" &&
    contactForm.msg.trim() !== "";

  return (
    <form
      className="w-full lg:max-w-120 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <p className="font-medium text-primary-transvego/80">
        ¿Dónde nos comunicamos contigo?
      </p>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Nombre o Empresa"
            onChange={(e) => handleForm(e)}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Correo"
            onChange={(e) => handleForm(e)}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <TextArea
          id="msg"
          name="msg"
          placeholder="Mensaje"
          required
          onChange={(e) => handleForm(e)}
        />
        <ValidationError prefix="Message" field="msg" errors={state.errors} />
        <Button disabled={state.submitting || !isFormValid} type="submit">
          Enviar
        </Button>
      </div>
      <p className=" text-primary-transvego/60">
        Revisa nuestros
        <span className="border-b border-primary-transvego/40">
          <a href=""> términos y condiciones</a>
        </span>
      </p>
    </form>
  );
};
