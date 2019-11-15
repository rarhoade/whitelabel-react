import React from 'react';
import logo from './Logo.png';
import hero from './Drone.png';
import shadow from './Shadow.png'
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      homePage: true,
      tutorialPage: false,
      blogPage: false,
      contactPage: false
    };

    this.enableContactPage = this.enableContactPage.bind(this);
    this.enableHomePage = this.enableHomePage.bind(this)
  }

  enableContactPage() {
    this.setState({
      homePage: false,
      tutorialPage: false,
      blogPage: false,
      contactPage: true
    });
  }

  enableHomePage(){
    this.setState({
      homePage: true,
      tutorialPage: false,
      blogPage: false,
      contactPage: false
    })
  }

  contactPage(){
    return(
      <form>
        <div className="App-header">
          <h2>First Name</h2>
          <input type="first-name" placeholder = "Enter First Name"/>
          <button onClick={this.enableHomePage}>Home</button>
        </div>
      </form>
    );
  }

  homePage(){
    return(
      <div className="App">
      <div className="App-header">
        <span>
            <button className="storeButton">Store</button>
            <button >Tutorial</button>
            <img src={logo} className="App-logo" alt="logo" />  
            <button >Blog</button>
            <button onClick={this.enableContactPage}>Contact</button>
        </span>
        <img src={hero} className="App-hero" alt="hero"/>
        <img src={shadow} className="App-shadow" alt="shadow"/>
      </div>
    </div>
   );
  }
  
  render(){ 
      return (
        <div>
          {this.state.homePage ? this.homePage() : null}
          {this.state.contactPage ? this.contactPage() : null}
        </div>
      )
  }
}

export default App;
