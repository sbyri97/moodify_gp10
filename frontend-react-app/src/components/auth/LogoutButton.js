import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = async (e) => {
    await dispatch(logout());
    return history.push('/')
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
