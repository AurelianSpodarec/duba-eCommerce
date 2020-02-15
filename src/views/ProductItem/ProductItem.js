import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



const ProductItem = ({ product, loading }) => {

    function renderPrice() {
        if (loading) {
            return "Loading"
        } else if (product.price.sale_amount) {
            return `${product.price.sale_amount} from ${product.price.amount}`
        }

        return `${product.price.amount}`;
    }

    return (
        <Card>
            {loading ? "Loading" :
                <CardImg top width="100%" src={product.image} alt="Card image cap" />
            }
            <CardBody>
                {loading ? <CardTitle>Loading</CardTitle> :
                    <CardTitle>{product.name}</CardTitle>
                }
                {renderPrice()}
                <Button>Add to card</Button>
            </CardBody>
        </Card>
    )
}

export default ProductItem;