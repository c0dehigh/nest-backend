import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    /**
     * Injecting Posts Service
     */
    private readonly postsService: PostsService,
  ) {}

  /**
   * GET localhost:3000/posts/:userId
   */

  @Get('/:userId')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }
}
