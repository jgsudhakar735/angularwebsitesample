import BaseInterface from "./BaseInterface";

export class BaseImpl<T> implements BaseInterface<T> {

  save(data: T) {
    console.log(' Save API Calling ');
    console.log(data);
  }
  update(data: T) {
    console.log(' Update API Calling ');
    console.log(data);
  }
  delete(id: number) {
    console.log(' Delete API Calling ');
    console.log(id)
  }
  retrieve(data: any) {
    console.log(' Retrieve API Calling ');
    console.log(data);
  }

}
