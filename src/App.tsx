import React from "react";
import "./App.css";
import { generateName } from "./scrop-names";
import { ColorDistribution } from "./scorp-tools";
import { FilteredScorpions } from "./FilteredScorpions";
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
    scorpionFilters: { [attName: string]: Set<string> };
    dontShowColorDistribution: boolean;
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
      scorpionFilters: {},
      dontShowColorDistribution: false,
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
                <h2>Find Your Perfect {scropEasterEgg("Scorpion")}</h2>
                <div style={{ fontWeight: "bold" }}>
                  apply filters for traits:
                </div>
                <div className="filters_container">
                  <div
                    className="filters"
                    onClick={(e) => {
                      const clicked = e.target as HTMLElement;

                      if (clicked.nodeName === "INPUT") {
                        const input = clicked as HTMLInputElement;
                        const trait = input.value;
                        const checked = input.checked;
                        const [traitType, traitValue] = trait.split("__");

                        const set =
                          this.state.scorpionFilters[traitType] || new Set();

                        checked ? set.add(traitValue) : set.delete(traitValue);

                        console.log(this.state.scorpionFilters[traitType]);

                        this.setState({
                          scorpionFilters: {
                            ...this.state.scorpionFilters,
                            [traitType]: set,
                          },
                        });
                      }
                    }}
                  >
                    <div className="filter_segment" id="outline_type">
                      <label>
                        <span className="emoji">🔲</span> <b>outline_type</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="outline_type__black"
                          name="black"
                          value="outline_type__black"
                        />
                        <label htmlFor="outline_type__black">black</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="outline_type__dark"
                          name="dark"
                          value="outline_type__dark"
                        />
                        <label htmlFor="outline_type__dark">dark</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="outline_type__light"
                          name="light"
                          value="outline_type__light"
                        />
                        <label htmlFor="outline_type__light">light</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="outline_type__white"
                          name="white"
                          value="outline_type__white"
                        />
                        <label htmlFor="outline_type__white">white</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="bg_style">
                      <label>
                        <span className="emoji">🖼</span> <b>bg_style</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="bg_style__blank"
                          name="blank"
                          value="bg_style__blank"
                        />
                        <label htmlFor="bg_style__blank">blank</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="bg_style__frame"
                          name="frame"
                          value="bg_style__frame"
                        />
                        <label htmlFor="bg_style__frame">frame</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="bg_style__star"
                          name="star"
                          value="bg_style__star"
                        />
                        <label htmlFor="bg_style__star">star</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="bg_style__circle"
                          name="circle"
                          value="bg_style__circle"
                        />
                        <label htmlFor="bg_style__circle">circle</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="bg_style__square"
                          name="square"
                          value="bg_style__square"
                        />
                        <label htmlFor="bg_style__square">square</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="claw_left">
                      <label>
                        <span className="emoji">👈</span> <b>claw_left</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_left__regular"
                          name="regular"
                          value="claw_left__regular"
                        />
                        <label htmlFor="claw_left__regular">regular</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_left__big"
                          name="big"
                          value="claw_left__big"
                        />
                        <label htmlFor="claw_left__big">big</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_left__missing"
                          name="missing"
                          value="claw_left__missing"
                        />
                        <label htmlFor="claw_left__missing">missing</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_left__ball"
                          name="ball"
                          value="claw_left__ball"
                        />
                        <label htmlFor="claw_left__ball">ball</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_left__mushroom"
                          name="mushroom"
                          value="claw_left__mushroom"
                        />
                        <label htmlFor="claw_left__mushroom">mushroom</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_left__scissors"
                          name="scissors"
                          value="claw_left__scissors"
                        />
                        <label htmlFor="claw_left__scissors">scissors</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="claw_right">
                      <label>
                        <span className="emoji">👉</span> <b>claw_right</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_right__regular"
                          name="regular"
                          value="claw_right__regular"
                        />
                        <label htmlFor="claw_right__regular">regular</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_right__big"
                          name="big"
                          value="claw_right__big"
                        />
                        <label htmlFor="claw_right__big">big</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_right__missing"
                          name="missing"
                          value="claw_right__missing"
                        />
                        <label htmlFor="claw_right__missing">missing</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_right__ball"
                          name="ball"
                          value="claw_right__ball"
                        />
                        <label htmlFor="claw_right__ball">ball</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_right__mushroom"
                          name="mushroom"
                          value="claw_right__mushroom"
                        />
                        <label htmlFor="claw_right__mushroom">mushroom</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claw_right__scissors"
                          name="scissors"
                          value="claw_right__scissors"
                        />
                        <label htmlFor="claw_right__scissors">scissors</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="claws_unique">
                      <label>
                        <span className="emoji">🙌</span> <b>claws_unique</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="claws_unique__false"
                          name="false"
                          value="claws_unique__false"
                        />
                        <label htmlFor="claws_unique__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="claws_unique__true"
                          name="true"
                          value="claws_unique__true"
                        />
                        <label htmlFor="claws_unique__true">true</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="has_cigarette">
                      <label>
                        <span className="emoji">🚬</span> <b>has_cigarette</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="has_cigarette__false"
                          name="false"
                          value="has_cigarette__false"
                        />
                        <label htmlFor="has_cigarette__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="has_cigarette__true"
                          name="true"
                          value="has_cigarette__true"
                        />
                        <label htmlFor="has_cigarette__true">true</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="legs">
                      <label>
                        <span className="emoji">🦵</span> <b>legs</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="legs__stubby"
                          name="stubby"
                          value="legs__stubby"
                        />
                        <label htmlFor="legs__stubby">stubby</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="legs__insect"
                          name="insect"
                          value="legs__insect"
                        />
                        <label htmlFor="legs__insect">insect</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="legs__skinny"
                          name="skinny"
                          value="legs__skinny"
                        />
                        <label htmlFor="legs__skinny">skinny</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="legs__normal"
                          name="normal"
                          value="legs__normal"
                        />
                        <label htmlFor="legs__normal">normal</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="tail">
                      <label>
                        <span className="emoji">💉</span> <b>tail</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="tail__normal"
                          name="normal"
                          value="tail__normal"
                        />
                        <label htmlFor="tail__normal">normal</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="tail__syringe"
                          name="syringe"
                          value="tail__syringe"
                        />
                        <label htmlFor="tail__syringe">syringe</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="tail__fat"
                          name="fat"
                          value="tail__fat"
                        />
                        <label htmlFor="tail__fat">fat</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="tail__ball"
                          name="ball"
                          value="tail__ball"
                        />
                        <label htmlFor="tail__ball">ball</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="tail__missing"
                          name="missing"
                          value="tail__missing"
                        />
                        <label htmlFor="tail__missing">missing</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="bloody_tail">
                      <label>
                        <span className="emoji">🩸</span> <b>bloody_tail</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="bloody_tail__false"
                          name="false"
                          value="bloody_tail__false"
                        />
                        <label htmlFor="bloody_tail__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="bloody_tail__true"
                          name="true"
                          value="bloody_tail__true"
                        />
                        <label htmlFor="bloody_tail__true">true</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="has_matches">
                      <label>
                        <span className="emoji">🔥</span> <b>has_matches</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="has_matches__false"
                          name="false"
                          value="has_matches__false"
                        />
                        <label htmlFor="has_matches__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="has_matches__true"
                          name="true"
                          value="has_matches__true"
                        />
                        <label htmlFor="has_matches__true">true</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="has_halo">
                      <label>
                        <span className="emoji">👼</span> <b>has_halo</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="has_halo__false"
                          name="false"
                          value="has_halo__false"
                        />
                        <label htmlFor="has_halo__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="has_halo__true"
                          name="true"
                          value="has_halo__true"
                        />
                        <label htmlFor="has_halo__true">true</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="multicolored">
                      <label>
                        <span className="emoji">🦚</span> <b>multicolored</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="multicolored__false"
                          name="false"
                          value="multicolored__false"
                        />
                        <label htmlFor="multicolored__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="multicolored__true"
                          name="true"
                          value="multicolored__true"
                        />
                        <label htmlFor="multicolored__true">true</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="colored_claws">
                      <label>
                        <span className="emoji">🟢</span> <b>colored_claws</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="colored_claws__false"
                          name="false"
                          value="colored_claws__false"
                        />
                        <label htmlFor="colored_claws__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="colored_claws__true"
                          name="true"
                          value="colored_claws__true"
                        />
                        <label htmlFor="colored_claws__true">true</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="colored_core">
                      <label>
                        <span className="emoji">🔵</span> <b>colored_core</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="colored_core__false"
                          name="false"
                          value="colored_core__false"
                        />
                        <label htmlFor="colored_core__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="colored_core__true"
                          name="true"
                          value="colored_core__true"
                        />
                        <label htmlFor="colored_core__true">true</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="colored_tail">
                      <label>
                        <span className="emoji">🟣</span> <b>colored_tail</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="colored_tail__false"
                          name="false"
                          value="colored_tail__false"
                        />
                        <label htmlFor="colored_tail__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="colored_tail__true"
                          name="true"
                          value="colored_tail__true"
                        />
                        <label htmlFor="colored_tail__true">true</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="multicolor_type">
                      <label>
                        <span className="emoji">🦓</span> <b>color_type</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="multicolor_type__none"
                          name="none"
                          value="multicolor_type__none"
                        />
                        <label htmlFor="multicolor_type__none">none</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="multicolor_type__stripes"
                          name="stripes"
                          value="multicolor_type__stripes"
                        />
                        <label htmlFor="multicolor_type__stripes">
                          stripes
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="multicolor_type__solid"
                          name="solid"
                          value="multicolor_type__solid"
                        />
                        <label htmlFor="multicolor_type__solid">solid</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="false_face">
                      <label>
                        <span className="emoji">🤡</span> <b>false_face</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="false_face__none"
                          name="none"
                          value="false_face__none"
                        />
                        <label htmlFor="false_face__none">none</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="false_face__tepid"
                          name="tepid"
                          value="false_face__tepid"
                        />
                        <label htmlFor="false_face__tepid">tepid</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="false_face__frown"
                          name="frown"
                          value="false_face__frown"
                        />
                        <label htmlFor="false_face__frown">frown</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="false_face__smile"
                          name="smile"
                          value="false_face__smile"
                        />
                        <label htmlFor="false_face__smile">smile</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="evil_eye">
                      <label>
                        <span className="emoji">👁</span> <b>evil_eye</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="evil_eye__none"
                          name="none"
                          value="evil_eye__none"
                        />
                        <label htmlFor="evil_eye__none">none</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="evil_eye__blue"
                          name="blue"
                          value="evil_eye__blue"
                        />
                        <label htmlFor="evil_eye__blue">blue</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="evil_eye__red"
                          name="red"
                          value="evil_eye__red"
                        />
                        <label htmlFor="evil_eye__red">red</label>
                      </div>
                    </div>
                    <div className="filter_segment" id="no_eyes">
                      <label>
                        <span className="emoji">🙈</span> <b>no_eyes</b>
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="no_eyes__false"
                          name="false"
                          value="no_eyes__false"
                        />
                        <label htmlFor="no_eyes__false">false</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="no_eyes__true"
                          name="true"
                          value="no_eyes__true"
                        />
                        <label htmlFor="no_eyes__true">true</label>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <button
                    className="reset-all-filters"
                    onClick={() => {
                      this.setState({
                        scorpionFilters: {},
                      });
                      const checkboxes = document.querySelectorAll(
                        ".filters input"
                      ) as NodeListOf<HTMLInputElement>;

                      checkboxes.forEach((c) => {
                        c.checked = false;
                      });
                    }}
                  >
                    reset scorpion filters
                  </button>

                  <h3>Now Filter By Color 🎨</h3>
                  <div className="color-distribution-filters">
                    <div style={{ fontWeight: "bold" }}>
                      then click the color boxes to expand and view the{" "}
                      {scropEasterEgg("scorpion")}s with your filters
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="fuck_color_filters-show_all"
                        name="false"
                        value="fuck_color_filters-show_all"
                        onClick={(e) => {
                          this.setState({
                            dontShowColorDistribution: (
                              e.target as HTMLInputElement
                            ).checked,
                          });
                        }}
                      />
                      <label htmlFor="fuck_color_filters-show_all">
                        no THANKS, show all scorpions with these filters
                      </label>
                    </div>
                    {this.state.dontShowColorDistribution
                      ? null
                      : this.ColorFilters()}
                  </div>
                  <div className="scorp-tool-1">
                    {this.state.dontShowColorDistribution ? (
                      <FilteredScorpions
                        scorpionFilters={this.state.scorpionFilters}
                      />
                    ) : (
                      <ColorDistribution
                        colorFilters={this.state.colorFilters}
                        scorpionFilters={this.state.scorpionFilters}
                      ></ColorDistribution>
                    )}
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
