import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const deleteHistory = () => {
    deleteItem(id)
  }
  return (
    <li className="list-container">
      <div className="item-container">
        <p className="time">{timeAccessed}</p>
        <div className="icon-container">
          <img src={logoUrl} className="icon" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="logo-url">{domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          className="delete-icon"
          type="button"
          onClick={deleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
