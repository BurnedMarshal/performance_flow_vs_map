import express from "express";
import { flowTest } from "./flow";
import { mapTest } from "./map";
import http from "http";
const app = express();
app.listen(3000);

app.get("/flow", async (_, res) => {
  const result = await flowTest()();
  result.apply(res);
});

app.get("/map", async (_, res) => {
  const result = await mapTest()();
  result.apply(res);
});

http.createServer(app);
