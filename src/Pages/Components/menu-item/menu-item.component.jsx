import React from 'react';

import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'
 const MenuItem = (props) =>{
     const {title, imageUrl, size, linkUrl} = props.items
      const { history, match } = props
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}/${linkUrl}`)}>
           <div className="background-image" style={{
               backgroundImage: `url(${imageUrl})`
               }}/>
             <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
              </div>

        </div>
    )
}
export default withRouter(MenuItem);