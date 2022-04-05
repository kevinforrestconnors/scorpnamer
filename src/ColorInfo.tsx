import React from "react";
import { scropEasterEgg } from "./util";
import { SCORP_COLORS } from "./constants";
import { Colors } from "./types";
import { getScorpMetadata } from "./scorp-data";

type ColorInfoProps = {
  hexCode: string;
  scorpionFilters: { [attName: string]: Set<string> };
};

export class ColorInfo extends React.Component<ColorInfoProps> {
  // modified from https://stackoverflow.com/questions/3116260/given-a-background-color-how-to-get-a-foreground-color-that-makes-it-readable-o/49092130#49092130
  hexToRGB(): { r: number; g: number; b: number } {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      this.props.hexCode
    );
    if (result === null) {
      return {
        r: 0,
        g: 0,
        b: 0,
      };
    }
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  }

  getTextStyleLightOrDark(): string {
    const rgb = this.hexToRGB();
    const luminance = 0.2126 * rgb["r"] + 0.7152 * rgb["g"] + 0.0722 * rgb["b"];
    return luminance < 140 ? "light" : "dark";
  }

  buildScorpsOfColorGrid() {
    const filters = this.props.scorpionFilters;
    let scorpCount = 0;
    const textStyle = this.getTextStyleLightOrDark();
    let scorpsOfColor: {
      [key in keyof Colors]: string[];
    } = {
      body_color: Array.from(
        SCORP_COLORS[this.props.hexCode].scorps.body_color
      ),
      bg2_color: Array.from(SCORP_COLORS[this.props.hexCode].scorps.bg2_color),
      bg_color: Array.from(SCORP_COLORS[this.props.hexCode].scorps.bg_color),
      secondary_color: Array.from(
        SCORP_COLORS[this.props.hexCode].scorps.secondary_color
      ),
      outline_color: Array.from(
        SCORP_COLORS[this.props.hexCode].scorps.outline_color
      ),
      eye_color: Array.from(SCORP_COLORS[this.props.hexCode].scorps.eye_color),
    };

    const sections: {
      [key in keyof Colors]: React.ReactElement[];
    } = {
      body_color: [],
      bg2_color: [],
      bg_color: [],
      secondary_color: [],
      outline_color: [],
      eye_color: [],
    };

    for (const [colorLocation, scorpIds] of Object.entries(scorpsOfColor) as [
      keyof Colors,
      string[]
    ][]) {
      for (const scorpId of scorpIds) {
        let passFilter = true;
        const attributes: any = getScorpMetadata(scorpId).attributes;
        for (const traitName of Object.keys(attributes)) {
          if (!filters[traitName] || filters[traitName].size === 0) {
            continue;
          }

          if (filters[traitName].has(attributes[traitName].toString())) {
            continue;
          } else {
            passFilter = false;
            break;
          }
        }

        if (passFilter) {
          scorpCount++;
          sections[colorLocation].push(
            <a
              key={scorpId}
              href={`https://radstrike.com/scorpions/info/?number=${scorpId}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="color-info_scorps-of-color-element"
                style={{ backgroundImage: `url(/img/${scorpId}_large.png)` }}
              ></div>
            </a>
          );
        }
      }
    }

    return [
      scorpCount,
      <div>
        <div>
          <div className={`color-info_scorps-of-color-header ${textStyle}`}>
            body color
          </div>
          <div className={`color-info_scorps-of-color-container ${textStyle}`}>
            {sections.body_color}
          </div>
        </div>
        <div>
          <div className={`color-info_scorps-of-color-header ${textStyle}`}>
            main background color
          </div>
          <div className={`color-info_scorps-of-color-container ${textStyle}`}>
            {sections.bg2_color}
          </div>
        </div>
        <div>
          <div className={`color-info_scorps-of-color-header ${textStyle}`}>
            secondary background color
          </div>
          <div className={`color-info_scorps-of-color-container ${textStyle}`}>
            {sections.bg_color}
          </div>
        </div>
        <div>
          <div className={`color-info_scorps-of-color-header ${textStyle}`}>
            outline color
          </div>
          <div className={`color-info_scorps-of-color-container ${textStyle}`}>
            {sections.outline_color}
          </div>
        </div>
        <div>
          <div className={`color-info_scorps-of-color-header ${textStyle}`}>
            secondary color
          </div>
          <div className={`color-info_scorps-of-color-container ${textStyle}`}>
            {sections.secondary_color.length > 0 ? (
              sections.secondary_color
            ) : (
              <div className={textStyle}>none!</div>
            )}
          </div>
        </div>
        <div>
          <div className={`color-info_scorps-of-color-header ${textStyle}`}>
            eye color
          </div>
          <div className={`color-info_scorps-of-color-container ${textStyle}`}>
            {sections.eye_color}
          </div>
        </div>
      </div>,
    ];
  }

  render() {
    const textStyle = this.getTextStyleLightOrDark();
    const count = SCORP_COLORS[this.props.hexCode].occurrences;

    const [scorpCount, scorpsOfColor] = this.buildScorpsOfColorGrid();

    return (
      <label
        htmlFor={this.props.hexCode}
        key={this.props.hexCode}
        className="color-info"
        style={{
          backgroundColor: this.props.hexCode,
          border: `4px solid ${this.props.hexCode}`,
        }}
      >
        <div className={`color-info_textbox ${textStyle}`}>
          <div className="color-info_text">
            <div>
              {this.props.hexCode} occurs {count} times.{" "}
            </div>
            <div>
              {scorpCount} {scropEasterEgg("scorp")}s with current filters have
              this.
            </div>
          </div>
        </div>
        <input
          id={this.props.hexCode}
          className="color-info_show-hide-button"
          type="checkbox"
        ></input>
        <div className="color-info_scorp-list">{scorpsOfColor}</div>
      </label>
    );
  }
}