import {Component} from 'react'
import './App.css'
import {v4 as uniqueid} from 'uuid'
import Passworditems from './password'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class App extends Component {
  state = {
    website: '',
    name: '',
    password: '',
    intialstate: [],
    showpassword: false,
    searchvalue: '',
  }

  checkbox = () => {
    const {showpassword} = this.state
    this.setState({showpassword: !showpassword})
  }

  searchelementvalue = event => {
    const search = event.target.value
    this.setState({searchvalue: search})
  }

  mywebsite = event => {
    const websitevalue = event.target.value
    this.setState({website: websitevalue})
  }

  myname = event => {
    const namevalue = event.target.value
    this.setState({name: namevalue})
  }

  mypassword = event => {
    const passwordvalue = event.target.value
    this.setState({password: passwordvalue})
  }

  additem = event => {
    event.preventDefault()
    const {name, password, website} = this.state
    const mylettercolor = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const newpassmanager = {
      id: uniqueid(),
      WebsiteName: website,
      Name: name,
      Password: password,

      lettercolor: initialContainerBackgroundClassNames[mylettercolor],
    }
    this.setState(prevState => ({
      intialstate: [...prevState.intialstate, newpassmanager],
      website: '',
      name: '',
      password: '',
    }))
  }

  itemsdeleted = id => {
    const {intialstate} = this.state

    this.setState({
      intialstate: intialstate.filter(eachitems => eachitems.id !== id),
    })
  }

  render() {
    const {
      intialstate,
      searchvalue,
      website,
      name,
      password,
      showpassword,
    } = this.state
    const filterlist = intialstate.filter(eachweb =>
      eachweb.WebsiteName.toLowerCase().includes(searchvalue),
    )

    const lengthofintialstate = filterlist.length
    const isgreaterthanzero = lengthofintialstate > 0
    console.log(isgreaterthanzero)
    return (
      <div className="bgcontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logopx"
        />
        <div className="blueinputboxcontainer">
          <form className="inputcontainer" onSubmit={this.additem}>
            <div>
              <h1 className="hedsty">ADD NEW PASSWORD</h1>
              <div className="iconinputcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="iconsty"
                />
                <input
                  type="text"
                  className="inputsty"
                  onChange={this.mywebsite}
                  value={website}
                  placeholder="Enter Website"
                />
              </div>
              <br />
              <div className="iconinputcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="iconsty"
                />
                <input
                  type="text"
                  className="inputsty"
                  onChange={this.myname}
                  value={name}
                  placeholder="Enter Username"
                />
              </div>
              <br />
              <div className="iconinputcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="iconsty"
                />
                <input
                  type="password"
                  className="inputsty"
                  onChange={this.mypassword}
                  value={password}
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="buttoncontainer">
              <button className="buttonstyling" type="submit">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="passwardmanagersty"
          />
        </div>
        <div className="storecontainer">
          <div className="searchandheading">
            <div className="passcount">
              <h1 className="hedsty">Your Passwords</h1>
              <p className="hedsty">{lengthofintialstate}</p>
            </div>
            <div className="iconinputcontainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="iconsty"
              />
              <input
                type="search"
                className="inputsty"
                onChange={this.searchelementvalue}
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="checkboxcontainer">
            <input
              type="checkbox"
              id="showpasscheckbox"
              onClick={this.checkbox}
            />
            <label htmlFor="showpasscheckbox">Show passwords</label>
          </div>
          {isgreaterthanzero ? (
            <ul className="ulsty">
              {filterlist.map(eachpass => (
                <Passworditems
                  mypass={eachpass}
                  showmypassword={showpassword}
                  deleteitem={this.itemsdeleted}
                  key={eachpass.id}
                />
              ))}
            </ul>
          ) : (
            <div className="nopasscontainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="nopassimgpx"
              />
              <h1>No Passwords</h1>
              
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
