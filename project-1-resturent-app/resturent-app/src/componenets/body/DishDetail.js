import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const DishDetail = ({ dish }) => {
  return (
    <div>
      <Card className='my-2'>
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: '100%'
          }}
          top
          width='100%'
        />
        <CardBody style={{textAlign:'left'}}>

          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>
            {dish.description}
          </CardText>
          <CardText>
            {dish.price}
          </CardText>

        </CardBody>

      </Card>
    </div>
  );
};

export default DishDetail;
