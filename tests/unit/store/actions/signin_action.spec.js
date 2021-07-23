import {Auth} from '@/api'
import actions from '@/store/actions'
import * as types from '@/store/mutation-types'

jest.mock('@/api')

describe('signin action', () => {
  describe('apiが成功', () => {
    test('APIからのレスポンスでミューテーションが呼ばれること', async () => {
      Auth.signin.mockResolvedValue({token: 'token', userId: 1})
      const commit = jest.fn()
      await actions.signin({commit}, {mailAddress: 'mailAddress', password: 'password'})

      expect(commit.mock.calls.length).toBe(1)
      expect(commit.mock.calls[0][0]).toBe(types.AUTH_SIGNIN)
      expect(commit.mock.calls[0][1].token).toBe('token')
      expect(commit.mock.calls[0][1].userId).toBe(1)
      
    })
  })
})