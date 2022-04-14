import React from 'react';
import EditProfile from 'components/User/EditProfile/EditProfile';
import { useLocation } from 'react-router-dom';

const PagesEditProfile = () => {
  const { state } = useLocation();
  return <EditProfile user={state}/>
}

export default PagesEditProfile;