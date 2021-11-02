import { MUTATION_REGISTER } from 'graphql/mutations/register'

export const registerSuccessMock = {
  request: {
    query: MUTATION_REGISTER,
    variables: {
      input: {
        username: 'username',
        email: 'test@email.com',
        password: '123'
      }
    }
  },
  result: {
    data: {
      register: {
        jwt: 'jwt',
        user: {
          username: 'username',
          email: 'test@email.com'
        }
      }
    }
  }
}
