import { signInValidate, signUpValidate } from '.'

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        email: '',
        password: ''
      }
      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should validate invalid email', () => {
      const values = {
        email: 'email',
        password: '1234'
      }
      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })
  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        username: '',
        email: '',
        password: ''
      }
      expect(signUpValidate(values)).toMatchObject({
        email: expect.any(String),
        username: expect.any(String),
        password: expect.any(String),
        confirmPassword: expect.any(String)
      })
    })

    it('should validate short username', () => {
      const values = {
        username: 'hi',
        email: '',
        password: ''
      }
      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should validate invalid email', () => {
      const values = {
        username: '',
        email: 'email',
        password: ''
      }
      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should validate if password does not with confirm password', () => {
      const values = {
        username: 'username',
        email: 'email@email.com',
        password: '123456',
        confirmPassword: '1234'
      }
      expect(signUpValidate(values).confirmPassword).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })
})
