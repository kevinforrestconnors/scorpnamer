import React from "react";
import "./App.css";
import { generateName } from "./scrop-names";
import { ColorDistribution } from "./scorp-tools";
import Chance from "chance";
import Helmet from "react-helmet";
import { ScorpPhoto } from "./ScorpPhoto";
import { scropEasterEgg } from "./util/index";
import { MANUAL_TAGGED_COLORS } from "./constants";

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
    colorFilters: { [color: string]: boolean };
  };

  constructor(props: any) {
    super(props);
    const scorpId = rollScorp();
    this.state = {
      scorpId,
      image: `/img/${scorpId}_large.png`,
      faviconImage: "",
      formScorpId: "",
      name: generateName(scorpId),
      colorFilters: [...MANUAL_TAGGED_COLORS, "all"].reduce(
        (obj: { [color: string]: boolean }, color: string) => {
          if (color === "red") {
            obj[color] = true; //  default red
            return obj;
          }

          obj[color] = false;
          return obj;
        },
        {}
      ),
    };
  }

  componentDidMount() {
    this.loadNewScorp(this.state.scorpId);
  }

  handleSelectScorpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.toString().length === 4) {
      setTimeout(() => {
        this.setState({
          formScorpId: event.target.value,
        });
      }, 0);
    }
  };

  loadNewScorp = (scorpId: string) => {
    this.setState({
      scorpId,
      formScorpId: scorpId,
      image: `/img/${scorpId}_large.png`,
      faviconImage: `/img/${scorpId}.png`,
    });
  };

  ColorFilters = () => {
    let filterList: React.ReactFragment[] = [];
    [...MANUAL_TAGGED_COLORS, "all"].forEach((color: string) => {
      filterList.push(
        <span style={{ marginRight: "15px" }}>
          <label htmlFor={`color-filter-${color}`}>{color}</label>
          <input
            id={`color-filter-${color}`}
            type="checkbox"
            checked={this.state.colorFilters[color]}
            onClick={() => {
              if (color === "all" && this.state.colorFilters["all"] === false) {
                const restoreDefaults = [...MANUAL_TAGGED_COLORS].reduce(
                  (obj: { [color: string]: boolean }, color: string) => {
                    obj[color] = false;
                    return obj;
                  },
                  {}
                );

                this.setState({
                  colorFilters: {
                    all: true,
                    ...restoreDefaults,
                  },
                });
              } else {
                this.setState({
                  colorFilters: {
                    ...this.state.colorFilters,
                    [color]: !this.state.colorFilters[color],
                  },
                });
              }
            }}
          ></input>
        </span>
      );
    });
    return filterList;
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
                      type="text"
                      placeholder="0000"
                      maxLength={4}
                      onChange={this.handleSelectScorpChange}
                    ></input>
                  </span>
                  <span>
                    <button
                      className="select-scorp_button"
                      onClick={() => {
                        if (this.state.formScorpId.length === 4) {
                          this.loadNewScorp(this.state.formScorpId);
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
                        scorpId,
                        name: generateName(scorpId),
                      });
                      this.loadNewScorp(scorpId);
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
                <div className="color-distribution-tool">
                  <button
                    className="scroll-to-top"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    scroll to top
                  </button>
                  <button
                    className="expand-all"
                    onClick={() => {
                      const checkboxes = document.getElementsByClassName(
                        "color-info_show-hide-button"
                      ) as HTMLCollectionOf<HTMLInputElement>;
                      for (let i = 0; i < checkboxes.length; i++) {
                        checkboxes[i].checked = true; // eslint-ignore-line
                      }
                    }}
                  >
                    expand all
                  </button>
                  <button
                    className="collapse-all"
                    onClick={() => {
                      const checkboxes = document.getElementsByClassName(
                        "color-info_show-hide-button"
                      ) as HTMLCollectionOf<HTMLInputElement>;
                      for (let i = 0; i < checkboxes.length; i++) {
                        checkboxes[i].checked = false; // eslint-ignore-line
                      }
                    }}
                  >
                    collapse all
                  </button>

                  <h3>Color Distribution</h3>
                  <div className="color-distribution-filters">
                    <div style={{ fontWeight: "bold" }}>Filter by color:</div>
                    {this.ColorFilters()}
                  </div>
                  <div className="scorp-tool-1">
                    {
                      <ColorDistribution
                        colorFilters={this.state.colorFilters}
                      ></ColorDistribution>
                    }
                  </div>
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
                  Last updated February 28, 2022
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
