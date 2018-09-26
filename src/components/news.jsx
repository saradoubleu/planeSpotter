import React, { Component } from "react";

const NEWS_API_KEY = `${process.env.REACT_APP_NEWS_API_KEY}`;
const NEWS_URL =
  "https://newsapi.org/v2/everything?q=(YYZ OR YTZ)&language=en&pageSize=10&apiKey=" +
  NEWS_API_KEY;

class News extends Component {
  constructor() {
    super();
    this.state = {
      title: [],
      author: [],
      newsSource: [],
      pic: [],
      description: [],
      url: []
    };
  }

  componentDidMount() {
    //request - News related to Pearson and Billy Bishop (english only)
    fetch(NEWS_URL)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let newsData = data.articles.map(ntitle => {
          return (
            <div>
              <ul key={ntitle.results}>
                <a href={ntitle.url} target="_blank">
                  <li>
                    <h3>{ntitle.title}</h3>
                    {ntitle.author}
                    <br />
                    {ntitle.source.name}
                    <br />
                    <img src={ntitle.urlToImage} width="100" />
                    <br />
                    {ntitle.description}
                  </li>
                </a>
              </ul>
            </div>
          );
        });
        this.setState({ title: newsData });
      });
  }
  render() {
    console.log(NEWS_API_KEY);
    return (
      <div>
        {" "}
        <br />
        This is the News {this.state.title}
      </div>
    );
  }
}

export default News;
