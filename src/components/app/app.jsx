import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import {QuestionArtistScreen} from "../question-artist-screen/question-artist-screen";
import QustionGenreScreen from "../question-genre-screen/question-genre-screen";
import questions from "../../common/mocks/questions";

const welcomeButtonHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {errorsCount} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen
              errorsCount={errorsCount}
              onWelcomeButtonClick={welcomeButtonHandler}
            />
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistScreen
              question={questions[1]}
              onAnswer={() => {}}/>
          </Route>
          <Route exact path="/dev-genre">
            <QustionGenreScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
// const App = (props) => {
//
//   // return <WelcomeScreen
//   //   errorsCount={errorsCount}
//   //   onWelcomeButtonClick={welcomeButtonHandler}
//   // />;
// };

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export {App};
