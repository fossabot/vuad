import * as types from './exampleIndexTypes'
import { API_EXAMPLE } from '../constants/exampleConstants'
import { exampleService } from '../services'

export default {
  [types.EXAMPLE_REQUEST]: async ({ commit }: { commit: Function }) => {
    commit(types.EXAMPLE_REQUEST)

    try {
      const { data } = await exampleService.get(API_EXAMPLE)

      commit(types.EXAMPLE_SUCCESS, data)
    } catch (error) {
      commit(types.EXAMPLE_ERROR, error)
    }
  }
}
