import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Fieldset, Label, Input, ButtonPrimary } from "../basics";
import {
  flexClass,
  flexItemsClass,
  flexRowClass,
  formClass,
  gapClass,
  importantTitleClass,
  maxWidth,
} from "../basics/styles";
import { PlusIcon } from "../icons";
import { useCategories, useCreateCategory } from "~/routes/tags";

export const CategoryForm = component$(() => {
  const data = useCategories();
  const action = useCreateCategory();

  return (
    <Form action={action} class={[formClass, maxWidth({ size: "medium" })]}>
      <h2
        class={[
          importantTitleClass({
            position: "left",
            margin: 0,
            weight: 700,
            size: "medium",
          }),
        ]}
      >
        Create category
      </h2>
      <Fieldset>
        <Label for="name">Name</Label>
        <div
          class={[
            formClass,
            maxWidth({ size: "medium" }),
            flexClass,
            flexRowClass,
            gapClass(),
            flexItemsClass({ flex: 1, align: "stretch" }),
          ]}
          style={{ padding: 0 }}
        >
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Skin Care"
            required
            minLength={3}
            style={{ flex: 1 }}
          />
          <ButtonPrimary
            type="submit"
            classArr={[
              flexClass,
              flexRowClass,
              gapClass({ size: "small" }),
              flexItemsClass({ align: "center" }),
            ]}
            style={{ lineHeight: 1 }}
          >
            <PlusIcon />
            Add new
          </ButtonPrimary>
        </div>
      </Fieldset>
    </Form>
  );
});
