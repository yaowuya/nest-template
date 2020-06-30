import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fecth(id): string {
    return `Hello Word ${id}`;
  }

  save(message:string,num:number): string {
    return `Set Hello Done.${message}---${num}`;
  }

  update(id: string, message: string) {
    return `Update Hello Done. ${id}：${message}`;
  }

  remove(id: number): string {
    return `${id} Record Was Removed.`;
  }
}
