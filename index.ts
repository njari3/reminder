import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3300, () => console.log("Server started"));
