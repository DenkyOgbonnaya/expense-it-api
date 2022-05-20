import express, { Request, Response, Application } from "express";
import { errorHandler, logError, logErrorMiddleware } from "./error-handlers";
import appRouter from "./routes";
import "./database/index";

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api", appRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use(logErrorMiddleware);
app.use(errorHandler);

process.on("uncaughtException", (error) => {
  logError(error);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  console.log("errosr");
  process.exit(1);
});

app.listen(PORT, () => console.log("Server runing on port", PORT));
