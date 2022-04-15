import React from 'react';
import Profile from 'components/User/Profile/Profile';
import { useLocation } from 'react-router-dom';

const PagesProfile = () => {
  const { state } = useLocation();
  return <Profile user={state}/>
}

export default PagesProfile;