import { Slug } from './slug'

test('should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Título -de_exemplo/')

  expect(slug.value).toEqual('titulo-de-exemplo')
})
