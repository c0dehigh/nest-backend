import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    console.log(`Fetching posts for user with id ${userId}`);

    return [];
  }
}
