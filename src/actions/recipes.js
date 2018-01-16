import ApiClient from '../api/client'
import { loading, loadError } from './loading'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

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

export const toggleLikeRecipe = (recipeId) => {
  return {
    type: 'TOGGLE_LIKE_RECIPE',
    payload: recipeId
  }
}
