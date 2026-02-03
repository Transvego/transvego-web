import { Email } from "../components/icons/Email";
import { Marker } from "../components/icons/Marker";
import { Phone } from "../components/icons/Phone";
import { Tel } from "../components/icons/Tel";
import type { Contact } from "../types/contact";

export const CONTACT: Contact[] = [
  {
    icon: <Email />,
    label: "Correo",
    data: "info@transvego.com",
    href: "mailto:info@transvego.com",
  },
  {
    icon: <Phone />,
    label: "Whatsapp",
    data: "310 848 6714",
  },
  {
    icon: <Tel />,
    label: "Teléfono",
    data: "602 326 9418",
  },
  {
    icon: <Marker />,
    label: "Dirección",
    data: "Carrera 87 #6-28 Cali - Valle",
    href: "https://maps.app.goo.gl/9V4DyXvep4dfwkTRA?g_st=aw",
  },
];
