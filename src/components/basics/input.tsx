import {
  type QwikIntrinsicElements,
  type HTMLAttributes,
  component$,
} from "@builder.io/qwik";
import { inputClass } from "./styles";

interface Props
  extends Omit<QwikIntrinsicElements["input"], "class" | "children">,
    HTMLAttributes<HTMLInputElement> {
  classArr?: string | string[];
}

export const Input = component$<Props>(({ classArr = "", ...props }) => {
  return (
    // @ts-ignore
    <input class={[inputClass, classArr]} {...props} />
  );
});
