import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqeepkgo");
  const [email, setEmail] = useState("")

  if (state.succeeded) {
    return <p>Estartemos en contacto contigo al correo que indicaste.</p>;
  }

  return (
    <form
      className="w-full md:max-w-120 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <p className="font-medium text-primary-transvego/80">
        ¿Dónde nos comunicamos contigo?
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Correo"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Button disabled={state.submitting || email === ""} type="submit">
          Enviar
        </Button>
      </div>
      <p className=" text-primary-transvego/60">
        Revisa nuestros
        <span className="hover:border-b border-primary-transvego/40">
          <a href=""> términos y condiciones</a>
        </span>
      </p>
    </form>
   
  );
};
