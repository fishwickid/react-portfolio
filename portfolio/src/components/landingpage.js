import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div>
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
                alt="avatar"
                className="avatar-image"
              />
              <div className="banner-text">
                <h2>Full Stack Web Developer</h2>
                <hr />
                <p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</p>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Landing;
