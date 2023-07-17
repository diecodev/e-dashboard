import { formClass, importantTitleClass, maxWidth } from "../basics/styles";
import { Form } from "@builder.io/qwik-city";
import { component$, useTask$ } from "@builder.io/qwik";
import { useLoginAction } from "~/routes/login";
import { Input, ButtonPrimary, Fieldset, Label } from "../basics";
import { Toaster, toast } from "@moick/qwik";

export const LoginForm = component$(() => {
  const action = useLoginAction();

  useTask$(({ track }) => {
    const isFailed = track(() => action.value?.failed);

    if (isFailed)
      toast.error(
        action.value?.fieldErrors?.email ||
          action.value?.fieldErrors?.password ||
          action.value?.message
      );
  });

  return (
    <>
      <h2 class={importantTitleClass()}>Sign in to UrDash</h2>
      <Form action={action} class={[formClass, maxWidth()]}>
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

        <ButtonPrimary type="submit" disabled={action.isRunning}>
          Sign In
        </ButtonPrimary>
      </Form>
      <Toaster />
    </>
  );
});
