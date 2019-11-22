import React from "react";
import Banner from "../components/Banner";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";
import Axios from "axios";
import withLayout from "../components/WithLayout";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popdata: [],
      trenddata: []
    };
  }

  componentDidMount() {
    Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr"
    )
      .then(res => {
        console.log(res.results);
        this.setState({ popdata: res.data.results });
      })
      .catch(err => {
        console.error(err);
      });
    Axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr"
    )
      .then(res => {
        console.log(res.results);
        this.setState({ trenddata: res.data.results });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div style={{ marginTop: "43%" }}>
        <Banner />
        <Preview />
        <MovieContainer data={this.state.popdata} name="TV 프로그램 ∙ 코미디" />
        <MovieContainer data={this.state.trenddata} name="kb0" />
      </div>
    );
  }
}

export default withLayout(Main);
