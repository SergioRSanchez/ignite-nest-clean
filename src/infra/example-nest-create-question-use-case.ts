import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestCreateQuestionUseCase extends CreateQuestionUseCase {
  constructor(questionsRepository: QuestionsRepository) {
    super(questionsRepository)
  }
}

/*
ESSE ARQUIVO É UM EXEMPLO A RESPEITO DA INJEÇÃO DE DEPENDÊNCIA DO NEST E COMO LIDAR COM CASOS DE USO QUE NÃO POSSUEM O 
INJECTABLE, POR CONTA DAS REGRAS DE DESACOPLAMENTOS, EM QUE DIZ QUE A CAMADA DE DOMÍNIO NÃO DEVE TER INTERFERÊNCIAS
EXTERNAS, COMO FRAMEWORKS.
OPTAMOS POR SUJAR UM POUCO O CÓDIGO, COLOCANDO A @INJEÇTABLE NO CASO DE USO, MAS ESSA É A REPRESENTAÇÃO DO QUE TERIA QUE
SER FEITO PARA CADA CASO DE USO DA APLICAÇÃO
NESSA ALTERNATIVA CRIAMOS UMA REPRESENTAÇÃO DO CASO DE USO NA CAMADA DE INFRAESTRUTURA, ESTENDENDO A CLASSE DO CASO DE
USO E REPETINDO O CONSTRUTOR, DAÍ ENTÃO USAR ESSA CLASSE NO CONTROLLER.
 */
