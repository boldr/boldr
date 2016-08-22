import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import DropdownListItem from '../DropdownListItem';
import styles from './DropdownList.css';


const cx = styles::classNames;

const DropdownList = ({ data, highlightHandler, parentClass, closeDropdowns }) =>
  <div className={ cx('dropdownList', { moreDropdownList: parentClass === 'moreDropdown' }) }>
    { data.title
      ? <h4 className={ cx('section-title') }>{ data.title }</h4>
      : null
    }
    <ul>
      { data.items.map(item =>
        <DropdownListItem
          key={ item.id }
          item={ item }
          highlightHandler={ highlightHandler }
          hasArrow={ data.hasArrows }
          parentClass={ parentClass }
          closeDropdowns={ closeDropdowns }
        />
      ) }
    </ul>
  </div>;

DropdownList.propTypes = {
  data: PropTypes.object,
  highlightHandler: PropTypes.func,
  dropdownReference: PropTypes.object,
  parentClass: PropTypes.string,
  closeDropdowns: PropTypes.func
};

export default DropdownList;
