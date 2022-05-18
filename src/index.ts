import express, { Request, Response, Express } from "express";
// import "./database/index"

const app: Express = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log("Server runing on port", PORT));
