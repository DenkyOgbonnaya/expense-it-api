import { Router } from "express";
import v1Routes from "./v1";

const appRouter = Router();

appRouter.use("/v1", v1Routes);

export default appRouter;
