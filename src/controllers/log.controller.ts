import { paramIdSchema } from "../schemas";
import { createLogSchema, updateLogSchema } from "../schemas/admin";
import { logService } from "../services/log.service";

export class logController {
  private logService: logService;

  constructor(logService: logService) {
    this.logService = logService;
  }

  async create(req, res) {
    const data = createLogSchema.parse(req.body);
    const log = await this.logService.create(data);
    return res.status(201).json({ log });
  }

  async read(req, res) {
    const { id } = paramIdSchema.parse(req.params);
    const log = await this.logService.read(id);
    return res.status(200).json({ log });
  }

  async readAll(req, res) {
    const logs = await this.logService.readAll();
    return res.status(200).json({ logs });
  }

  async update(req, res) {
    const { id } = paramIdSchema.parse(req.params);
    const data = updateLogSchema.parse(req.body);
    const log = await this.logService.update(id, data);
    return res.status(200).json({ log });
  }

  async remove(req, res) {
    const { id } = paramIdSchema.parse(req.params);
    const log = await this.logService.remove(id);
    return res.status(200).json({ log });
  }
}

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
