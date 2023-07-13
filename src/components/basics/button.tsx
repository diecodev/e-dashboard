import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import { buttonPrimaryClass } from "./styles";

interface Props extends Omit<QwikIntrinsicElements["button"], "class"> {
  className?: string;
}

export const ButtonPrimary = component$<Props>(
  ({ className = "", ...props }) => {
    return (
      // @ts-ignore
      <button class={[buttonPrimaryClass, className]} {...props}>
        <Slot />
      </button>
    );
  }
);
