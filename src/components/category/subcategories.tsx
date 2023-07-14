import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Fieldset, Label, Input } from "../basics";
import { useCategories } from "~/routes/tags";

export const SubcategoryForm = component$(() => {
  const data = useCategories();
  console.log(data.value);

  return (
    <Form>
      <h2>Add New Subcategory</h2>
      <Fieldset>
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
    </Form>
  );
});
