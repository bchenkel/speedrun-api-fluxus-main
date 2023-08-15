import {
  createStudentResponsibleSchema,
  strictStudentResponsibleSchema,
  flexStudentResponsibleSchema,
  updateStudentResponsibleSchema,
} from "../../schemas/admin";
import { studentResponsibleService } from "../../services/admin/cruds";

export const createStudentResponsible = async (req, res) => {
  const data = createStudentResponsibleSchema.parse(req.body);
  const studentResponsible = await studentResponsibleService.create(data);
  res.status(201).json({ studentResponsible });
};
export const readStudentResponsible = async (req, res) => {
  const data = flexStudentResponsibleSchema.parse(req.query);
  const studentResponsible = await studentResponsibleService.read(data);
  res.status(200).json({ studentResponsible });
};
export const updateStudentResponsible = async (req, res) => {
  const oldData = strictStudentResponsibleSchema.parse(req.query);
  const newData = updateStudentResponsibleSchema.parse(req.body);
  const studentResponsible = await studentResponsibleService.update(
    oldData,
    newData
  );
  res.status(200).json({ studentResponsible });
};
export const removeStudentResponsible = async (req, res) => {
  const data = strictStudentResponsibleSchema.parse(req.query);
  const studentResponsible = await studentResponsibleService.remove(data);
  res.status(200).json({ studentResponsible });
};
