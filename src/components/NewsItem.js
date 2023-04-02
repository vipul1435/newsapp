import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,time} = this.props;
    return (
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'95%', zIndex:'1'}}>New</span>
        <img src={imageUrl} className="card-img-top" alt="..." style={{
          height: "10rem"
        }}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small> By {!author?"Unknown":author} on { new Date(time).toUTCString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
        </div>
    </div>
    )
  }
}
