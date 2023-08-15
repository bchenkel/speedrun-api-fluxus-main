import { LogType } from "@prisma/client";
import { prisma } from "./libs/prisma.service";

export const goService = async ({ fingerprint }) => {
  const today = new Date();
  const student = await prisma.student.findUnique({
    where: {
      fingerprint,
    },
  });
  if (!student) {
    throw new Error("Student not found");
  }
  const lastLog = await prisma.log.findFirst({
    where: {
      studentId: student.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  let type = "IN";
  if (lastLog?.type == LogType.IN) {
    type = "OUT";
    const logDay = new Date(lastLog.createdAt).getDate();
    const today = new Date().getDate();
    if (logDay != today) {
      type = "IN";
    }
  }

  const birth = new Date(student.birth);
  if (!isAdult(birth, today) && type == "OUT") {
    const studentStartClass = new Date();
    const studentEndClass = new Date();
    switch (student.shift) {
      case "MORNING":
        studentStartClass.setHours(
          parseInt((process.env.MORNING_START as string).split(":")[0])
        );
        studentStartClass.setMinutes(
          parseInt((process.env.MORNING_START as string).split(":")[1])
        );
        studentEndClass.setHours(
          parseInt((process.env.MORNING_END as string).split(":")[0])
        );
        studentEndClass.setMinutes(
          parseInt((process.env.MORNING_END as string).split(":")[1])
        );
        break;
      case "AFTERNOON":
        studentStartClass.setHours(
          parseInt((process.env.EVENING_START as string).split(":")[0])
        );
        studentStartClass.setMinutes(
          parseInt((process.env.EVENING_START as string).split(":")[1])
        );
        studentEndClass.setHours(
          parseInt((process.env.AFTERNOON_END as string).split(":")[0])
        );
        studentEndClass.setMinutes(
          parseInt((process.env.AFTERNOON_END as string).split(":")[1])
        );
        break;
      case "EVENING":
        studentStartClass.setHours(
          parseInt((process.env.EVENING_START as string).split(":")[0])
        );
        studentStartClass.setMinutes(
          parseInt((process.env.EVENING_START as string).split(":")[1])
        );
        studentEndClass.setHours(
          parseInt((process.env.EVENING_END as string).split(":")[0])
        );
        studentEndClass.setMinutes(
          parseInt((process.env.EVENING_END as string).split(":")[1])
        );
        break;
      default:
        throw new Error("Shift not found");
    }
    console.log(studentStartClass.toString());
    console.log(today.toString());
    console.log(studentEndClass.toString());
    if (
      studentStartClass.valueOf() < today.valueOf() &&
      today.valueOf() < studentEndClass.valueOf()
    ) {
      const leave = await prisma.leave.findFirst({
        where: {
          studentId: student.id,
        },
        orderBy: {
          end: "desc",
        },
      });
      if (!leave) {
        throw new Error("Student doesn't have leave");
      }
      if (new Date(leave.end).valueOf() < today.valueOf()) {
        throw new Error("The Student's leave is over");
      }
    }
  }

  const log = await prisma.log.create({
    data: {
      type: type as LogType,
      studentId: student.id,
    },
  });
  if (!log) {
    throw new Error("Error to create log");
  }
  return true;
};

function isAdult(birth: Date, today: Date): boolean {
  let age: number = today.getFullYear() - birth.getFullYear();
  if (
    birth.getMonth() >= today.getMonth() &&
    birth.getDate() > today.getDate()
  ) {
    age--;
  }
  if (age >= 18) {
    return true;
  }
  return false;
}
