import * as React from "react";
import * as PropTypes from "prop-types";
import styled, {createGlobalStyle} from "styled-components";
import { Movie } from "../../models";



interface IBannerSliderProps {
    movies: Array<Movie>
}

interface IBannerSliderState{
    activeSlideIdx: number // active slide index
}

const initialState: IBannerSliderState = {
    activeSlideIdx: 0
}

const Slider = styled.div`
    width: 100%;
    min-height: 400px;
    top: 0;
    left: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: center;
`;

const radioBtnSize = 12; // px
const btnColor = '#ccc';
const activeColor = '#18c1df';

const AnimationKeyframes = createGlobalStyle`
@keyframes check {
    50% {
        outline-color: ${activeColor};
        box-shadow: 0 0 0 ${radioBtnSize}px ${activeColor}, 0 0 0 ${radioBtnSize*3}px rgba(${activeColor}, 0.2);
    }
    100% {
        outline-color: ${activeColor};
        box-shadow: 0 0 0 0 ${activeColor}, 0 0 0 0 rgba(${activeColor}, 0);
    }
}
`;

const Slider__nav = styled.input`
        width: ${radioBtnSize}px;
        height: ${radioBtnSize}px;
        margin: 2rem ${radioBtnSize}px;
        border-radius: 50%;
        z-index: 10;
        outline: ${radioBtnSize / 2}px solid ${btnColor};
        outline-offset: ${radioBtnSize / -2}px;
        box-shadow: 0 0 0 0 ${activeColor}, 0 0 0 0 rgba(${activeColor}, 0);
        cursor: pointer;
        appearance: none;
        backface-visibility: hidden;

        &:checked {
            animation: check 0.5s linear forwards;
            &:nth-child(${props => props.value + 1}){
                       ~.slider__inner {
                            transform: translateX(${props => -100 * props.value / props.slideCount}%);
                        } 
                    }
            
            
        }
`;

const Slider__inner = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => 100 * props.children.length}%;
        height: 100%;
        transition: all .45s ease-out;
        display: flex;
        flex-flow: row nowrap;
`;

const Slider__contents = styled.div`
        padding: 2rem;
        text-align: center;
        display: flex;
        flex: 1;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        background-image: url(${props => props.bgImageUrl});
        background-size: cover;
        background-repeat: no-repeat;
        position:relative;
`;

const Slider__caption = styled.h2`
        font-weight: 700;
        margin: 2rem 0 1rem;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        text-transform: uppercase;
`;

const Slider__link = styled.a`
        position:absolute;
        opacity: .9;
        bottom: 3rem;
        right: 0;
        padding: 2rem;
        border-radius:0;
        &:hover{
            opacity:1;
        }
`;



export class BannerSlider extends React.Component<IBannerSliderProps, IBannerSliderState>  {
    static propTypes = {
        movies: PropTypes.array.isRequired
    }
    autoSlideInterval: any;

    constructor(props: IBannerSliderProps) {
    super(props);
    this.state = initialState;
  }

    autoSlide = () => {
            const slideCount = this.props.movies.length;
            const lastIdx = slideCount - 1;
            if (this.state.activeSlideIdx === lastIdx) {
                this.setState({ activeSlideIdx: 0});
            }
            else{
                this.setState({ activeSlideIdx: this.state.activeSlideIdx + 1 });
            }
            
            
        };

componentDidMount() {
    this.autoSlideInterval = setInterval(this.autoSlide, 4000);
        console.log(this.autoSlideInterval);
}

componentWillUnmount(){
    clearInterval(this.autoSlideInterval);
}
     
  slideNavigationHandler = (event) => {
      clearInterval(this.autoSlideInterval);
    const navigateTo = +event.currentTarget.value;
    this.setState({ activeSlideIdx: navigateTo });

    this.autoSlideInterval = setInterval(this.autoSlide, 5000);
  }


  

    render() {

        return (
            <Slider>
                <AnimationKeyframes />
                {this.props.movies.map((movie, idx) => {
                    return (
                    <Slider__nav key={'i-' + movie.id} type="radio" name="slider" title={'slide ' + idx} value={idx} onChange={this.slideNavigationHandler} checked={this.state.activeSlideIdx === idx} slideCount={this.props.movies.length} /> 
                    )
                })}
                
                <Slider__inner className={'slider__inner'} slideCount={this.props.movies.length}>
                    {this.props.movies.map(movie => {
                        return (
                            <Slider__contents key={'s' + movie.id} bgImageUrl={movie.photo}>
                                {/* <Slider__caption>{movie.name}</Slider__caption> */}
                                <Slider__link className="button button--danger" href="">Hemen İzle</Slider__link>
                            </Slider__contents>
                        )
                    })}
                </Slider__inner>
            </Slider>
            
        );
    }
}

