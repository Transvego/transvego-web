import { Rating } from "../ui/Rating";

export const ClientCard = () => {
  return (
    <article className="py-5 px-6 flex flex-col gap-5 rounded-3xl bg-gray-transvego lg:max-w-150">
      <p className="text-primary-transvego">
        Transvego es sinónimo de calidad. En nuestro sector, el tiempo es
        crítico, y su servicio es impecable. Nunca hemos tenido un retraso que
        afecte nuestra cadena de suministro.
      </p>
      <Rating />
      <div>
        <figure className="flex gap-4 items-center">
            {/* <div className="bg-primary-transvego/40 w-10 h-10 rounded-full"/> */}
          <img className="w-10 h-10 rounded-full" src="/images/clients/lacabaña.png" alt="Ingenio La Cabaña" />
          <figcaption className="flex flex-col text-primary-transvego">
            Ingenio La Cabaña
            <span className="text-primary-transvego/60"></span>
          </figcaption>
        </figure>
      </div>
    </article>
  );
};
