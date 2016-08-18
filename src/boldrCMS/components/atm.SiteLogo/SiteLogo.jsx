import React from 'react';
import BoldrLogo from '../atm.BoldrLogo';

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
      <img src={ require('./boldr-white.png') } alt="logo" height={ props.logoHeight } style={ inlineStyle.img } />
    </div>
  );
}

SiteLogo.propTypes = {
  SiteLogoOrTitle: React.PropTypes.string,
  logoHeight: React.PropTypes.string
};
