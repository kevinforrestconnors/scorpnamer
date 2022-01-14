import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getScropInfo } from "./fetch-scorp-data";

//import colorNames from "./color-names";

//        {colorNames.name("#2F6D9B")[1]}

async function loadMyAsyncData() {
  return await getScropInfo("6222");
}

class App extends React.Component {
  state = {
    externalData: null,
  };
  sidebarContent = null;

  componentDidMount() {
    this._asyncRequest = loadMyAsyncData().then((externalData) => {
      this._asyncRequest = null;
      this.setState({ externalData });
    });
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    if (this.state.externalData === null) {
      this.sidebarContent = (
        <div>
          <div>Loading...</div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      );
    }

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
