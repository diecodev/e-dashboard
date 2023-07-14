import { component$ } from "@builder.io/qwik";
import { useCategories } from "~/routes/tags";

export const CategoryList = component$(() => {
  const data = useCategories();

  return (
    <section>
      <ul>
        {data.value.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </section>
  );
});
