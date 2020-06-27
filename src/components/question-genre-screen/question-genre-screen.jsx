import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameType} from "../../common/consts";

class QuestionGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
    };
  }

  render() {
    const {onAnswer, question, renderPlayer} = this.props;
    const {answers: userAnswers} = this.state;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.answers);
          }}>
          {answers.map((answer, index) => {
            return (<div key={`${index}-${answer.src}`} className="track">
              {renderPlayer(answer.src, index)}
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox"
                  name="answer" value="answer-1" id={`answer-${index}`}
                  checked={userAnswers[index]}
                  onChange={(evt) => {
                    const value = evt.target.checked;
                    this.setState({
                      answers: [...userAnswers.slice(0, index), value, ...userAnswers.slice(index + 1)],
                    });
                  }}/>
                <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
              </div>
            </div>);
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

QuestionGenreScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export default QuestionGenreScreen;
