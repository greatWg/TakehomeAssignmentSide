/**
 * Remove this content and start here
 */
 import React from 'react';
import { HomeProperties } from 'components/HomePropertyList';
import { Heading } from 'components/Heading';
function App() {
  return (
    <div
      style={{
        maxWidth: '70%',
        padding: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        
      }}>
      <Heading/>
      <HomeProperties/>
    </div>      
  );
}

export default App;
