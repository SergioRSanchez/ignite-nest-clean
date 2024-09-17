import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface CommentProps {
  authorId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export abstract class Comment<
  Props extends CommentProps,
> extends Entity<Props> {
  // GETTER para retornar o valor da propriedade authorId
  get authorId() {
    return this.props.authorId
  }

  get content() {
    return this.props.content
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  // Método privado para alterar o valor da propriedade updatedAt
  private touch() {
    this.props.updatedAt = new Date()
  }

  // SETTER para alterar o valor da propriedade content e chamar o método que atualiza o valor da propriedade updatedAt
  set content(content: string) {
    this.props.content = content

    this.touch()
  }
}
