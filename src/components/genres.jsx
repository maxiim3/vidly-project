import React from "react";

const Genres = (props) => {
  const { genres, onGenreChange, defaultGenre, currentGenre, output } = props;

  const getCLasses = (genre) => {
    let classes = "list-group-item list-group-item-action";
    if (currentGenre._id === genre._id) classes += " active";
    return classes;
  };

  return (
    <div className="list-group">
      <a
        key={defaultGenre._id}
        onClick={() => onGenreChange(defaultGenre)}
        className={getCLasses(defaultGenre)}
      >
        {defaultGenre.name}
      </a>
      {genres.map((genre) => (
        <a
          key={genre._id}
          onClick={() => onGenreChange(genre)}
          className={getCLasses(genre)}
        >
          {genre.name}
        </a>
      ))}
    </div>
  );
};

export default Genres;
