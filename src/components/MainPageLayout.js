import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({children}) => {
  return (
    <div>
      <Title  title="BOX OFFICE"  subtitle="Looking for Actors or MOVIES"/>

      <Navs/>
      {children}
    </div>
  );
}

export default MainPageLayout
