import React from 'react';
import BoldrLogo from '../atm.BoldrLogo';
import logoImage from './boldr-white.png';

const inlineStyle = {
  logo: {
    verticalAlign: 'middle'
  },
  img: {
    verticalAlign: 'middle'
  },
  title: {
    verticalAlign: 'top',
    color: '#333'
  }
};
export default function SiteLogo(props) {
  return (
    <div className="sitelogo" style={ inlineStyle.logo }>
      <img src={ logoImage } alt="logo" height={ props.logoHeight } style={ inlineStyle.img } />
      <span style={ inlineStyle.title }>{ props.SiteLogoOrTitle }</span>
    </div>
  );
}

SiteLogo.propTypes = {
  SiteLogoOrTitle: React.PropTypes.string,
  logoHeight: React.PropTypes.string
};
