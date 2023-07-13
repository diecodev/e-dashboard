import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import { inputClass } from "./styles";

interface Props extends Omit<QwikIntrinsicElements["input"], "class"> {
  className?: string;
}

export const Input = component$<Props>(({ className = "", ...props }) => {
  return (
    // @ts-ignore
    <input class={[inputClass, className]} {...props} />
  );
});
