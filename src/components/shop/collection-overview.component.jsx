import React from 'react'
import SHOP_DATA from '../../pages/shop/shop.data'
import CollectionPreview from '../preview-collection/collection-preview.component'
import { connect } from 'react-redux'
import { selectCollectionAsArray } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'
const CollectionOverview = ({collections}) => {
    return (
        < div  >
    {
        collections.map(({ id, ...otherCollectionData }) => (
            <CollectionPreview key={id} {...otherCollectionData} />))
    }
        </div >
    )}

const mapStateToProps = state => createStructuredSelector(
{    collections:selectCollectionAsArray
}   
)
    export default connect(mapStateToProps)(CollectionOverview);