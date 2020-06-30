import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Query } from '@nestjs/common';
import { HelloService } from './hello.service';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Hello, UserRole } from './entity/hello';

@ApiBearerAuth()
@ApiTags('hello')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {
  }

  //查询
  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'role', enum: UserRole })
  @ApiResponse({
    status: 200,
    description: 'get ...',
    type: Hello,
  })
  fecth(@Query() { id }, @Headers('token') token): string {
    console.log(id, token);
    return this.helloService.fecth(id);
  }

  // 创建
  @Post()
  @ApiBody({ description: '填写更新内容' })
  save(@Body() { message, num }): string {
    console.log(message, num);
    return this.helloService.save(message, num);
  }

  // 更新
  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '请输入message' })
  update(@Param(){ id }, @Body(){ message }): string {
    return this.helloService.update(id, message);
  }

  // 删除
  @Delete()
  remove(@Query(){ id }): string {
    return this.helloService.remove(id);
  }
}
