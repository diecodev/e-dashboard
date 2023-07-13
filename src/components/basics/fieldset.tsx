import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import { fieldsetClass } from "./styles";

interface Props extends Omit<QwikIntrinsicElements["fieldset"], "class"> {
  className?: string;
}

export const Fieldset = component$<Props>(({ className = "", ...props }) => {
  return (
    // @ts-ignore
    <fieldset class={[fieldsetClass, className]} {...props}>
      <Slot />
    </fieldset>
  );
});
