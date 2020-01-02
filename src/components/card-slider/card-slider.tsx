import * as React from "react";
import * as PropTypes from "prop-types";

import { CardItem } from "../../models";
import styled, {createGlobalStyle} from "styled-components";


const leftArrowIcon = require('./arrow_left.svg');
const rightArrowIcon = require('./arrow_right.svg');

const Slider = styled.div`
    width: 100%;
    min-height: 200px;
    top: 0;
    left: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: center;
`;


const Slider__arrow = createGlobalStyle`
    .slider__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100%;
    width: 50px;
    height: 50px;
    border: none;
    line-height: 50px;
    text-align: center;
    z-index: 1;
    background: #fff;
    box-shadow: 0 2px 0px -1px rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.03);
    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}

.slider__arrow--left {
    left: -25px;
    img {
        right: 4px;
    }
}

.slider__arrow--right {
    right: -25px;
    img {
        left: 4px;
    }
}

.slider__action {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background: rgba(255, 116, 12, 0.76);
    color: #fff;
    width: 100%;
}
`;

const Slider__inner = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => 340 * props.children.length}px;
        height: 100%;
        transition: all .55s ease-out;
        display: flex;
        flex-flow: row nowrap;
        transform: translateX(0);
`;

const Slider__contents = styled.div`
        margin: 1rem;
        text-align: center;
        display: flex;
        flex: 1;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        position:relative;
        background: url(${props => props.bgImageUrl}) top / cover no-repeat;
`;

const Slider__link = styled.a`
        position: absolute;
        color: #fff;
        background: rgba(2,2,2,.6);
        width: 100%;
        height: 100%;
        text-decoration: none;
        display: block;
        padding: 0;
        line-height: 0;
            &:hover{
                background: rgba(2,2,2,.8);
                .slider__action{
                    display:block;
                }
            }
`;

const Slider__title = styled.span`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        display: block;
        padding: 0;
`;


let xDown = null; // x axis down
const transletXIteration = 400;
function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}  


interface ICardSliderProps {
    cardItems: Array<CardItem>,
    actionText: string
}



export class CardSlider extends React.Component<ICardSliderProps>  {
    static propTypes = {
        cardItems: PropTypes.array.isRequired,
        actionText: PropTypes.string.isRequired
    }
 
    constructor(props: ICardSliderProps) {
        super(props);

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
    }


    handleTouchStart(e) {
        const firstTouch = getTouches(e)[0];                                      
        xDown = firstTouch.clientX;
    }

    handleTouchMove(e, sliderId, sliderInnerId) {
        var xUp = e.touches[0].clientX;
        if(xDown !== null){
            var xDiff = xDown - xUp;
        
            if ( xDiff > 0 ) {
                /* left swipe */ 
                this.translateRight(sliderId, sliderInnerId);
                
            } else if(xDiff < 0) {
                /* right swipe */
                this.translateLeft(sliderId, sliderInnerId);
            } 

        }
        /* reset values */
        xDown = null;
    }

    translateRight(sliderId, sliderInnerId) {
        const visibleWidth = document.getElementById(sliderId).offsetWidth;
        const elem = document.getElementById(sliderInnerId);
        let currentTranslateXValue = +elem.style.transform.toLowerCase().replace("translatex(", "").replace("px)", "");
        let fullwidth = elem.offsetWidth;

        if ((fullwidth - visibleWidth - Math.abs(currentTranslateXValue)) - transletXIteration > 0) {
            currentTranslateXValue = currentTranslateXValue - transletXIteration;
        } else {
            currentTranslateXValue = -(fullwidth - visibleWidth);
        }

        elem.style.transform = `translateX(${currentTranslateXValue}px)`;
    }

    translateLeft(sliderId, sliderInnerId) {
        const elem = document.getElementById(sliderInnerId);
        let currentTranslateXValue = +elem.style.transform.toLowerCase().replace("translatex(", "").replace("px)", "");
        if (Math.abs(currentTranslateXValue) - transletXIteration > 0) {
            currentTranslateXValue = currentTranslateXValue + transletXIteration;
        } else {
            currentTranslateXValue = 0;
        }

        elem.style.transform = `translateX(${currentTranslateXValue}px)`;
    }


    render() {
        const random = Math.floor(Math.random() * 10000000);
        const sliderId = 'slider' + random;
        const sliderInnerId='slider__inner' + random;
        return (
            <Slider id={sliderId}>
                <Slider__arrow />
                <button className="slider__arrow slider__arrow--left" onClick={() => this.translateLeft(sliderId, sliderInnerId)}>
                    <img src={leftArrowIcon} /> 
                </button>
                <button className="slider__arrow slider__arrow--right" onClick={() => this.translateRight(sliderId, sliderInnerId)}>
                    <img src={rightArrowIcon} /> 
                </button>
                
                <Slider__inner slideCount={this.props.cardItems.length} style={{transform: 'translateX(0)'}} id={sliderInnerId} onTouchStart={this.handleTouchStart} onTouchMove={() => this.handleTouchMove(event, sliderId, sliderInnerId)}>
                    {this.props.cardItems.map(item => {
                        return (
                            <Slider__contents key={'s' + item.id} bgImageUrl={item.photo}>
                                <Slider__link href={item.url}>
                                    <Slider__title>{item.text}</Slider__title>
                                    {this.props.actionText ? <span className="slider__action">{this.props.actionText}</span>:(<></>)}
                                </Slider__link>
                            </Slider__contents>
                        )
                    })}
                </Slider__inner>
            </Slider>
        );
    }
}




