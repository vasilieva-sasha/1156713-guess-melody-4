import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen.jsx";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen.jsx";
import {GameType} from "../../common/consts";
import GameScreen from "../game-screen/game-screen.jsx";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.js";

const QuestionArtistScreenWithPlayer = withAudioPlayer(QuestionArtistScreen);
const QuestionGenreScreenWithPlayer = withAudioPlayer(QuestionGenreScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  _renderGameScreen() {
    const {errorsCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={() => {
            this.setState({
              step: 0,
            });
          }}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType .ARTIST:
          return (
            <GameScreen type={question.type}>
              <QuestionArtistScreenWithPlayer
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <QuestionGenreScreenWithPlayer
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistScreenWithPlayer
              question={questions[1]}
              onAnswer={() => {}}/>
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenreScreenWithPlayer
              question={questions[0]}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export {App};
