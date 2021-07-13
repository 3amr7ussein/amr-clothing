import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/shop/collection-overview.component';

import CollectionPage from '../collection/collection.component';
const ShopPage = ({match})=>{
    
    console.log(match)
    
    return(
    <div className = 'shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
    )
    }
export default ShopPage