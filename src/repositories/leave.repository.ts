import { prisma } from "../utils/prisma.service";
import { IRepository } from "./repository.interface";

export class leaveRepository implements IRepository {
  async create(data) {
    const leave = await prisma.leave.create({
      data,
    });
    return leave;
  }

  async read(id) {
    const leave = await prisma.leave.findUnique({
      where: {
        id,
      },
    });
    return leave;
  }

  async readAll(page, limit, filter, order) {
    const leaves = await prisma.log.findMany({
      skip: page * limit,
      take: limit,
      orderBy: {
        [filter]: order,
      },
    });
    return leaves;
  }

  async update(id, data) {
    const leave = await prisma.leave.update({
      where: {
        id,
      },
      data,
    });
    return leave;
  }

  async remove(id) {
    const leave = await prisma.leave.delete({
      where: {
        id,
      },
    });
    return leave;
  }
}
