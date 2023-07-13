import { formClass, importantTitleClass } from "../basics/styles";
import { Form } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { useLoginAction } from "~/routes/login";
import { Input, ButtonPrimary, Fieldset, Label, ErrorMessage } from "../basics";

export const LoginForm = component$(() => {
  const action = useLoginAction();

  return (
    <>
      <h2 class={importantTitleClass}>Sign in to UrDash</h2>
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
            placeholder="••••••••"
            required
            minLength={8}
            maxLength={24}
          />
        </Fieldset>

        <ErrorMessage>
          {action.value?.fieldErrors?.email ||
            action.value?.fieldErrors?.password ||
            action.value?.message}
        </ErrorMessage>
        <ButtonPrimary type="submit" disabled={action.isRunning}>
          Sign In
        </ButtonPrimary>
      </Form>
    </>
  );
});
