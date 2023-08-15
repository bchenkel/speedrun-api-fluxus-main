import { paramIdSchema } from "../../schemas";
import { createLogSchema, updateLogSchema } from "../../schemas/admin";

export const createLog = async (req, res) => {
  const data = createLogSchema.parse(req.body);
  const log = await logService.create(data);
  res.status(201).json({ log });
};
export const readLog = async (req, res) => {
  const { id } = paramIdSchema.parse(req.params);
  const log = await logService.read(id);
  res.status(200).json({ log });
};
export const readAllLogs = async (req, res) => {
  const logs = await logService.readAll();
  res.status(200).json({ logs });
};
export const updateLog = async (req, res) => {
  const { id } = paramIdSchema.parse(req.params);
  const data = updateLogSchema.parse(req.body);
  const log = await logService.update(id, data);
  res.status(200).json({ log });
};
export const removeLog = async (req, res) => {
  const { id } = paramIdSchema.parse(req.params);
  const log = await logService.remove(id);
  res.status(200).json({ log });
};
