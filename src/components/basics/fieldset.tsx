import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { type HTMLAttributes, component$, Slot } from "@builder.io/qwik";
import { fieldsetClass } from "./styles";

interface Props
  extends Omit<QwikIntrinsicElements["fieldset"], "class">,
    HTMLAttributes<HTMLFieldSetElement> {
  classArr?: string | string[];
}

export const Fieldset = component$<Props>(({ classArr, ...props }) => {
  return (
    // @ts-ignore
    <fieldset class={[fieldsetClass, classArr]} {...props}>
      <Slot />
    </fieldset>
  );
});
