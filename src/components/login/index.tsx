import { formClass } from "../basics/styles";
import { Form } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { useLoginAction } from "~/routes/login";
import { Input, ButtonPrimary, Fieldset, Label } from "../basics";

export const LoginForm = component$(() => {
  const action = useLoginAction();

  console.log(action.isRunning, action.status);

  return (
    <Form action={action} class={[formClass]}>
      <Fieldset>
        <Label for="email">Email address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="admin@admin.com"
          required
          minLength={6}
        />
      </Fieldset>
      <Fieldset>
        <Label for="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder={"\u25CF".repeat(8)}
          required
          minLength={8}
          maxLength={24}
        />
      </Fieldset>
      {action.value?.failed && (
        <p>
          {action.value.fieldErrors?.email ||
            action.value.fieldErrors?.password ||
            action.value.message}
        </p>
      )}
      <ButtonPrimary
        type="submit"
        disabled={action.isRunning || !action.value?.failed}
      >
        Sign In
      </ButtonPrimary>
    </Form>
  );
});
