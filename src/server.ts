import express from "express";

const app = express();
app.use(express.json({ limit: "100kb" }));

app.get("/", (_req, res) => {
  res.send("REXY X Clyde API online");
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`API listening on ${port}`);
});
