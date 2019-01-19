import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ImageCarousel from './components/Body/ImageCarousel';
import Footer from './components/Footer/Footer';
// import HeaderButton from './components/Button/HeaderButton';

class App extends Component {

// state = {
//   user: {
//     name: '',
//     // password: '',
//     // staff: boolean,
//   }
//   cart: {
//     // Should I make all these their own or batch?
//     items: [
//       {
//
//       }
//     ],
//     price:
//     total: 0,
//     // Should this be set to 0 or null as default?
//
//   }
// }

  render() {
    return (
      <div className="App">
        <NavBar />
        <ImageCarousel />
        <Footer />
      </div>
    );
  }
}

export default App;
