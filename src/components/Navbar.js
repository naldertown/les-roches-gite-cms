import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/les-roches-logo.svg'
import { Airbnb } from '@styled-icons/boxicons-logos'
import { BookNow, BookNowIcon, BookNowLabel, NavBarFixed } from './styles'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <NavBarFixed
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Les Roches Gite" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <BookNow
                className="navbar-item"
                href="https://www.airbnb.co.uk/rooms/51627963?guests=1&amp;adults=1&amp;s=66&amp;unique_share_id=a0634db6-c28c-4725-b980-376a1454f95f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookNowLabel>Book on Airbnb</BookNowLabel>
                <BookNowIcon className="icon">
                  <Airbnb />
                </BookNowIcon>
              </BookNow>
            </div>
          </div>
        </div>
      </NavBarFixed>
    )
  }
}

export default Navbar
