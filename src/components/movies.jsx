import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./pagination";
import { getMovies } from "../services/fakeMovieService";
import Paginate from "./utils/paginate";

class Movies extends Component {
  state = {
    allMovies: getMovies(),
    pageSize: 4,
    currentPage : 1
  };

  handleDelete = (movie) => {
    const movies = this.state.allMovies.filter((m) => m._id !== movie._id);
    this.setState({ allMovies : movies });
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

  handlePageChange = page => {
    this.setState({currentPage : page})
  }

  render() {
    const { allMovies, pageSize, currentPage } = this.state;
    const { length : count } = allMovies
    const movies = Paginate(currentPage, allMovies, pageSize)

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
          <div>
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
              currentPage = {currentPage}
            />
          </div>
        )}
      </main>
    );
  }
}

export default Movies;
