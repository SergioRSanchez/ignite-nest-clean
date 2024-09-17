import { Module } from '@nestjs/common'

import { CreateAccountController } from './controllers/create-account.controller'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  // Controllers é tudo que recebe requisição http
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  // Providers é todo o "resto", tudo que vai precisar injetar em outras classes
  // exemplo, uma classe que é um repositório do banco de dados, classe que é um caso de uso, classe que faz envio de email, e por aí vai
  providers: [PrismaService],
})
export class HttpModule {}
