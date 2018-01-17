// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RecipeCategory from './RecipeCategory'
import LikeButton from '../components/LikeButton'
import { toggleLikeRecipe } from '../actions/recipes'
import './RecipeItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

export const recipeShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    photo: PropTypes.string,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    liked: PropTypes.bool
})

class RecipeItem extends PureComponent {
  static propTypes = {
    ...recipeShape.isRequired,
    toggleLikeRecipe: PropTypes.func.isRequired
  }

  toggleLike = () => {
    const { _id } = this.props
    this.props.toggleLikeRecipe(_id)
  }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, photo, liked } = this.props
    const categories = { vegan, vegetarian, pescatarian }

    return(
      <article className="RecipeItem">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />

          <h1>
            <Link to={`/recipes/${_id}`}>
              {title}
            </Link>
          </h1>

          <ul className="categories">
            <RecipeCategory { ...categories } />
          </ul>
        </header>
        <div>
          <p>{ summary }</p>
        </div>
        <footer>
          <LikeButton
            onChange={this.toggleLike}
            liked={liked}
          />
        </footer>
      </article>
    )
  }
}

const mapDispatchToProps = {
  toggleLikeRecipe
}

export default connect(null, mapDispatchToProps)(RecipeItem)
