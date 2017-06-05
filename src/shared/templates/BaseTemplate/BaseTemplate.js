/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Footer, Loader, Headline } from 'boldr-ui';
import Hero from '../../components/Hero/Hero';

type Props = {
  header: ReactElement,
  helmetMeta?: ReactElement,
  hero?: ReactElement,
  children: ReactChildren,
  footer?: ReactElement,
  dispatch: Function,
  actions: Object,
  me: ?User,
  isMobile: boolean,
  auth: Object,
  data: Object,
  bgColor: ?string,
  bgImg: ?string,
  heroContent: any,
};

const Wrapper = styled.div`
  min-height: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const ContentWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 150px;
  background-color: #e5eaed;
`;

const FooterWrapper = styled.div`
  margin-top: auto;
`;

export default class BaseTemplate extends Component {
  static defaultProps = {
    bgColor: '#00b4d0',
  };

  props: Props;
  render() {
    return (
      <Wrapper>
        {this.props.helmetMeta}
        {this.props.heroContent
          ? <Hero bgColor={this.props.bgColor} bgImg={this.props.bgImg}>
              {this.props.heroContent}
            </Hero>
          : null}
        <ContentWrapper>
          {this.props.children}
        </ContentWrapper>

        <FooterWrapper>
          {this.props.footer || <Footer />}
        </FooterWrapper>
      </Wrapper>
    );
  }
}

export { Wrapper, FooterWrapper };
