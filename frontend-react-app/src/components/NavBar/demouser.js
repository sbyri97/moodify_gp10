import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './navbar.css'

const DemoButton = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const handleDemo = async (e) => {
    e.preventDefault();
    const email = 'bobbie@aa.io';
    const password = 'password'
    await dispatch(sessionActions.login(email, password));

    };

    if (user) {
        return <Redirect to='/' />;
    }

        return <button id='demo-btn' onClick={handleDemo}>DEMO</button>;
    }


export default DemoButton;
