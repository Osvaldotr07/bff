import gravatar from '../../utils/gravatar'

test('Gravatar function test', () => {
  const email = 'osvaldorn10@gmail.com'
  const gravatarUrl = 'https://gravatar.com/avatar/799947f22b6a9978889b158a9c608de4'
  expect(gravatarUrl).toEqual(gravatar(email))
})