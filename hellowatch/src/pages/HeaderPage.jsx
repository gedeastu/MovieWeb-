import './HeaderPage.css';
import HeaderPage from '../components/index/header';
import React, { useEffect } from 'react';
function Header () {
  useEffect(() => {
    window.addEventListener('beforeunload', refreshPage);
    return () => {
      window.removeEventListener('beforeunload', refreshPage);
    };
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
    <HeaderPage/>
    </>
  );
}

export default Header;