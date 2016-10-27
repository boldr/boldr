import React from 'react';
import { PrimaryHeader, Footer, Grid, Col, Row } from 'components/index';
import Boldr from '../Boldr';
import { HeaderWrapper, ContentWrapper, FooterWrapper } from '../Wrappers';


const PageTemplate = ({ header, helmetMeta, hero, children, footer, ...props }) => {
  return (
    <div>
      { helmetMeta }
      <HeaderWrapper>{ header || <PrimaryHeader /> }</HeaderWrapper>
      { hero }
      <ContentWrapper>{ children }</ContentWrapper>
      <FooterWrapper>{ footer || <Footer /> }</FooterWrapper>
    </div>
  );
};

export default Boldr(PageTemplate);
