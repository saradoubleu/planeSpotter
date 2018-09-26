import React, { Component } from "react";

class News extends Component {
  constructor() {
    super();
    //API Key 4f178c1a6fde4aec9380850af1c2b258
    this.state = {
      name: [],
      author: [],
      title: [],
      description: [],
      url: [],
      publishedAt: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=(YYZ OR YTZ)&language=en&apiKey=4f178c1a6fde4aec9380850af1c2b258"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log("DATA***", data.articles);
        let newsData = data.articles.map(ntitle => {
          console.log("TITLES***", ntitle);
          return (
            <div>
              <ul key={ntitle.results}>
                <a href={ntitle.url} target="_blank">
                  <li>
                    <h3>{ntitle.title}</h3>
                    <br />
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
        console.log("TITLE****", this.state.ntitle);
      });
  }
  render() {
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
