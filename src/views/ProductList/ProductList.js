import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductItem from './../ProductItem/ProductItem'

function ProductList() {
    // Low in stock is 30
    const [productList, setProductList] = useState([
        {
            "id": 1,
            "name": "Black Syntetic Jacket",
            "description": "",
            "image": "https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "product_type": "shoes",
            "created_at": "2020-02-03T21:17:23.829Z",
            "options": {
                "material": "syntetic",
                "size": ["sm", "md"],
                "color": "black",
            },
            "stock": 30,
            "tags": [],
            "price": {
                "currency_code": "GBP",
                "amount": 455.99
            },
            "rating": 5,
        },
        {
            "id": 2,
            "name": "Black Syntetic Jacket",
            "description": "",
            "image": "https://images.unsplash.com/photo-1552562739-152fee1f81f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80",
            "product_type": "shoes",
            "created_at": "2020-02-03T21:17:23.829Z",
            "options": {
                "material": "syntetic",
                "size": ["sm", "md"],
                "color": "black",
            },
            "stock": 30,
            "tags": [],
            "price": {
                "currency_code": "GBP",
                "amount": 455.99
            },
            "rating": 5,
        },
        {
            "id": 3,
            "name": "Black Syntetic Jacket",
            "description": "",
            "image": "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            "product_type": "shoes",
            "created_at": "2020-02-03T21:17:23.829Z",
            "options": {
                "material": "syntetic",
                "size": ["sm", "md"],
                "color": "black",
            },
            "stock": 30,
            "tags": [],
            "price": {
                "currency_code": "GBP",
                "amount": 455.99
            },
            "rating": 5,
        },
        {
            "id": 4,
            "name": "Black Syntetic Jacket",
            "description": "",
            "image": "https://images.unsplash.com/photo-1548286978-a0b1e5ff958f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            "product_type": "shoes",
            "created_at": "2020-02-03T21:17:23.829Z",
            "options": {
                "material": "syntetic",
                "size": ["sm", "md"],
                "color": "black",
            },
            "stock": 30,
            "tags": [],
            "price": {
                "currency_code": "GBP",
                "amount": 455.99
            },
            "rating": 5,
        },
        {
            "id": 5,
            "name": "Black Syntetic Jacket",
            "description": "",
            "image": "https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "product_type": "shoes",
            "created_at": "2020-02-03T21:17:23.829Z",
            "options": {
                "material": "syntetic",
                "size": ["sm", "md"],
                "color": "black",
            },
            "stock": 30,
            "tags": [],
            "price": {
                "currency_code": "GBP",
                "amount": 455.99
            },
            "rating": 5,
        },
        {
            "id": 6,
            "name": "Black Syntetic Jacket",
            "description": "",
            "image": "https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "product_type": "shoes",
            "created_at": "2020-02-03T21:17:23.829Z",
            "options": {
                "material": "syntetic",
                "size": ["sm", "md"],
                "color": "black",
            },
            "stock": 30,
            "tags": [],
            "price": {
                "currency_code": "GBP",
                "amount": 455.99
            },
            "rating": 5,
        },
    ]);

    return (
        <Container>
            <Row>
                <Col md="3">
                    <aside>
                        <h3>Sidebar</h3>

                    </aside>
                </Col>

                <Col md="9">
                    <section>
                        <Row>
                            {productList.map(product => {
                                return (
                                    <Col md="4">
                                        <ProductItem product={product} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductList;