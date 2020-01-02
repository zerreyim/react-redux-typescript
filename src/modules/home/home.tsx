import "./home.scss";
import * as React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as movieActions from "../../redux/modules/movies/movieActions";
import * as categoryActions from "../../redux/modules/categories/categoryActions";
import { Movie, Category, CardItem } from "../../models";
import {BannerSlider} from "../../components";
import { CardSlider } from "../../components/card-slider/card-slider";



interface IHomeComponentProps {
  movies: Array<Movie>,
  categories: Array<Category>
  actions: any
}

class HomeComponent extends React.Component<IHomeComponentProps> {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  constructor(props: IHomeComponentProps) {
    super(props);
  }

componentDidMount() {
    const {movies , actions, categories } = this.props;
  
    if (movies.length === 0) {
      actions.loadMovies().catch(error => {
        alert("Loading movies failed" + error);
      });
    }

    if (categories.length === 0) {
      actions.loadCategories().catch(error => {
        alert("Loading categories failed" + error);
      });
    }

  }

  render() {
    
    return (

      <>
      <section className="banner-section elv-standard">
        <header>
          <h1>En Trend Filmler</h1>
        </header>
      <BannerSlider movies={this.props.movies.slice(1, 7)} />
      </section>
      <section className="category-section elv-standard">
        <header>
          <h2>Film Türleri</h2>
        </header>
      <CardSlider cardItems={this.props.categories.map(category => {
        return {
          id: category.id,
          photo: category.photo,
          url: '/category/' + category.slug,
          text: category.name
        } as CardItem
      })} actionText={''} />
      </section>
      </>
    )
  }
}

export const HomePage = connect(
  
  (state: any) => {
    return { 
      movies: state.movies,
      categories: state.categories
    };
  },
  (dispatch) => {
    return {
    actions: {
      loadMovies: bindActionCreators(movieActions.loadMovies, dispatch),
      loadCategories: bindActionCreators(categoryActions.loadCategories, dispatch)
    }
  };
  }
)(HomeComponent);

