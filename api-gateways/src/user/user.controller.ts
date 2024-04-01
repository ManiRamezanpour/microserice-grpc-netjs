import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';

import {
  createUserRequest,
  getUserByIdResponse,
} from 'src/helpers/interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly userService: UserService;

  @Post('create')
  async createUser(
    @Body() body: createUserRequest,
  ): Promise<createUserRequest> {
    const response = await this.userService.createUser(body);
    return response;
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<getUserByIdResponse> {
    return this.userService.getUserById({ id });
  }
}

// export class UserController implements OnModuleInit {
//   private svc: UserServiceClient;
//   @Inject(UserService)
//   private userService: UserService;

//   @Inject('UserService')
//   private readonly client: ClientGrpc;

//   public onModuleInit(): void {
//     this.svc = this.client.getService<UserServiceClient>('UserService');
//   }

//   @Get('me')
//   getMe(): string {
//     return 'this is me';
//   }

// }
