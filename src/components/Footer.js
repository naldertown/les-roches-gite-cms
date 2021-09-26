import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/les-roches-logo.svg'
import { FacebookProvider, Page } from 'react-facebook';
import { FooterColumn } from './styles';

const Footer = class extends React.Component {
  render() {
    return (
      <FacebookProvider appId="856933508517409">
        <footer className="footer has-background-black has-text-white-ter">
          <div className="content has-background-black has-text-white-ter">
            <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <FooterColumn className="column is-4">
                  <img
                    src={logo}
                    alt="Les Roches Gite"
                    style={{ width: '50%', maxWidth: '50%', height: 'auto' }}
                  />
                </FooterColumn>
                <FooterColumn className="column is-4">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link to="/" className="navbar-item">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <a
                          className="navbar-item"
                          href="/admin/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Admin
                        </a>
                      </li>
                    </ul>
                  </section>
                </FooterColumn>
                <FooterColumn className="column is-4">
                  <Page href="https://www.facebook.com/Lesrochesgite" tabs="timeline" style={{width: "100%", minWidth: '100%' }}/>
                </FooterColumn>
              </div>
            </div>
          </div>
        </footer>
      </FacebookProvider>
    )
  }
}

export default Footer
