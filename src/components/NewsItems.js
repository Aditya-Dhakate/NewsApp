// import { getByTitle } from '@testing-library/react';
import React, { Component } from 'react';

export class NewsItems extends Component {



  render() {
    let {title, description, imageUrl, newsUrl, author,  date} = this.props;
    return (
    <div className="my-3">
        <div className="card" >
        <img src={!imageUrl?"https://i.gadgets360cdn.com/large/wordle_website_screenshot_new_1641474361623.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title"> {title}<span class="badge bg-secondary">New</span></h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {!author?"Unkonw":author} on {new Date(date).toGMTString()} 3 mins ago</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
     </div>
     

    </div>) 
  }
}

export default  NewsItems ;
