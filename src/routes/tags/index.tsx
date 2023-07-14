import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { db } from "@db";
import { CategoryForm } from "~/components/category/categories";
import { SubcategoryForm } from "~/components/category/subcategories";

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
    <div>
      <h1>Tags</h1>
      <CategoryForm />
      <SubcategoryForm />
    </div>
  );
});
