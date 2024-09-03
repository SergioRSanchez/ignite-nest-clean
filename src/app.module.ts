import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'

@Module({
  // Importar mais módulos
  imports: [],
  // Controllers é tudo que recebe requisição http
  controllers: [AppController],
  // Providers é todo o "resto", tudo que vai precisar injetar em outras classes
  // exemplo, uma classe que é um repositório do banco de dados, classe que é um caso de uso, classe que faz envio de email, e por aí vai
  providers: [AppService, PrismaService],
})
export class AppModule {}
