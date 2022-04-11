import React from 'react';
import Profile from 'components/User/Profile/Profile';
import { useLocation } from 'react-router-dom';

const PagesProfile = () => {
  const { state } = useLocation();
  console.log(state)

  return <Profile/>
}

export default PagesProfile;