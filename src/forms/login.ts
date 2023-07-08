import { t } from "elysia";

const loginSchema = t.Object({
    id: t.String(),
    password: t.String()
});

const loginForm = {
    body: loginSchema,
    response: t.String()
}

export default loginForm;