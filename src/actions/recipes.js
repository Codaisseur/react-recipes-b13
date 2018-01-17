import ApiClient from '../api/client'
import { loading, loadError } from './loading'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'
export const FETCHED_ONE_RECIPE = 'FETCHED_ONE_RECIPE'

const api = new ApiClient()

export const fetchRecipes = () => {
  return dispatch => {
    const path = '/recipes'
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_RECIPES, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

export const fetchRecipeById = (id) => {
  return dispatch => {
    const path = `/recipes/${id}`
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_ONE_RECIPE, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

export const toggleLikeRecipe = (recipeId) => {
  return {
    type: 'TOGGLE_LIKE_RECIPE',
    payload: recipeId
  }
}
