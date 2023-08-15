import { responsibleRepository } from "../repositories/responsible.repository";

export class responsibleService {
  private responsibleRepository: responsibleRepository;

  constructor(responsibleRepository: responsibleRepository) {
    this.responsibleRepository = responsibleRepository;
  }

  async create(data) {
    const responsible = await this.responsibleRepository.create(data);
    return responsible;
  }

  async read(id) {
    const responsible = await this.responsibleRepository.read(id);
    return responsible;
  }

  async readAll(page, limit, filter, order) {
    const responsibles = await this.responsibleRepository.readAll(
      page,
      limit,
      filter,
      order
    );
    return responsibles;
  }

  async readAsProfile(id) {
    const responsible = await this.responsibleRepository.readAsProfile(id);
    return responsible;
  }

  async update(id, data) {
    const responsible = await this.responsibleRepository.update(id, data);
    return responsible;
  }

  async remove(id) {
    const responsible = await this.responsibleRepository.remove(id);
    return responsible;
  }
}
