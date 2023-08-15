import { prisma } from "../utils/prisma.service";
import { IRepository } from "./repository.interface";

export class studentRepository implements IRepository {
  constructor() {}

  async create(data) {
    const student = await prisma.student.create({
      data,
    });
    return student;
  }

  async read(id) {
    const student = await prisma.student.findUnique({
      where: {
        id,
      },
    });
    return student;
  }

  async readAll(page, limit, filter, order) {
    const students = await prisma.student.findMany({
      skip: page * limit,
      take: limit,
      orderBy: {
        [filter]: order,
      },
    });
    return students;
  }

  async readAllByResponsibleId(responsibleId) {
    const students = await prisma.student.findMany({
      where: {
        Responsible: {
          every: {
            responsibleId,
          },
        },
      },
    });
    return students;
  }

  async readByStudentIdAndResponsibleId({ studentId, responsibleId }) {
    const student = await prisma.student.findFirst({
      where: {
        AND: [
          {
            id: studentId,
          },
          {
            Responsible: {
              some: {
                responsibleId,
              },
            },
          },
        ],
      },
    });
    return student;
  }

  async update(id, data) {
    const student = await prisma.student.update({
      where: {
        id,
      },
      data,
    });
    return student;
  }

  async remove(id) {
    const student = await prisma.student.delete({
      where: {
        id,
      },
    });
    return student;
  }
}
