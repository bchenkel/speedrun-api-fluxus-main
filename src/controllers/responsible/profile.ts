import { payloadSchema } from "../../schemas";
import { profileService } from "../../services/responsible";

export const readProfile = async (req, res) => {
  const { id: responsibleId } = payloadSchema.parse(req.payload);
  const responsible = await profileService.read(responsibleId);
  res.status(200).json({ responsible });
};
