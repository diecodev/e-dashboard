import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Fieldset, Label, Input } from "../basics";

export const CategoryForm = component$(() => {
  return (
    <Form>
      <h2>Add New Category</h2>
      <Fieldset>
        <Label for="name">Category Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Skin Care"
          required
          minLength={3}
        />
      </Fieldset>
    </Form>
  );
});
