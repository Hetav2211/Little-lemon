import React from 'react';
import Header from './Header';
import Nav from './nav';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};
export default function App() {
  const [number, setNumber] = React.useState(1);
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }
  return (
    <>
      <h1 data-test-id="currentNumber"> {number} </h1> 
      <button data-testid="add-one" onClick={increment}>
        Add one
      </button>
    </>
  );
}
