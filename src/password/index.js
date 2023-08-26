import './index.css'

const Passworditems = props => {
  const {mypass, showmypassword, deleteitem} = props
  const {id, WebsiteName, Password, Name, lettercolor} = mypass
  const deleteclick = () => {
    deleteitem(id)
  }

  return (
    <li className="passitemsContainer">
      <div className="lettetnamecontainer">
        <div className={`headingcontainer ${lettercolor}`}>
          <h1 className="headinglettersty">{Name[0].toUpperCase()}</h1>
        </div>
        <div>
          <p>{WebsiteName}</p>
          <p>{Name}</p>
          <p>
            {showmypassword ? (
              Password
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="startsty"
              />
            )}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="deletebutton"
        onClick={deleteclick}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteimg"
        />
      </button>
    </li>
  )
}

export default Passworditems
