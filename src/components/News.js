import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pagesize: 8,
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0,
    };
  }

  async update() {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    let pareseddata = await data.json();
    this.props.setProgress(70);
    this.setState({
      loading: false,
      // page: this.state.page-1,
      totalArticles: pareseddata.totalResults,
      articles: pareseddata.articles,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c64f3f91914c42e2a6d56c1dd8b6be28&page=1&pagesize=${this.props.pagesize}`
    // let data = await fetch(url);
    // let pareseddata = await data.json();
    // this.setState({
    //   loading:false,
    //   articles: pareseddata.articles,
    //   totalArticles: pareseddata.totalResults,
    // })
    this.update();
  }
  fetchData =async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({page: this.state.page+1});
    let data = await fetch(url);
    let pareseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(pareseddata.articles),
    });
  }
  // handelPrevious = async () =>{
  //   // this.setState({loading:true});
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c64f3f91914c42e2a6d56c1dd8b6be28&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
  //   // let data = await fetch(url);
  //   // let pareseddata = await data.json();
  //   // this.setState({
  //   //   loading:false,
  //   //   page: this.state.page-1,
  //   //   articles: pareseddata.articles,
  //   // })
  //   this.setState({page: this.state.page-1});
  //   this.update();
  // };

  // handelNext = async () =>{
  //   //   this.setState({loading:true});
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c64f3f91914c42e2a6d56c1dd8b6be28&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
  //   // let data = await fetch(url);
  //   // let pareseddata = await data.json();
  //   // this.setState({
  //   //   loading:false,
  //   //   page: this.state.page+1,
  //   //   articles: pareseddata.articles,
  //   // })
  //   this.setState({page: this.state.page+1});
  //   this.update();
  // };
  render() {
    return (
      <>
        <h1 className="text-center" style={{marginTop:'80px'}}>
          Top Headlines -{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}
        </h1>
        {this.state.loading && <Spinner></Spinner>}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length!==this.state.totalArticles}
          loader={<Spinner></Spinner>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>No more news available</b>
            </p>
          }
        >
          <div className="container">

          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                        ? element.description.slice(0, 90)
                        : ""
                      }
                      imageUrl={
                        element.urlToImage
                        ? element.urlToImage
                        : "https://c.ndtvimg.com/2022-08/f5drfnmg_covid-india_625x300_17_August_22.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      time={element.publishedAt}
                      ></NewsItem>
                  </div>
                );
              })}
          </div>
              </div>
          {/* <div className="container d-flex justify-content-between">
          <button className="btn btn-dark btm-sm" disabled={this.state.page<=1} onClick={this.handelPrevious}>Previous</button>
          <button className="btn btn-dark btm-sm" onClick={this.handelNext} disabled = {this.state.page+1> Math.ceil(this.state.totalArticles/this.props.pagesize)} >Next</button>
        </div> */}
        </InfiniteScroll>
      </>
    );
  }
}
