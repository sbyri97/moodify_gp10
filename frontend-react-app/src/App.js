import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginFormModal/LoginForm";
import SignUpForm from "./components/auth/SignUpFormModal/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
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
import SideBar from "./components/Home/Sidebar";
import UnauthenticatedUser from "./components/auth/TestSignUp";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state?.session?.user);

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
      </Switch>
      <AudioPlayer />
      <SideBar />
    </>
  );
}

export default App;
