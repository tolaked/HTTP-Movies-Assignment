import React, { useState } from "react";
import { Route } from "react-router-dom";
import { UserProvider } from "./Movies/userContext";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <UserProvider savedList={savedList}>
        <SavedList list={savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => {
            return <Movie {...props} addToSavedList={addToSavedList} />;
          }}
        />
        <Route
          path={`/update-movie/:id`}
          render={props => {
            return <MovieList {...props} addToSavedList={addToSavedList} />;
          }}
        />
      </UserProvider>
    </>
  );
};

export default App;
