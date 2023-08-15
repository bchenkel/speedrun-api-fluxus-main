import { prisma } from "../utils/prisma.service";
import { IRepository } from "./repository.interface";

export class studentResponsibleRepository implements IRepository {
  async create({ studentId, responsibleId }) {
    const studentResponsible = await prisma.studentResponsible.create({
      data: {
        studentId,
        responsibleId,
      },
    });
    return studentResponsible;
  }

  async read({ studentId, responsibleId }) {
    const studentResponsible = await prisma.studentResponsible.findMany({
      where: {
        responsibleId: responsibleId,
        studentId: studentId,
      },
    });
    return studentResponsible;
  }

  async readAll() {
    const studentResponsible = await prisma.studentResponsible.findMany();
    return studentResponsible;
  }

  async update({ studentId, responsibleId }, data) {
    const studentResponsible = await prisma.studentResponsible.update({
      where: {
        studentId_responsibleId: {
          studentId: studentId,
          responsibleId: responsibleId,
        },
      },
      data,
    });
    return studentResponsible;
  }

  async remove({ studentId, responsibleId }) {
    const studentResponsible = await prisma.studentResponsible.delete({
      where: {
        studentId_responsibleId: {
          studentId: studentId,
          responsibleId: responsibleId,
        },
      },
    });
    return studentResponsible;
  }
}
