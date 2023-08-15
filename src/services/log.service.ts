import { logRepository } from "../repositories/log.repository";
import { studentRepository } from "../repositories/student.repository";

export class logService {
  private logRepository: logRepository;
  private studentRepository: studentRepository;

  constructor(
    logRepository: logRepository,
    studentRepository: studentRepository
  ) {
    this.logRepository = logRepository;
    this.studentRepository = studentRepository;
  }

  async create(data) {
    const log = await this.logRepository.create(data);
    return log;
  }

  async read(id) {
    const log = await this.logRepository.read(id);
    return log;
  }

  async readAll(page, limit, filter, order) {
    const logs = await this.logRepository.readAll(page, limit, filter, order);
    return logs;
  }

  async readAllByStudentIdVerifyingResponsible({ studentId, responsibleId }) {
    const student =
      await this.studentRepository.readByStudentIdAndResponsibleId({
        studentId,
        responsibleId,
      });
    if (!student) {
      throw new Error("Aluno não encontrado");
    }
    const logs = await this.logRepository.readAllByStudentId(studentId);
    return logs;
  }

  async update(id, data) {
    const log = await this.logRepository.update(id, data);
    return log;
  }

  async remove(id) {
    const log = await this.logRepository.remove(id);
    return log;
  }
}
