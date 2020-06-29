import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Query } from '@nestjs/common';
import { HelloService } from './hello.service';


@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {
  }

  //查询
  @Get()
  fecth(@Query() { id }, @Headers('token') token): string {
    console.log(id, token);
    return this.helloService.fecth(id);
  }

  // 创建
  @Post()
  save(@Body() { message, num }): string {
    console.log(message, num);
    return this.helloService.save(message, num);
  }

  // 更新
  @Put(':id')
  update(@Param(){ id }, @Body(){ message }): string {
    return this.helloService.update(id, message);
  }

  // 删除
  @Delete()
  remove(@Query(){ id }): string {
    return this.helloService.remove(id);
  }
}
