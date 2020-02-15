import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductItem from './../ProductItem/ProductItem';

import jackets from './../../json/products/jackets';
import { Link } from 'react-router-dom';


function ProductList() {
    // Low in stock is 30
    const [productList, setProductList] = useState([]);
    const [productListLength, setProductListLength] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setProductList(jackets)
            setProductListLength(jackets.length)
            setIsLoading(false)
        }, 1000)
    }, [])

    function getProducts() {
        if (isLoading) {
            return [...Array(9)].map((x, i) =>
                <Col key={i} md="4">
                    <ProductItem loading />
                </Col>
            )
        } else if (productList.length) {
            return productList.map(product =>
                <Col key={product.id} md="4">
                    <ProductItem product={product} />
                </Col>
            )
        }

        return "Not Found COmponent"
    }


    return (
        <Container>
            <Row>
                <Col md="3">
                    <aside>
                        <h3>Sidebar</h3>
                    </aside>
                </Col>

                <Col md="9">
                    <Row>
                        <h3>Jackets <span>({productListLength})</span></h3>
                        <Link href="/home">MMMMMMMMMMM</Link>
                    </Row>
                    <Row>
                        {getProducts()}
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default ProductList;