import React from "react";

// --------- HELPER FUNCTIONS ------------
// movieSearch: Format link based on query(user input-enter) == movieSearch(query)
import movieSearch from "./helperFuncs/movieSearch";
// movieIdSearch: Format link based on id == movieIdSearch(id)
import movieIdSearch from "./helperFuncs/movieIdSearch";
// movieImage: Image url formater == movieImage(url, size)
import movieImage from "./helperFuncs/movieImage";
// fetchingData: Async helper func to get movie with query, and then with movieIdSearch callback getting more info on particular movie
import fethcingData from "./helperFuncs/fetchingData";

// --------- COMPONENTS -------------
import Background from "./Background/Background";
import SearchInput from "./SearchInput/SearchInput";
import DataCard from "./DataCard/DataCard";

// ------- STYLING ---------
import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      original_title: "",
      backdrop_path: "",
      poster_path: "",
      genres: [],
      homepage: "",
      imdb_id: "",
      overview: "",
      release_date: "",
      revenue: "",
      runtime: "",
      tagline: "",
      vote_average: "",
      inputText: "",
      searchQuery: "v for vendeta",
      // doesExist: true,
      // id: "",
      // url: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  // Initial setState - display. On load.
  componentDidMount() {
    let url = movieSearch(this.state.searchQuery);
    fethcingData(url, movieIdSearch).then(data => {
      let {
        original_title,
        backdrop_path,
        poster_path,
        genres,
        homepage,
        imdb_id,
        overview,
        release_date,
        revenue,
        runtime,
        tagline,
        vote_average,
      } = data;
      genres = genres.map(genre => genre.name);

      this.setState({
        original_title,
        backdrop_path: movieImage(backdrop_path),
        poster_path: movieImage(poster_path),
        genres,
        homepage,
        imdb_id,
        overview,
        release_date,
        revenue,
        runtime,
        tagline,
        vote_average,
      });
    });
  }

  // Changing state when searchQuery changes(when user press enter). Displays new movie if state.searchQuery was changed.
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      let url = movieSearch(this.state.searchQuery);

      fethcingData(url, movieIdSearch)
        .then(data => {
          let {
            original_title,
            backdrop_path,
            poster_path,
            genres,
            homepage,
            imdb_id,
            overview,
            release_date,
            revenue,
            runtime,
            tagline,
            vote_average,
          } = data;
          genres = genres.map(genre => genre.name);

          this.setState({
            original_title,
            backdrop_path: movieImage(backdrop_path),
            poster_path: movieImage(poster_path),
            genres,
            homepage,
            imdb_id,
            overview,
            release_date,
            revenue,
            runtime,
            tagline,
            vote_average,
          });
        })
        .catch(err => console.log(err, "Bad query"));
    }
  }

  // Controls input. 1) Get value on change. 2) set inputText of state to that value.
  handleInputChange(e) {
    let text = e.target.value;
    this.setState({
      inputText: text,
    });
  }

  // Handling Enter key. 1) On enter press set searchQuery of state to current state.inputText.
  handleEnterPress(e) {
    if (e.key === "Enter") {
      this.setState({
        searchQuery: this.state.inputText,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Background img={this.state.backdrop_path} />
        <div className="searchInput-and-DataCard-container">
          <SearchInput
            mainState={this.state}
            inputChange={this.handleInputChange}
            enterPressed={this.handleEnterPress}
          />
          <DataCard mainState={this.state} />
        </div>
      </div>
    );
  }
}

export default App;











// Hm.. would this work if i had another component that is parrent of app, for example in index, and pass this func as props to app.

//  stateAndFetch() {
//     fethcingData(url, movieIdSearch).then(data => {
//       let {
//         original_title,
//         backdrop_path,
//         poster_path,
//         genres,
//         homepage,
//         imdb_id,
//         overview,
//         release_date,
//         revenue,
//         runtime,
//         tagline,
//         vote_average,
//       } = data;
//       genres = genres.map(genre => genre.name);

//       this.setState({
//         original_title,
//         backdrop_path: movieImage(backdrop_path),
//         poster_path: movieImage(poster_path),
//         genres,
//         homepage,
//         imdb_id,
//         overview,
//         release_date,
//         revenue,
//         runtime,
//         tagline,
//         vote_average,
//       });
//     });
//   }
