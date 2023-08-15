export interface IRepository {
  create(data: any): Promise<any>;
  read(id: any): Promise<any>;
  readAll(page: number, limit: number, filter: any, order: any): Promise<any>;
  update(id: any, data: any): Promise<any>;
  remove(id: any): Promise<any>;
}
