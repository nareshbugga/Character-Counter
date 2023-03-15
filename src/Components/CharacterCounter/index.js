import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {value: '', valueList: []}

  onChangeInput = event => {
    this.setState({value: event.target.value})
  }

  onAddValue = event => {
    event.preventDefault()
    const {value} = this.state
    const newValue = {
      id: uuidv4(),
      addValue: value,
    }
    console.log(newValue)
    this.setState(prevState => ({
      valueList: [...prevState.valueList, newValue],
      value: '',
    }))
  }

  render() {
    const {valueList, value} = this.state

    return (
      <div className="main-container">
        <div className="add-container">
          <div className="add-head-container">
            <h1 className="add-heading">Count the characters like a Boss...</h1>
          </div>
          <div>
            {valueList.length === 0 ? (
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-user-inputs"
                />
              </div>
            ) : (
              <ul>
                {valueList.map(eachValue => (
                  <li key={eachValue.id}>
                    <p className="items">{`${eachValue.addValue}: ${eachValue.addValue.length}`}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <form className="count-container" onSubmit={this.onAddValue}>
          <div>
            <h1 className="count-heading">Character Counter</h1>
            <div>
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="input-field"
                value={value}
                onChange={this.onChangeInput}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default CharacterCounter
