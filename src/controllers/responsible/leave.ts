import { paramIdSchema, payloadSchema } from "../../schemas";
import {
  createLeaveSchema,
  updateLeaveSchema,
} from "../../schemas/responsible";
import { leaveService } from "../../services/responsible";

export const createLeave = async (req, res) => {
  const { id: responsibleId } = payloadSchema.parse(req.payload);
  const data = createLeaveSchema.parse(req.body);
  const leave = await leaveService.create(responsibleId, data);
  res.status(200).json({ leave });
};
export const readLeave = async (req, res) => {
  const { id: responsibleId } = payloadSchema.parse(req.payload);
  const { id } = paramIdSchema.parse(req.params);
  const leave = await leaveService.read(responsibleId, id);
  res.status(200).json({ leave });
};
export const readAllLeaves = async (req, res) => {
  const { id: responsibleId } = payloadSchema.parse(req.payload);
  const leaves = await leaveService.readAll(responsibleId);
  res.status(200).json({ leaves });
};
export const updateLeave = async (req, res) => {
  const { id: responsibleId } = payloadSchema.parse(req.payload);
  const { id } = paramIdSchema.parse(req.params);
  const data = updateLeaveSchema.parse(req.body);
  const leave = await leaveService.update(responsibleId, id, data);
  res.status(200).json({ leave });
};
export const removeLeave = async (req, res) => {
  const { id: responsibleId } = payloadSchema.parse(req.payload);
  const { id } = paramIdSchema.parse(req.params);
  const leave = await leaveService.remove(responsibleId, id);
  res.status(200).json({ leave });
};
