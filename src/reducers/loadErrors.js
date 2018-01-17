import { LOAD_ERROR, CLEAR_ERROR } from '../actions/loading'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case LOAD_ERROR :
      if (payload instanceof Error) {
        return state.concat(payload.message)
      }
      if (payload instanceof String) {
        return state.concat(payload)
      }
      return state

    case CLEAR_ERROR :
      return state.filter((message) => message !== payload)

    default :
      return state
  }
}
