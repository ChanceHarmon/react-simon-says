import React from 'react';
import './App.css'
import Header from './baseComponents/Header';
import Main from './baseComponents/Main';
import Footer from './baseComponents/Footer';


class App extends React.Component {
  render() {
    return (
      <div id='app-wrapper'>
        <Header />
        <Main />
        <Footer />

      </div>
    );

  }
}

export default App;
