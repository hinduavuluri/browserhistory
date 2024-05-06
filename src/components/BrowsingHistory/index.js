import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class BrowsingHistory extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = props
    this.state = {searchInput: '', searchResults: initialHistoryList}
  }

  deleteHistory = id => {
    const {searchResults} = this.state
    const updatedResults = searchResults.filter(eachItem => eachItem.id !== id)
    this.setState({searchResults: updatedResults})
  }

  renderEmptyView = () => (
    <div>
      <p>There is nothing to show</p>
    </div>
  )

  displayHistory = () => {
    const {searchResults, searchInput} = this.state
    const newResults = searchResults.filter(eachItem =>
      eachItem.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (newResults.length === 0) {
      return this.renderEmptyView()
    }
    return (
      <ul>
        {newResults.map(eachResult => (
          <HistoryItem
            key={eachResult.id}
            deleteHistory={this.deleteHistory}
            historyDetails={eachResult}
          />
        ))}
      </ul>
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    this.displayHistory()
  }

  render() {
    const {searchResults, searchInput} = this.state
    const newResults = searchResults.filter(eachItem =>
      eachItem.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="icon-container">
            <button type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search"
              />
            </button>

            <input
              type="search"
              placeholder="Search history"
              className="input"
              onClick={this.onChangeSearchInput}
            />
          </div>
        </div>
        {newResults.length === 0
          ? this.renderEmptyView()
          : this.displayHistory()}
      </div>
    )
  }
}
export default BrowsingHistory
