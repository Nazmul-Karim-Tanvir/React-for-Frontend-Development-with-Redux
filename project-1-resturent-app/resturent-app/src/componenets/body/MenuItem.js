import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = ({ dish, onSelectDish }) => {
    return (
        <div>
            <Card inverse style={{ padding: 10, margin: 10, cursor:'pointer' }} onClick={() => onSelectDish(dish)}>
                <CardImg
                    alt={dish.name}
                    src={dish.image}
                    style={{
                        height: 270
                    }}
                    width="100%"
                />

                <CardImgOverlay>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default MenuItem;