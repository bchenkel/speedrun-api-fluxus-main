import { payloadSchema } from "../../schemas";
import { studentsService } from "../../services/responsible";

export const readAllStudents = async (req, res) => {
  const { id: responsibleId } = payloadSchema.parse(req.payload);
  const students = await studentsService.readAllStudents(responsibleId);
  res.status(200).json({ students });
};
