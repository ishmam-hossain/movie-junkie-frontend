import React, { Component } from 'react';
import './App.css';
import { ListViewer } from './components/ListViewer'



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
          <ListViewer
              movieList={movieList}
          />
        </div>
      );
    }

    else {
      return (
        <div>
          NO data
        </div>
      );
    }
  }

}

export default App;