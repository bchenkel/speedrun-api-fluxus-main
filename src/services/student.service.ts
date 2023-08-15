import { studentRepository } from "../repositories/student.repository";

export class studentService {
  private studentRepository: studentRepository;

  constructor(studentRepository: studentRepository) {
    this.studentRepository = studentRepository;
  }

  async create(data) {
    const student = await this.studentRepository.create(data);
    return student;
  }

  async read(id) {
    const student = await this.studentRepository.read(id);
    return student;
  }

  async readAllByResponsibleId(responsibleId) {
    const students = await this.studentRepository.readAllByResponsibleId(
      responsibleId
    );
    if (!students) {
      throw new Error("Nenhum aluno encontrado");
    }
    return students;
  }

  async readAll(page, limit, filter, order) {
    const students = await this.studentRepository.readAll(
      page,
      limit,
      filter,
      order
    );
    return students;
  }

  async update(id, data) {
    const student = await this.studentRepository.update(id, data);
    return student;
  }

  async remove(id) {
    const student = await this.studentRepository.remove(id);
    return student;
  }
}
