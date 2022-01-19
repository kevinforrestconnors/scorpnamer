import React from "react";
import "./App.css";
import { generateName } from "./scrop-names";
import { ColorDistribution } from "./scorp-tools";
import Chance from "chance";
import Helmet from "react-helmet";
import { ScorpPhoto } from "./ScorpPhoto";
import { scropEasterEgg } from "./util/index";

const chance = new Chance();

function sd() {
  return chance.integer({ min: 0, max: 9 });
}

function rollScorp() {
  return `${sd()}${sd()}${sd()}${sd()}`;
}

class App extends React.Component {
  state: {
    scorpId: string;
    image: string;
    faviconImage: string;
    formScorpId: string;
    name: string;
  };

  constructor(props: any) {
    super(props);
    const scorpId = rollScorp();
    this.state = {
      scorpId,
      image: "",
      faviconImage: "",
      formScorpId: "",
      name: generateName(scorpId),
    };
    this.loadImage(scorpId);
  }

  handleSelectScorpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ formScorpId: event.target.value });
  };

  loadImage = (imageName: string) => {
    import(`../img/${imageName}_large.png`).then((image) => {
      this.setState({
        image: image.default,
      });
    });
    import(`../img/${imageName}.png`).then((image) => {
      this.setState({
        faviconImage: image.default,
      });
    });
  };

  render() {
    return (
      <div>
        <Helmet>
          <link
            rel="icon"
            type="image/png"
            href={this.state.faviconImage}
            sizes="32x32"
          />
        </Helmet>
        <div className="App">
          <div className="grid-wrapper">
            <header className="main-head">
              <h1>Abandoned {scropEasterEgg("Scorpion")}s Name Generator</h1>
            </header>
            <aside className="side"></aside>
            <article className="content">
              <h2>Welcome to {scropEasterEgg("Scorp")}Namer.</h2>
              <div className="select-scorp">
                <div>
                  <span className="select-scorp_label">
                    <label htmlFor="select-scorp-textbox">select by id:</label>
                  </span>
                  <span>
                    <input
                      name="select-scorp-textbox"
                      type="number"
                      placeholder="0000"
                      min="0000"
                      max="9999"
                      value={this.state.formScorpId}
                      onChange={this.handleSelectScorpChange}
                    ></input>
                  </span>
                  <span>
                    <button
                      className="select-scorp_button"
                      onClick={() => {
                        if (this.state.formScorpId.length === 4) {
                          this.setState({
                            scorpId: `${this.state.formScorpId}`,
                            image: this.loadImage(this.state.formScorpId),
                            name: generateName(this.state.formScorpId),
                          });
                        }
                      }}
                    >
                      select
                    </button>
                  </span>
                </div>
                <div className="random-scorp-button">
                  <button
                    onClick={() => {
                      const scorpId = rollScorp();
                      this.setState({
                        scorpId: `${scorpId}`,
                        name: generateName(scorpId),
                      });
                      this.loadImage(scorpId);
                    }}
                  >
                    select a random {scropEasterEgg("scorpion")}
                  </button>
                </div>
              </div>
              <div className="generate-name">
                <button
                  onClick={() => {
                    this.setState({
                      name: generateName(this.state.scorpId),
                    });
                  }}
                >
                  generate a name
                </button>
                <div>
                  <div className="scorp-name">
                    <b>{this.state.scorpId}</b>: <i>{this.state.name}</i>
                  </div>
                  <ScorpPhoto
                    scorpId={this.state.scorpId}
                    image={this.state.image}
                  ></ScorpPhoto>
                  <div className="scorpTrivia"></div>
                </div>
              </div>
              <div className="scorp-tools">
                <h2>{scropEasterEgg("Scorp")} Tools</h2>
                <h3>Color Distribution</h3>
                <div className="scorp-tool-1">
                  {<ColorDistribution></ColorDistribution>}
                </div>
              </div>
            </article>
            <footer className="main-footer">
              <div>
                {" "}
                <div>
                  This app is not officially related to the Abandoned
                  {scropEasterEgg("Scorpion")}s project. I am an independent
                  developer.
                </div>
                <div>
                  To get in touch, send a transaction with a message to:
                </div>
                <i>
                  rdx1qspyk7g34cazdeyzxzdldrd6506gulpwusum00mvqpytfvmwgz4c8pqe8l7e0
                </i>
              </div>
              <div>
                <a href="/changelog.txt" target="_blank" rel="noreferrer">
                  Last updated January 17, 2022
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
