import { paramIdSchema, payloadSchema } from "../../schemas";
import { studentLogsService } from "../../services/responsible";

export const readAllStudentLogs = async (req, res) => {
  const { id: responsibleId } = payloadSchema.parse(req.payload);
  const { id: studentId } = paramIdSchema.parse(req.params);
  const logs = await studentLogsService.readAll(responsibleId, studentId);
  res.status(200).json({ logs });
};
