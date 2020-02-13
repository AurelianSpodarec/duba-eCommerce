import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeView from './Home/HomeView';
import ProductList from './ProductList/ProductList';
import ProductItem from './ProductItem/ProductItem';
import NotFound from './NotFound/NotFound'

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/product-list" component={ProductList} />
                    <Route exact path={`/product-list/:id`} component={ProductItem} />
                    <Route path="*" component={NotFound} />
                </Router>
            </div>
        )
    }
}

export default Routes