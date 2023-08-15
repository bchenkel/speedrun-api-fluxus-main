import { leaveRepository } from "../repositories/leave.repository";
import { studentRepository } from "../repositories/student.repository";

export class leaveService {
  private leaveRepository: leaveRepository;
  private studentRepository: studentRepository;

  constructor(
    leaveRepository: leaveRepository,
    studentRepository: studentRepository
  ) {
    this.leaveRepository = leaveRepository;
    this.studentRepository = studentRepository;
  }

  async create(data) {
    const leave = await this.leaveRepository.create(data);
    return leave;
  }

  async createVerifyingResponsible({ responsibleId, data }) {
    const student = this.studentRepository.readByStudentIdAndResponsibleId({
      responsibleId,
      studentId: data.studentId,
    });
    if (!student) {
      throw new Error("Aluno não encontrado");
    }
    const leave = await this.leaveRepository.create(data);
    return leave;
  }

  async read(id) {
    const leave = await this.leaveRepository.read(id);
    return leave;
  }

  async readAll(page, limit, filter, order) {
    const leaves = await this.leaveRepository.readAll(
      page,
      limit,
      filter,
      order
    );
    return leaves;
  }

  async update(id, data) {
    const leave = await this.leaveRepository.update(id, data);
    return leave;
  }

  async remove(id) {
    const leave = await this.leaveRepository.remove(id);
    return leave;
  }
}
