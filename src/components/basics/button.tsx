import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import { buttonPrimaryClass } from "./styles";

interface Props extends Omit<QwikIntrinsicElements["button"], "class"> {
  classArr?: string | string[];
}

export const ButtonPrimary = component$<Props>(
  ({ classArr = "", ...props }) => {
    return (
      // @ts-ignore
      <button class={[buttonPrimaryClass, classArr]} {...props}>
        <Slot />
      </button>
    );
  }
);
