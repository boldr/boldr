// @flow
import React from 'react';
import BoldrLogo from '../BoldrLogo';

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
export default function SiteLogo(props: { site_logo: String, logoHeight: Number }) {
  return (
    <div className="sitelogo" style={ inlineStyle.logo }>
      <img src={ props.site_logo } alt="logo" height={ props.logoHeight } style={ inlineStyle.img } />
    </div>
  );
}
