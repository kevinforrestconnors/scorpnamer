import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="grid-wrapper">
          <header className="main-head">
            <h1>Abandoned Scorpions Name Generator</h1>
          </header>
          <aside className="side">{this.sidebarContent}</aside>
          <article className="content">
            <h2>Welcome to ScropNamer.</h2>
            <div>
              This is an unofficial project where you can randomly generate a
              name for your scorpion, derived from its traits.
            </div>
            <div>
              Of course, you are welcome to name your scorpion whatever you
              like! This is just for fun.
            </div>
          </article>
          <footer className="main-footer">
            <div>
              This app is not officially related to the Abandoned Scorpions
              project. I am an independent developer.
            </div>
            <div>To get in touch, send a transaction with a message to:</div>

            <i>
              rdx1qspyk7g34cazdeyzxzdldrd6506gulpwusum00mvqpytfvmwgz4c8pqe8l7e0
            </i>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
