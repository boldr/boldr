import React from 'react';
import BoldrLogo from 'components/atm.BoldrLogo';

const inlineStyle = {
  logo: {
    paddingTop: '5px'
  },
  title: {
    verticalAlign: 'top',
    color: '#333'
  }
};
export default function SiteLogo(props) {
  return (
    <div className="sitelogo" style={ inlineStyle.logo }>
      <BoldrLogo width="50px" height="50px" />
      <span style={ inlineStyle.title }>{ props.SiteLogoOrTitle }</span>
    </div>
  );
}

SiteLogo.propTypes = {
  SiteLogoOrTitle: React.PropTypes.string
};
