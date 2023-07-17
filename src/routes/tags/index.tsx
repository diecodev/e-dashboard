import { component$ } from "@builder.io/qwik";
import { routeAction$, routeLoader$, z, zod$ } from "@builder.io/qwik-city";
import { db } from "@db";
import { categories } from "@db/schemas";
import {
  CategoryForm,
  CategoryList,
  SubcategoryForm,
} from "~/components/category";

export const useCategories = routeLoader$(async (reqEv) => {
  const categoriesArray = await db.query.categories.findMany({
    with: {
      subCategories: true,
    },
  });

  return categoriesArray;
});

export const useCreateCategory = routeAction$(
  async (data, reqEv) => {
    const { name } = data;

    // @ts-ignore
    // const categoriesArr = await reqEv.resolveValue(useCategories);
    console.log(reqEv.sharedMap.get("categories"));

    // const result = await db.insert(categories).values({name}).returning()
  },
  zod$({
    name: z.string().min(3),
  })
);

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
