import React, { Component, PropTypes } from 'react';
import { Editor } from 'draft-js';
import { Link } from 'react-router';
import Moment from 'moment';
import TagIcon from 'material-ui/svg-icons/action/bookmark';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import classNames from 'classnames/bind';
import TextDisplay from 'components/org.Editor/Display/index';
import styles from '../../style.css';

const cx = styles::classNames;

const PostCard = props => {
  const formattedDate = Moment(props.createdAt).format('MMMM Do YYYY, h:mm:ss a');
  const profileLink = `profile/public/${props.user.id}`;
  return (
      <Card>
        <CardMedia overlay={
          <CardTitle title={ props.title } subtitle={ formattedDate } />
        }>
          <img src={ props.featureImage } />
        </CardMedia>
        <CardText>
        { props.excerpt }
        </CardText>
        <div className={ cx('post__card-footer') }>
          <div className="row">
          <div className="col-xs-7">
            <ul style={ { display: 'flex', listStyleType: 'none' } }>
              <li><TagIcon /></li>
                 { props.tags.map(tag =>
                    <li key={ tag.id }>
                      <Link to={ `/tags/${tag.id}` } >{ tag.tagname } &nbsp;</Link>
                    </li>)
                 }
            </ul>
            </div>
            <div className="col-xs-5">
            <Link to={ `/blog/${props.slug}` }><RaisedButton label="Read More" /></Link>
            </div>
           </div>
          Posted by <Link to={ profileLink }>{ props.user.displayName }</Link>
        </div>
      </Card>
    );
};

PostCard.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  displayName: PropTypes.string,
  featureImage: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.array,
  content: PropTypes.string,
  user: PropTypes.object,
  slug: PropTypes.string
};

export default PostCard;
