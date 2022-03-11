import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginFormModal/LoginForm";
import SignUpForm from "./components/auth/SignUpFormModal/SignUpForm";
import NavBar from "./components/NavBar";
// import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Home from "./components/Home/home";
import { authenticate } from "./store/session";
import Playlist from "./components/Playlist/Playlist";
import Artists from "./components/Artists/artists";
import Albums from "./components/Albums/albums";
import MainSearch from "./components/Search/search";
import MoodPlaylists from "./components/MoodPlaylists/MoodPlaylists";
import UserProfile from "./components/UserProfile/UserProfile";
import PSearch from "./components/PlaylistSearchModal/playlistSearch";
import SideBar from "./components/Home/Sidebar"

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route> */}
        {/* <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        {/* <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute> */}
        {/* <ProtectedRoute path="/" exact={true}>
          <Home />
        </ProtectedRoute> */}
        <Route path="/users/:userId">
          <UserProfile />
        </Route>
        <Route path="/artists/:artistName">
          <Artists />
        </Route>
        <Route path="/albums/:albumName">
          <Albums />
        </Route>
        <Route path="/search" exact={true}>
          <MainSearch />
        </Route>
        {/* <Route path="/playlist/search" exact={true}>
          <PSearch />
        </Route> */}
        <Route path="/playlists/:id">
          <Playlist />
        </Route>
        <Route path="/moods/:moodId">
          <MoodPlaylists />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
      <AudioPlayer />
      <SideBar />
    </BrowserRouter>
  );
}

export default App;
