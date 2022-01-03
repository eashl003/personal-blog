import React from "react"
import Link from "next/link"
// test
const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
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
          <button class="uk-button uk-button-default" type="button">Hover</button>
          <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
              <ul class="uk-nav uk-dropdown-nav">
                  <li class="uk-active"><a href="#">Active</a></li>
                  <li><a href="#">Item</a></li>
                  <li class="uk-nav-header">Header</li>
                  <li><a href="#">Item</a></li>
                  <li><a href="#">Item</a></li>
                  <li class="uk-nav-divider"></li>
                  <li><a href="#">Item</a></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
