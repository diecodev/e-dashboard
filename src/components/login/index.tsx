import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useLoginAction } from "~/routes/login";
import { Input } from "../basics/input";

export const LoginForm = component$(() => {
  const action = useLoginAction();

  return (
    <Form action={action} class="">
      <label>
        <span>Email</span>
        <Input type="email" name="email" required minLength={6} />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          required
          minLength={8}
          maxLength={24}
        />
      </label>
      {action.value?.failed && (
        <p>
          {action.value.fieldErrors?.email ||
            action.value.fieldErrors?.password ||
            action.value.message}
        </p>
      )}
      <button type="submit">Login</button>
    </Form>
  );
});