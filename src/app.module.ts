import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'

@Module({
  // Importar mais módulos
  imports: [],
  // Controllers é tudo que recebe requisição http
  controllers: [CreateAccountController],
  // Providers é todo o "resto", tudo que vai precisar injetar em outras classes
  // exemplo, uma classe que é um repositório do banco de dados, classe que é um caso de uso, classe que faz envio de email, e por aí vai
  providers: [PrismaService],
})
export class AppModule {}
