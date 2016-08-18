import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './DropdownHighlight.css';

const cx = styles::classNames;

const DropdownHighlight = ({ data, parentClass, closeDropdowns }) =>
  <div
    className={ cx({
      highlight: parentClass !== 'moreDropdown',
      moreHighlight: parentClass === 'moreDropdown'
    }) }
  >
    { data.componentTitle ?
      <h4
        className={ cx('section-title') }
        dangerouslySetInnerHTML={ { __html: data.componentTitle } }
      >
      </h4>
      : null
    }
    <a
      href={ data.link }
      onClick={ closeDropdowns }
      className={ cx('content') }
      rel={ data.external ? 'external' : null }
    >
      <h5 className={ cx('title') }>{ data.title }</h5>
      { data.excerpt
        ? <p className={ cx('text') }>{ data.excerpt }</p>
        : null
      }
      { data.date
        ? <span className={ cx('time') }>{ data.date }</span>
        : null
      }
    </a>
    <div className={ cx('content') }>
      { (data.morelinks || []).map(({ href, text, external }, index) =>
        <a
          href={ href }
          className={ cx('link') }
          onClick={ closeDropdowns }
          key={ index }
          rel={ external ? 'external' : null }
        >{ text }</a>
      ) }
    </div>
  </div>
;

DropdownHighlight.propTypes = {
  data: PropTypes.object,
  parentClass: PropTypes.string,
  closeDropdowns: PropTypes.func
};

export default DropdownHighlight;
