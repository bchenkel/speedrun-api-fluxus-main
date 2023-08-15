import { paramIdSchema } from "../../schemas";
import { createLeaveSchema, updateLeaveSchema } from "../../schemas/admin";
import { leaveService } from "../../services/admin/cruds";

export const createLeave = async (req, res) => {
  const data = createLeaveSchema.parse(req.body);
  const leave = await leaveService.create(data);
  res.status(201).json({ leave });
};
export const readLeave = async (req, res) => {
  const { id } = paramIdSchema.parse(req.params);
  const leave = await leaveService.read(id);
  res.status(200).json({ leave });
};
export const readAllLeaves = async (req, res) => {
  const leaves = await leaveService.readAll();
  res.status(200).json({ leaves });
};
export const updateLeave = async (req, res) => {
  const { id } = paramIdSchema.parse(req.params);
  const data = updateLeaveSchema.parse(req.body);
  const leave = await leaveService.update(id, data);
  res.status(200).json({ leave });
};
export const removeLeave = async (req, res) => {
  const { id } = paramIdSchema.parse(req.params);
  const leave = await leaveService.remove(id);
  res.status(200).json({ leave });
};
