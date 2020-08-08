import React from 'react';

import SHOP_DATA from './Shop.data';

import CollectionPreview from '../Components/Preview-Collection/preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            collections : SHOP_DATA
         }
    }
    render() { 
        return ( 
           <div className="shop-page">
               {this.state.collections.map(item => 
               <CollectionPreview key={item.id} items={item} /> )}  
           </div>
         );
    }
}
 
export default ShopPage;