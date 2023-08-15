import { paramIdSchema } from "../../schemas";
import { createStudentSchema, updateStudentSchema } from "../../schemas/admin";
import { studentService } from "../../services/admin/cruds";

export const createStudent = async (req, res) => {
  const data = createStudentSchema.parse(req.body);
  const student = await studentService.create(data);
  res.status(201).json({ student });
};
export const readStudent = async (req, res) => {
  const { id } = paramIdSchema.parse(req.params);
  const student = await studentService.read(id);
  res.status(200).json({ student });
};
export const readAllStudents = async (req, res) => {
  const students = await studentService.readAll();
  res.status(200).json({ students });
};
export const updateStudent = async (req, res) => {
  const { id } = paramIdSchema.parse(req.params);
  const data = updateStudentSchema.parse(req.body);
  const student = await studentService.update(id, data);
  res.status(200).json({ student });
};
export const removeStudent = async (req, res) => {
  const { id } = paramIdSchema.parse(req.params);
  const student = await studentService.remove(id);
  res.status(200).json({ student });
};
