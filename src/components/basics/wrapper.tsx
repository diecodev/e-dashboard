import { Slot, component$ } from "@builder.io/qwik";
import {
  type WrapperVariants,
  type MaxWidthVariants,
  wrapperClass,
  maxWidth,
  buttonPaddingClass,
} from "./styles";

interface Props {
  wrapperVariants?: WrapperVariants;
  widthVariants?: MaxWidthVariants;
}

export const Wrapper = component$<Props>(
  ({ widthVariants, wrapperVariants }) => {
    return (
      <ssection class={[maxWidth(widthVariants), buttonPaddingClass]}>
        <div class={[wrapperClass(wrapperVariants)]}>
          <Slot />
        </div>
      </ssection>
    );
  }
);
