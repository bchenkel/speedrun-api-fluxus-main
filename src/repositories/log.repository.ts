import { prisma } from "../utils/prisma.service";
import { IRepository } from "./repository.interface";

export class logRepository implements IRepository {
  constructor() {}

  async create(data) {
    const log = await prisma.log.create({
      data,
    });
    return log;
  }

  async read(id) {
    const log = await prisma.log.findUnique({
      where: {
        id,
      },
    });
    return log;
  }

  async readAll(page, limit, filter, order) {
    const logs = await prisma.log.findMany({
      skip: page * limit,
      take: limit,
      orderBy: {
        [filter]: order,
      },
    });
    return logs;
  }

  async readAllByStudentId(studentId) {
    const logs = await prisma.log.findMany({
      where: {
        studentId,
      },
    });
    return logs;
  }

  async readAllGeneric({ name, startDate, endDate, startTime, endTime, type }) {
    // const logs = await prisma.log.findMany({
    //   where: {
    //     AND: [
    //       {
    //         Student: {
    //           name: {
    //             contains: name,
    //           },
    //         },
    //       },
    //       {
    //         createdAt: {
    //           lte: startDate,
    //           gte: endDate,
    //         },
    //       },
    //       {
    //         type: type,
    //       },
    //     ],
    //   },
    // });
    // return logs;
  }

  async update(id, data) {
    const log = await prisma.log.update({
      where: {
        id,
      },
      data,
    });
    return log;
  }

  async remove(id) {
    const log = await prisma.log.delete({
      where: {
        id,
      },
    });
    return log;
  }
}
