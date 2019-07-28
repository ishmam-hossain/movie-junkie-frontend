import React, { Component } from 'react';
import './App.css';
import { ListViewer } from './components/ListViewer';
import {LoadingScreen} from './components/Loader';
import { SearchBar } from './components/Search';


class App extends Component {
  constructor(props) {
    super(props);
    let baseURL = "https://yts.lt/api/v2/list_movies.json"
    this.state = {
      isLoaded: false,
      fetchURL: baseURL,
      data: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ isLoaded: false });
    let fetchUrl = this.state.fetchURL
    fetch(fetchUrl)
      .then(response => response.json())
      .then((jsonData) => {
        this.setState({
          data: jsonData,
          isLoaded: true
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    let isLoaded = this.state.isLoaded;

    if (isLoaded) {
      let movieList = this.state.data;
      return (
        <div>
          <SearchBar/>
          <ListViewer
              movieList={movieList}
          />
        </div>
      );
    }

    else {
      return (
        <div className="Spinner-logo">
          <LoadingScreen/> 
      </div>
      );
    }
  }

}

export default App;