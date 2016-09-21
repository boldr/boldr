import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from '../../../../components/md/Cards';

const Widget = (props) => {
  return (
    <div>
      <Card>
      <CardTitle title={ props.name } subtitle={ props.subtitle } />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        </Card>
    </div>
  );
};

Widget.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string
};

export default Widget;
