import React, { Component } from "react";
import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import Paginate from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    allMovies: [], // <- Initial state
    genres: [], // <- Initial state
    currentPage: 1,
    pageSize: 4,
  };

  /**
   * Initialising the state after data are loaded
   */
  componentDidMount() {
    const genres = [{ name : "All Genres" }, ...getGenres()]
    this.setState({ allMovies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.allMovies.filter((m) => m._id !== movie._id);
    this.setState({ allMovies: movies });
  };

  handleReset = () => {
    this.setState({ allMovies: getMovies() });
  };

  handleLike = (movie) => {
    const allMovies = [...this.state.allMovies];
    const index = allMovies.indexOf(movie);
    allMovies[index] = { ...allMovies[index] };
    allMovies[index].liked = !allMovies[index].liked;
    this.setState({ allMovies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  };

  render() {
    const { allMovies, pageSize, currentPage, genres, selectedGenre } = this.state;
    let filtered = (selectedGenre && selectedGenre._id)
      ? (allMovies.filter(movie => movie.genre._id === selectedGenre._id))
      : allMovies;
    const { length: count } = filtered;
    const movies = Paginate(currentPage, filtered, pageSize);

    return (
      <main>
        <h1>
          <span className="badge badge-danger ml-50">Welcome to Vidly!</span>
        </h1>
        {count === 0 ? (
          <div>
            <p>No movies in Database!</p>
            <button
              onClick={() => this.handleReset()}
              className="btn btn-success"
            >
              Reload
            </button>
          </div>
        ) : (
          <div className="container-fluid">
            <div className={"row"}>
              {/* Left-hande side Column */}
              <div className="col-sm col-sm col-md-3">
                <ListGroup
                  items = {genres}
                  selectedItem={selectedGenre}
                  onItemSelect={this.handleGenreSelect}
                />
              </div>
              {/* Right-hande side Column */}
              <div className="col">
                <p className={"m-2 font-weight-bold"}>
                  Showing {count} movies in database
                </p>

                <table className={"table table-striped"}>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Stock</th>
                      <th>rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map((movie) => (
                      <tr key={movie._id}>
                        <td> {movie.title}</td>
                        <td> {movie.genre.name}</td>
                        <td> {movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                          <Like
                            liked={movie.liked}
                            onClick={() => this.handleLike(movie)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => this.handleDelete(movie)}
                            className={"btn btn-danger"}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  onPageChange={this.handlePageChange}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default Movies;
