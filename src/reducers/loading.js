import { LOADING, DONE_LOADING } from '../actions/loading'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case LOADING :
      return state.concat(payload)

    case DONE_LOADING :
      return state.filter((url) => url !== payload)

    default :
      return state
  }
}