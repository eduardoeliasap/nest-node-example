import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class FetchRecentQuestionsController {
  constructor(private fetchQuestion: FetchRecentQuestionsUseCase) {}

  @Get()
  async handle(@Query('page') page: number) {
    const questions = await this.fetchQuestion.execute({ page })

    return { questions }
  }
}
