import React, { useState } from "react";
import { Route } from "react-router-dom";
import { UserProvider } from "./Movies/userContext";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";

const App = () => {
  const [savedList, setSavedList] = useState(["a"]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <UserProvider savedList="a">
        <Route path={`/update-movie/:id`} component={UpdateMovie} />
      </UserProvider>
    </>
  );
};

export default App;
