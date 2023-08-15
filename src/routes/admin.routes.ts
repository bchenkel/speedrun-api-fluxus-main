import { Router } from "express";
import { errorAdapter } from "../middlewares/auth/error.middleware";
import * as AdminController from "../controllers/admin";
export const adminRouter = Router();

// Student CRUD
adminRouter.post("/student", errorAdapter(AdminController.createStudent));
adminRouter.get("/student/:id", errorAdapter(AdminController.readStudent));
adminRouter.get("/student", errorAdapter(AdminController.readAllStudents));
adminRouter.put("/student/:id", errorAdapter(AdminController.updateStudent));
adminRouter.delete("/student/:id", errorAdapter(AdminController.removeStudent));
// Student CRUD

// Responsible CRUD
adminRouter.post(
  "/responsible",
  errorAdapter(AdminController.createResponsible)
);
adminRouter.get(
  "/responsible/:id",
  errorAdapter(AdminController.readResponsible)
);
adminRouter.get(
  "/responsible",
  errorAdapter(AdminController.readAllResponsibles)
);
adminRouter.put(
  "/responsible/:id",
  errorAdapter(AdminController.updateResponsible)
);
adminRouter.delete(
  "/responsible/:id",
  errorAdapter(AdminController.removeResponsible)
);
// Responsible CRUD

// StudentResponsible CRUD
adminRouter.post(
  "/student-responsible",
  errorAdapter(AdminController.createStudentResponsible)
);
adminRouter.get(
  "/student-responsible",
  errorAdapter(AdminController.readStudentResponsible)
);
adminRouter.put(
  "/student-responsible",
  errorAdapter(AdminController.updateStudentResponsible)
);
adminRouter.delete(
  "/student-responsible",
  errorAdapter(AdminController.removeStudentResponsible)
);
// StudentResponsible CRUD

// Log CRUD
adminRouter.post("/log", errorAdapter(AdminController.createLog));
adminRouter.get("/log/:id", errorAdapter(AdminController.readLog));
adminRouter.get("/log", errorAdapter(AdminController.readAllLogs));
adminRouter.put("/log/:id", errorAdapter(AdminController.updateLog));
adminRouter.delete("/log/:id", errorAdapter(AdminController.removeLog));
// Log CRUD

// Leave CRUD
adminRouter.post("/leave", errorAdapter(AdminController.createLeave));
adminRouter.get("/leave/:id", errorAdapter(AdminController.readLeave));
adminRouter.get("/leave", errorAdapter(AdminController.readAllLeaves));
adminRouter.put("/leave/:id", errorAdapter(AdminController.updateLeave));
adminRouter.delete("/leave/:id", errorAdapter(AdminController.removeLeave));
// Leave CRUD
