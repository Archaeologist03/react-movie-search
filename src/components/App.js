import React from "react";
import movieSearch from "./helperFuncs/movieSearch";
import movieImage from "./helperFuncs/movieImage";

import Background from "./Background/Background";
import SearchInput from "./searchInput/SearchInput";
import DataCard from "./DataCard/DataCard";

import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      url: "",
      img: "",
    };
  }

  componentDidMount() {
    let url = movieSearch("interstellar");
    fetch(url)
      .then(data => data.json())
      .then(data => {
        data.results.forEach(res => console.log(res));
        this.setState({
          name: data.results[0].original_title,
          img: movieImage(data.results[0].backdrop_path),
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Background img={this.state.img} />
        <h1>{this.state.name}</h1>
        <div className="searchInput-and-DataCard-container">
          <SearchInput />
          <DataCard />
        </div>
      </div>
    );
  }
}

export default App;
