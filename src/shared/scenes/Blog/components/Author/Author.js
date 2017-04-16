/* @flow */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import Link from 'react-router-dom/Link';
import {Avatar, Heading, Col, Social, StyleClasses} from 'boldr-ui';

const BASE_ELEMENT = StyleClasses.POST_SIDEBAR_AUTHOR;

const AvatarName = styled.div`
  display: inline-block;
  vertical-align: middle;
  &:first-child {
    margin-right: 15px;
  }
`;
const BioBlock = styled.div`
  vertical-align: middle;
  margin-bottom: 15px;
  padding-top: 10px;
`;

type Props = {
  className: string,
  username: string,
  avatarUrl: string,
  lastName: string,
  firstName: string,
  bio: string,
  social: Object,
};
const Author = (props: Props) => {
  const classes = classnames(BASE_ELEMENT, props.className);
  const authorName = (
    <Link to={`/profiles/${props.username}`}>{props.username}</Link>
  );
  return (
    <div className={classes}>
      <AvatarName>
        <Avatar src={props.avatarUrl} role="presentation" />
      </AvatarName>
      <AvatarName><Heading size={3}>{authorName}</Heading></AvatarName>
      <BioBlock>{props.bio}</BioBlock>
      <Social
        facebook
        fburl={props.social.facebook.url}
        twitter
        turl={props.social.twitter.url}
        google
        gurl={props.social.google.url}
        github
        ghurl={props.social.github.url}
        linkedin
        lurl={props.social.linkedin.url}
      />
    </div>
  );
};

Author.defaultProps = {
  avatarUrl: '',
};

export default Author;
