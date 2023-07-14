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
// import { useCategories } from "~/routes/tags";

export const SubcategoryForm = component$(() => {
  // const data = useCategories();

  return (
    <Form class={[formClass, maxWidth({ size: "medium" })]}>
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
        Add New Subcategory
      </h2>
      <div
        class={[
          formClass,
          maxWidth({ size: "medium" }),
          flexClass,
          flexRowClass,
          gapClass(),
          flexItemsClass({ align: "end" }),
        ]}
        style={{ padding: 0 }}
      >
        <Fieldset classArr={[flexItemsClass({ flex: 1, align: "stretch" })]}>
          <Label for="name">Subcategory Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Serums"
            required
            minLength={3}
          />
        </Fieldset>
        <ButtonPrimary
          type="submit"
          classArr={[flexClass, flexRowClass, gapClass({ size: "small" })]}
        >
          <PlusIcon />
          Add new
        </ButtonPrimary>
      </div>
    </Form>
  );
});
