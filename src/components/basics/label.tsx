import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import { labelClass } from "./styles";

interface Props extends Omit<QwikIntrinsicElements["label"], "class"> {
  className?: string;
}

export const Label = component$<Props>(({ className = "", ...props }) => {
  return (
    // @ts-ignore
    <label class={[labelClass, className]} {...props}>
      <Slot />
    </label>
  );
});
