import { Elysia } from "elysia";
const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);
app.get("/login", () => {
    console.log("누군가 로그인을 요청함.");
});
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
