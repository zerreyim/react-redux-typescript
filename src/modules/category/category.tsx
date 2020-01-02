import "./category.scss";
import * as React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as movieActions from "../../redux/modules/movies/movieActions";
import * as categoryActions from "../../redux/modules/categories/categoryActions";
import { Movie, Category, CardItem } from "../../models";
import { CardSlider } from "../../components/card-slider/card-slider";
import { BannerSlider } from "../../components";



interface ICategoryComponentProps {
  movies: Array<Movie>,
  categories: Array<Category>
  actions: any,
  category: Category
}

class CategoryComponent extends React.Component<ICategoryComponentProps> {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired
  }
  constructor(props: ICategoryComponentProps) {
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
    <h1>Popüler {this.props.category.name} Filmleri</h1>
        </header>
      <BannerSlider movies={this.props.movies} />
      </section>
      <section className="movies-section elv-standard">
        <header>
          <h2>En Yeni {this.props.category.name} Filmleri</h2>
        </header>
      <CardSlider cardItems={this.props.movies.map(movie => {
        return {
          id: movie.id,
          photo: movie.photo,
          url: '/movie/' + movie.slug,
          text: movie.name
        } as CardItem
      })} actionText={'Hemen İzle'} />
      </section>

      <section className="movies-section elv-standard">
        <header>
          <h2>En Çok İzlenen {this.props.category.name} Filmleri</h2>
        </header>
      <CardSlider cardItems={this.props.movies.map(movie => {
        return {
          id: movie.id,
          photo: movie.photo,
          url: '/movie/' + movie.slug,
          text: movie.name
        } as CardItem
      }).reverse()} actionText={'Hemen İzle'} />
      </section>

      <section className="movies-section elv-standard">
        <header>
          <h2>En Çok Beğenilen {this.props.category.name} Filmleri</h2>
        </header>
      <CardSlider cardItems={this.props.movies.map(movie => {
        return {
          id: movie.id,
          photo: movie.photo,
          url: '/movie/' + movie.slug,
          text: movie.name
        } as CardItem
      })} actionText={'Hemen İzle'} />
      </section>
      </>
    )
  }
}

export const CategoryPage = connect(
  
  (state: any, ownProps: any) => {
    const slug = ownProps.match.params.slug;
    const category = slug && state.categories.length > 0 ?state.categories.find(category => category.slug === slug): {};
    const movies = slug && state.categories.length > 0 ? state.movies.filter(movie => movie.categoryId === category.id): [];
    return { 
      movies,
      categories: state.categories,
      category
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
)(CategoryComponent);


  