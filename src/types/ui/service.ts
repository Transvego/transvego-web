import type { Service } from "../service";

export interface ServiceProps {
  service: Service;
  active: boolean;
  setActive: (index: number | null) => void;
  index: number;
}
