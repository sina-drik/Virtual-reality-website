import React, { Component } from 'react'
import "./App.css"
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Project from './components/Project/Project';
import Team from './components/Team/Team';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import SubFooter from './components/Footer/SubFooter';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
    }
  }

  componentDidMount() {
    document.title = 'Virtual Reality';
  }
  changeDarkMode() {
    console.log("changeDarkMode")
    this.setState((previousState) => {
      return { darkMode: !previousState.darkMode };
    });
  }
  render() {
    return (
      <>
        <button onClick={() => { this.changeDarkMode() }}
          className={this.state.darkMode ? "darkmode-color dark-mode-btn" : "lightmode-color dark-mode-btn"}>
          <i className={this.state.darkMode ? "fa-regular fa-sun" : "fa-solid fa-moon"}></i>
        </button>
        <section className={this.state.darkMode ? "section-lightmode mb-3" : "section-darkmode mb-3"}>
          <Header darkModeStatus={this.state.darkMode} />
        </section>
        <section className="hero-section">
          <Hero />
        </section>
        <section className="services-section p-3 p-md-0">
          <Services darlmode={this.state.darkMode} />
        </section>
        <section className='project-section'>
          <Project />
        </section>
        <section className='team-section'>
          <Team />
        </section>
        <section className='news-section'>
          <News />
        </section>
        <section className='footer-section'>
          <Footer />
          <section className='subfooter-section'>
            <SubFooter />
          </section>
        </section>
      </>
    )
  }
}
