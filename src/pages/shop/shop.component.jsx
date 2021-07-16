import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import {isCollectionsIsLoaded} from '../../redux/shop/shop.selector';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component{
    
    componentDidMount(){
        const {FetchCollectionAsync} = this.props;
        FetchCollectionAsync();


        // collectionRef.onSnapshot(async snapShot =>{
        //   const collectionsMap =  convertCollectionSnapshotToMap(snapShot);
        //     fillShop(collectionsMap);
        //     this.setState({loading:false});
        // });
    }
    
    render(){
        const {match} = this.props;
        return(
            <div className = 'shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
            )
    }

    
}


const mapDispatchToProps = dispatch => (
     {
        FetchCollectionAsync :()=>dispatch(fetchCollectionStartAsync()),

    }
);
export default connect(null,mapDispatchToProps)(ShopPage);