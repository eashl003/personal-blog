import React from "react"
import Link from "next/link"
 
const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar id="top-navbar">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link id="nav-brand" href="/">
                <a>Test</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          {/*<ul className="uk-navbar-nav">
            <li>test</li>
            </ul>*/}
          <a className="uk-button uk-button-default" href="/">
            Blog
          </a>
          <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
            <ul class="uk-nav uk-dropdown-nav">
                {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link href={`/category/${category.attributes.slug}`}>
                      <a className="uk-link-reset">{category.attributes.name}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
