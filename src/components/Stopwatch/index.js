// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    stopwatchRunning: false,
    timeElapsedInSeconds: 0,
  }

  startHandler = () => {
    this.tick()
  }

  stopHandler = () => {
    clearInterval(this.timerId)
  }

  resetHandler = () => {
    clearInterval(this.timerId)
    this.setState({stopwatchRunning: true, timeElapsedInSeconds: 0})
  }

  tick() {
    this.timerId = setInterval(() => {
      this.setState(prevState => {
        const newElapsedTime = prevState.timeElapsedInSeconds + 1
        return {stopwatchRunning: true, timeElapsedInSeconds: newElapsedTime}
      })
    }, 1000)
  }

  renderTimer() {
    const {timeElapsedInSeconds} = this.state
    const elapsedMins = Math.floor(timeElapsedInSeconds / 60)
    const elapsedSecs = Math.floor(timeElapsedInSeconds % 60)
    console.log(elapsedMins, elapsedSecs)
    const stringifiedMins = elapsedMins < 10 ? `0${elapsedMins}` : elapsedMins
    const stringifiedSecs = elapsedSecs < 10 ? `0${elapsedSecs}` : elapsedSecs

    return `${stringifiedMins}:${stringifiedSecs}`
  }

  render() {
    // eslint-disable-next-line
    const {stopwatchRunning, timeElapsedInSeconds} = this.state
    return (
      <div className="page">
        <div className="content-container">
          <h1>Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="d-flex">
              <img
                className="timer-img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
              />
              <p className="bold">Timer</p>
            </div>
            <h1>{this.renderTimer()}</h1>
            <div className="btn-container">
              <button
                type="button"
                className="btn start"
                onClick={this.startHandler}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stop"
                onClick={this.stopHandler}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset"
                onClick={this.resetHandler}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
