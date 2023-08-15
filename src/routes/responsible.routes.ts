import { Router } from "express";
import * as ResponsibleController from "../controllers/responsible";
import { roleMiddleware } from "../middlewares/auth/role.middleware";
import { errorAdapter } from "../middlewares/auth/error.middleware";

export const responsibleRouter = Router();

responsibleRouter.get(
  "/student",
  roleMiddleware(["responsible"]),
  errorAdapter(ResponsibleController.readAllStudents)
);

responsibleRouter.get(
  "/student/:id",
  roleMiddleware(["responsible"]),
  errorAdapter(ResponsibleController.readAllStudentLogs)
);

responsibleRouter.get(
  "/profile",
  roleMiddleware(["responsible"]),
  errorAdapter(ResponsibleController.readProfile)
);

// Leave routes
responsibleRouter.get(
  "/leave",
  roleMiddleware(["responsible"]),
  errorAdapter(ResponsibleController.readAllLeaves)
);
responsibleRouter.get(
  "/leave/:id",
  roleMiddleware(["responsible"]),
  errorAdapter(ResponsibleController.readLeave)
);
responsibleRouter.post(
  "/leave",
  roleMiddleware(["responsible"]),
  errorAdapter(ResponsibleController.createLeave)
);
responsibleRouter.put(
  "/leave/:id",
  roleMiddleware(["responsible"]),
  errorAdapter(ResponsibleController.updateLeave)
);
responsibleRouter.delete(
  "/leave/:id",
  roleMiddleware(["responsible"]),
  errorAdapter(ResponsibleController.removeLeave)
);
// Leave routes
