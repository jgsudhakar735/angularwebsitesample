export default interface BaseInterface<T> {

  save(data: T);

  update(data: T);

  delete(id: number);

  retrieve(data: any);

}
