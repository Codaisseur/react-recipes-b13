export const LOADING = 'LOADING'
export const DONE_LOADING = 'DONE_LOADING'
export const LOAD_ERROR = 'LOAD_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const loading = (url, loading) => ({
  type: loading ? LOADING : DONE_LOADING,
  payload: url
})

export const loadError = (error) => ({
  type: LOAD_ERROR,
  payload: error
})

export const clearError = (error) => ({
  type: CLEAR_ERROR,
  payload: error
})