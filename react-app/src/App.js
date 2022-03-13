import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Home from "./components/Home/home";
import { authenticate } from "./store/session";
import Playlist from "./components/Playlist/Playlist";
import Artists from "./components/Artists/artists";
import Albums from "./components/Albums/albums";
import MainSearch from "./components/Search/search";
import MoodPlaylists from "./components/MoodPlaylists/MoodPlaylists";
import UserProfile from "./components/UserProfile/UserProfile";
import SideBar from "./components/Home/Sidebar";
import UnauthenticatedUser from "./components/auth/TestSignUp";
import AboutLinks from "./components/AboutLinks/AboutLinks";
import UnAuthAudioPlayer from "./components/AudioPlayer/unAuthAudioPlayer";
import Error from "./components/ErrorPage/ErrorPage";
import UserFollowing from "./components/UserProfile/UserFollowing";
import UserFollowers from "./components/UserProfile/UserFollowers";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate()).then(() => setLoaded(true));
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/unauthenticatedUser" exact={true}>
          <UnauthenticatedUser />
        </Route>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <UserProfile />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/following" exact={true}>
          <UserFollowing />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/followers" exact={true}>
          <UserFollowers />
        </ProtectedRoute>
        <ProtectedRoute path="/artists/:artistName">
          <Artists />
        </ProtectedRoute>
        <ProtectedRoute path="/albums/:albumName">
          <Albums />
        </ProtectedRoute>
        <ProtectedRoute path="/search" exact={true}>
          <MainSearch />
        </ProtectedRoute>
        <ProtectedRoute path="/playlists/:id">
          <Playlist />
        </ProtectedRoute>
        <ProtectedRoute path="/moods/:moodId">
          <MoodPlaylists />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about" exact={true}>
          <AboutLinks />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <UnAuthAudioPlayer />
      <SideBar />
    </>
  );
}

export default App;
