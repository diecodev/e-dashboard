import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { db } from "@db";
import {
  CategoryForm,
  CategoryList,
  SubcategoryForm,
} from "~/components/category";

export const useCategories = routeLoader$(async () => {
  const categoriesArray = await db.query.categories.findMany({
    with: {
      subCategories: true,
    },
  });
  return categoriesArray;
});

export default component$(() => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
      <div>
        <CategoryForm />
        <CategoryList />
      </div>
      <SubcategoryForm />
    </div>
  );
});
