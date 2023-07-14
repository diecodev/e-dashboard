import { component$ } from "@builder.io/qwik";
import { useCategories } from "~/routes/tags";
import { Wrapper } from "../basics";
import { SECONDARY_COLOR } from "~/libs/constants";

export const CategoryList = component$(() => {
  const data = useCategories();

  return (
    <Wrapper widthVariants={{ size: "medium" }} wrapperVariants={{ border: 0 }}>
      {data.value.length > 0 ? (
        <ul>
          {data.value.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            fontStyle: "italic",
            color: SECONDARY_COLOR,
            margin: 0,
          }}
        >
          No categories yet. Create one above.
        </p>
      )}
    </Wrapper>
  );
});
