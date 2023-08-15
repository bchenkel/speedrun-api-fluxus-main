import { paramIdSchema } from "../../schemas";
import { createResponsibleSchema, updateResponsibleSchema } from "../../schemas/admin";
import { responsibleService } from "../../services/admin/cruds";

export const createResponsible = async (req, res) => {
    const data = createResponsibleSchema.parse(req.body);
    const responsible = await responsibleService.create(data);
    res.status(201).json({ responsible });
  };
  export const readResponsible = async (req, res) => {
    const { id } = paramIdSchema.parse(req.params);
    const responsible = await responsibleService.read(id);
    res.status(200).json({ responsible });
  };
  export const readAllResponsibles = async (req, res) => {
    const responsibles = await responsibleService.readAll();
    res.status(200).json({ responsibles });
  };
  export const updateResponsible = async (req, res) => {
    const { id } = paramIdSchema.parse(req.params);
    const data = updateResponsibleSchema.parse(req.body);
    const responsible = await responsibleService.update(id, data);
    res.status(200).json({ responsible });
  };
  export const removeResponsible = async (req, res) => {
    const { id } = paramIdSchema.parse(req.params);
    const responsible = await responsibleService.remove(id);
    res.status(200).json({ responsible });
  };