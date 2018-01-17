// src/reducers/recipes.js

import { FETCHED_RECIPES, FETCHED_ONE_RECIPE } from  '../actions/recipes'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_RECIPES :
      return payload.slice()

    case FETCHED_ONE_RECIPE :
      return [payload].concat(state)

    case 'TOGGLE_LIKE_RECIPE' :
      return state.map((recipe) => {
        if (recipe._id !== payload) return recipe
        return { ...recipe, liked: !recipe.liked }
      })

    default :
      return state
  }
}
