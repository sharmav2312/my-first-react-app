import React from 'react';
import Restaurant from './component/Restaurant';

// can return only one element
   //<> short cut for React.Fragment
   // all tags must be closed
   // use camel case for attributes
   // use props in {}
   // <myName /> -- calling Nested component

const App = () => {
 return(
   <>
    <Restaurant />
   </>
 );
}

// Nested component
// const MyName = () => {
//   return <h1>Vishwas Sharma</h1>;
// };

// fat arrorw function

// const App = () => {
//   return React.createElement("h1", {}, "Hello World");
// }

export default App
