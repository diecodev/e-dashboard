import {
  type QwikIntrinsicElements,
  component$,
  Slot,
  type HTMLAttributes,
} from "@builder.io/qwik";
import { errorMessageClass } from "./styles";

interface Props
  extends Omit<QwikIntrinsicElements["p"], "class">,
    HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const ErrorMessage = component$<Props>(
  ({ className = "", ...props }) => {
    return (
      <p class={[errorMessageClass, className]} {...props}>
        <Slot />
      </p>
    );
  }
);
