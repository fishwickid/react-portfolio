import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
        {/* Project 1 Card */}
        <Card shadow={2} style={{ minWidth: "450", margin: "10px" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "200px",
              background: "url(https://fishwickid.github.io/homework_week2/Images/Wine-2-Dine.png) center / cover",
            }}
          >
            
          </CardTitle>
          <CardText>
            <h3>Wine 2 Dine</h3> 
            <p>Discover the perfect wine and the best BYO restaurant near you</p>
          </CardText>
          <CardActions border>
            <Button coloured href="https://fishwickid.github.io/team_project_01/" target="_blank">SEE PROJECT</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        

        {/* Project 2 Card */}
        <Card shadow={2} style={{ minWidth: "450", margin: "10px" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "200px",
              background: "url(https://fishwickid.github.io/homework_week2/Images/Day-Planner.png) center / cover",
            }}
          >
            
          </CardTitle>
          <CardText>
            <h3>Workout Planner</h3> 
            <p>Plan your day and your workouts with this handy scheduler</p>
          </CardText>
          <CardActions border>
            <Button coloured href="https://fishwickid.github.io/Work-Day-Schedule/" target="_blank">SEE PROJECT</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 Card */}
        <Card shadow={2} style={{ minWidth: "450", margin: "10px" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "200px",
              background: "url(https://fishwickid.github.io/homework_week2/Images/Javascript-Quiz.jpg) center / cover",
            }}
          >
            
          </CardTitle>
          <CardText>
            <h3>Javascript Quiz</h3> 
            <p>Test your understanding of Javascript with this simple quiz app</p>
          </CardText>
          <CardActions border>
            <Button coloured href="https://fishwickid.github.io/Javascript-Quiz/quizIndex.html" target="_blank">SEE PROJECT</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      


</div>


        
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h2>This is Backend</h2>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h2>This is React</h2>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabID) => this.setState({ activeTab: tabID })}
          ripple
        >
          <Tab>Javascript</Tab>
          <Tab>Backend</Tab>
          <Tab>React</Tab>
        </Tabs>

       
          <Grid>
            <Cell col={12} style={{textAlign: "center"}}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        
      </div>
    );
  }
}

export default Projects;
