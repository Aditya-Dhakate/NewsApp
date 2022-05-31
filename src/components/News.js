import React, { Component } from 'react';
import NewsItems from './NewsItems';
// import { render } from 'react-dom';
import propType from 'prop-types';
// import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  articles =  [
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": "BBC Sport",
        "title": "Australia Women v England Women - Cricket - BBC Sport",
        "description": "Find out the in depth batting and bowling figures for Australia Women v England Women in the Women's International Twenty20 Match on BBC Sport.",
        "url": "https://www.bbc.co.uk/sport/cricket/scorecard/ECKO51137",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
        "publishedAt": "2022-01-22T04:07:24.2806915Z",
        "content": "<table><tr><th>Batter</th><th>How Out</th><th>Bowler</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>Mins</th><th>SR</th></tr>\r\n<tr><th>Total</th><th>(1.2 overs)</th><th>8-for0wickets</th><t… [+1148 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
 ]
 static defaultProps={ 
  
     country : 'in',
     pageSize : 6,
     category:'general',
   }

   static propType = {
    country:propType.string,
    pageSize:propType.number,
    category:propType.string,
  }
 
  constructor(props) {
    super(props);
    console.log("this is constructor from new components");
    this.state ={
        articles:[],
        loading:false,
        page:1
        
    }
    document.title = `${this.props.category} ~ News-AAKI`
  } 

  async updateNews(){
    this.props.setProgress(10);
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2c3342f02fb7472597eed0414a475af1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log (parsedData);
    this.setState({articles:parsedData.articles, totalArticles:parsedData.totalResult})
    this.props.setProgress(100);
  }

   async componentDidMount(){
    // console.log ("cdm")
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2c3342f02fb7472597eed0414a475af1&page=1&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log (parsedData);
    // this.setState({articles:parsedData.articles, totalArticles:parsedData.totalResult})
    this.updateNews();
  }
    
   handlePreviousClick = async ()=>{
    // console.log("Previous")
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2c3342f02fb7472597eed0414a475af1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log (parsedData);
    // this.setState({
    //   page:this.state.psge - 1,
    //   articles:parsedData.articles
    // })
    this.setState({page: this.state.page - 1});
    this.updateNews();
  } 
    handleNextClick = async()=>{
    console.log("Next");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pgeSize)){

    // }

    // else{
    //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2c3342f02fb7472597eed0414a475af1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log (parsedData);
    // this.setState({
    //   page:this.state.psge + 1,
    //   articles:parsedData.articles
    
    //   })
   
    // }
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }

  render() {
  // console.log ("render")
    return(

    <div className="container my-4">
      <h1 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}>NEWS AAPKI - TOP {this.props.category} HeadLine</h1>
      {/* <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll> */}
      <div className="row">
      {this.state.articles.map((element)=>{
       return <div className="col-md-4"key={element.url}>
          <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
          </div>
      })}       
      </div>
      <div className="container d-flex justify-content-around">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; PREVIOUS</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>NEXT &rarr;</button>
      </div>
    </div>
    ) 
  
    }
  }





// export default News