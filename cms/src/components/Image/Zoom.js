import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Overlay from './Overlay';

const { bool, shape, string, object } = PropTypes;

const transitionDuration = 300;

class Zoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false,
      isZoomed: true,
      src: this.props.image.src
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleUnzoom = this.handleUnzoom.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  componentDidMount() {
    this.setState({ hasLoaded: true }); // eslint-disable-line
    if (this.props.src && !this.props.hasAlreadyLoaded) this.fetchZoomImage();
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  getZoomImageStyle() {
    const { image, shouldRespectMaxDimension, src, zoomMargin } = this.props;
    const imageOffset = image.getBoundingClientRect();

    const { top, left } = imageOffset;
    const { width, height, naturalWidth, naturalHeight } = image;

    const style = { top, left, width, height };

    if (!this.state.hasLoaded || !this.state.isZoomed) {
      return Object.assign({}, defaults.styles.zoomImage, this.props.style, style);
    }

    // Get the the coords for center of the viewport
    const viewportX = window.innerWidth / 2;
    const viewportY = window.innerHeight / 2;

    // Get the coords for center of the original image
    const imageCenterX = imageOffset.left + width / 2;
    const imageCenterY = imageOffset.top + height / 2;

    // Get offset amounts for image coords to be centered on screen
    const translateX = viewportX - imageCenterX;
    const translateY = viewportY - imageCenterY;

    // Figure out how much to scale the image
    const scale = shouldRespectMaxDimension && !src
      ? getMaxDimensionScale({ width, height, naturalWidth, naturalHeight, zoomMargin })
      : getScale({ width, height, zoomMargin });

    const zoomStyle = {
      transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`
    };

    return Object.assign({}, defaults.styles.zoomImage, this.props.style, style, zoomStyle);
  }
  handleUnzoom(e) {
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
    this.setState({ isZoomed: false }, () => setTimeout(this.props.onClick(this.state.src), transitionDuration));
  }
  fetchZoomImage() {
    const { src } = this.props;
    const img = new Image();
    img.src = src;
    img.onload = () => this.setState({ hasLoaded: true, src });
  }
  addListeners() {
    this.isTicking = false;
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('ontouchstart', this.handleTouchStart);
    window.addEventListener('ontouchmove', this.handleTouchMove);
    window.addEventListener('ontouchend', this.handleTouchEnd);
    window.addEventListener('ontouchcancel', this.handleTouchEnd);
  }

  removeListeners() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('ontouchstart', this.handleTouchStart);
    window.removeEventListener('ontouchmove', this.handleTouchMove);
    window.removeEventListener('ontouchend', this.handleTouchEnd);
    window.removeEventListener('ontouchcancel', this.handleTouchEnd);
  }
  handleResize() {
    this.forceUpdate();
  }

  handleScroll() {
    this.forceUpdate();
    if (this.state.isZoomed) this.handleUnzoom();
  }

  handleKeyUp({ which }) {
    const opts = {
      27: this.handleUnzoom
    };

    if (opts[which]) return opts[which]();
  }

  handleTouchStart(e) {
    this.yTouchPosition = e.touches[0].clientY;
  }

  handleTouchMove(e) {
    this.forceUpdate();
    const touchChange = Math.abs(e.touches[0].clientY - this.yTouchPosition);
    if (touchChange > 10 && this.state.isZoomed) this.handleUnzoom();
  }

  handleTouchEnd(e) {
    this.yTouchPosition = undefined;
  }

  render() {
    return (
      <div onClick={ this.handleUnzoom } style={ defaults.styles.zoomContainer }>
        <Overlay isVisible={ this.state.isZoomed } />
        <img
          src={ this.state.src }
          alt={ this.props.alt }
          className={ this.props.className }
          style={ this.getZoomImageStyle() }
        />
      </div>
    );
  }
}

/**
 * Figure out how much to scale based
 * solely on no maxing out the browser
 */
function getScale({ width, height, zoomMargin }) {
  const scaleX = window.innerWidth / (width + zoomMargin);
  const scaleY = window.innerHeight / (height + zoomMargin);
  return Math.min(scaleX, scaleY);
}

/**
 * Figure out how much to scale so you're
 * not larger than the original image
 */
function getMaxDimensionScale({ width, height, naturalWidth, naturalHeight, zoomMargin }) {
  const scale = getScale({ width: naturalWidth, height: naturalHeight, zoomMargin });
  const ratio = naturalWidth > naturalHeight
    ? naturalWidth / width
    : naturalHeight / height;
  return scale > 1 ? ratio : scale * ratio;
}

Zoom.propTypes = {
  src: string,
  alt: string,
  className: string,
  style: object,
  image: object.isRequired,
  hasAlreadyLoaded: bool.isRequired,
  onClick: func,
  shouldRespectMaxDimension: bool,
  zoomMargin: string
};
