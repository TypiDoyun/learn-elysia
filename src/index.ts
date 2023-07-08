import { Elysia } from "elysia";
import loginForm from "./forms/login";

const app = new Elysia();

app.put("/login", ({ body }) => {
    console.log("")
    return `id: ${body.id}\npassword: ${body.password}`;
}, loginForm);

app.listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
