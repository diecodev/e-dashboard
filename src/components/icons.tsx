import { component$ } from "@builder.io/qwik";
import { iconClass, type IconsVariants } from "./basics/styles";

export const PlusIcon = component$<IconsVariants>((variants) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2.7"
    stroke="currentColor"
    class={iconClass(variants)}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 4v16 M4 12h16"
    />
  </svg>
));
