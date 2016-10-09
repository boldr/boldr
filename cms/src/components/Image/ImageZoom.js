/* eslint-disable no-unused-expressions */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Zoom from './Zoom';

const { bool, shape, string, object } = PropTypes;

const transitionDuration = 300;

const defaults = {
  styles: {
    image: {
      cursor: 'zoom-in'
    },
    zoomImage: {
      cursor: 'zoom-out',
      position: 'absolute',
      transition: `transform ${transitionDuration}ms`,
      transform: 'translate3d(0, 0, 0) scale(1)',
      transformOrigin: 'center center',
      willChange: 'transform, top, left'
    },
    zoomContainer: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 999,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#fff',
      opacity: 0,
      transition: `opacity ${transitionDuration}ms`
    }
  }
};

class ImageZoom extends Component {
  static get defaultProps() {
    return {
      isZoomed: false,
      shouldReplaceImage: true,
      shouldRespectMaxDimension: false,
      zoomMargin: 40
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      isZoomed: props.isZoomed,
      src: null
    };

    this.handleZoom = this.handleZoom.bind(this);
    this.handleUnzoom = this.handleUnzoom.bind(this);
  }

  componentDidMount() {
    this.portal = document.createElement('div');
    document.body.appendChild(this.portal);
    if (this.state.isZoomed) this.renderZoomed();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isZoomed !== this.props.isZoomed && this.portalInstance) {
      this.props.isZoomed ? this.renderZoomed() : this.portalInstance.handleUnzoom();
    } else if (prevState.isZoomed !== this.state.isZoomed) {
      this.state.isZoomed ? this.renderZoomed() : this.removeZoomed();
    }
  }
  componentWillUnmount() {
    document.body.removeChild(this.portal);
    delete this.portal;
    delete this.portalInstance;
  }
  getImageStyle() {
    const style = {};
    if (this.state.isZoomed) style.visibility = 'hidden';
    return Object.assign({}, defaults.styles.image, style, this.props.image.style);
  }
  removeZoomed() {
    if (this.portal) ReactDOM.unmountComponentAtNode(this.portal);
  }
  handleZoom() {
    this.setState({ isZoomed: true });
  }

  handleUnzoom(src) {
    return () => {
      const opts = { isZoomed: false };
      if (this.props.shouldReplaceImage) opts.src = src;
      this.setState(opts);
    };
  }
  renderZoomed() {
    const image = ReactDOM.findDOMNode(this);

    this.portalInstance = ReactDOM.render(
      <Zoom
        { ...this.props.zoomImage }
        image={ image }
        hasAlreadyLoaded={ !!this.state.src }
        shouldRespectMaxDimension={ this.props.shouldRespectMaxDimension }
        zoomMargin={ this.props.zoomMargin }
        onClick={ this.handleUnzoom }
      />
    , this.portal);
  }
  render() {
    return (
      <img
        src={ this.state.src || this.props.image.src }
        alt={ this.props.image.alt }
        className={ this.props.image.className }
        style={ this.getImageStyle() }
        onClick={ this.handleZoom }
      />
    );
  }
}

ImageZoom.propTypes = {
  image: shape({
    src: string.isRequired,
    alt: string,
    className: string,
    style: object
  }).isRequired,
  zoomImage: shape({
    src: string,
    alt: string,
    className: string,
    style: object
  }),
  isZoomed: bool,
  shouldReplaceImage: bool,
  shouldRespectMaxDimension: bool
};

export default ImageZoom;
