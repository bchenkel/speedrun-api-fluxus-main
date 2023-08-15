import { prisma } from "../utils/prisma.service";
import { IRepository } from "./repository.interface";

export class responsibleRepository implements IRepository {
  async create(data) {
    const responsible = await prisma.responsible.create({
      data,
    });
    return responsible;
  }

  async read(id) {
    const responsible = await prisma.responsible.findUnique({
      where: {
        id,
      },
    });
    return responsible;
  }

  async readAll(page, limit, filter, order) {
    const responsibles = await prisma.responsible.findMany({
      skip: page * limit,
      take: limit,
      orderBy: {
        [filter]: order,
      },
    });
    return responsibles;
  }

  async readAsProfile(id) {
    const responsible = await prisma.responsible.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        Student: {
          select: {
            Student: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      where: {
        id,
      },
    });
    return responsible;
  }

  async update(id, data) {
    const responsible = await prisma.responsible.update({
      where: {
        id,
      },
      data,
    });
    return responsible;
  }

  async remove(id) {
    const responsible = await prisma.responsible.delete({
      where: {
        id,
      },
    });
    return responsible;
  }
}
