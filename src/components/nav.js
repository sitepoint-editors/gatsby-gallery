import React from "react";

const Nav = () => (
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">Website</a>
      </div>
      <label for="menu-toggle" class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <input type="checkbox" id="menu-toggle" class="is-hidden" />
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab is-hidden-tablet">
          <span class="icon">
            <i class="fa fa-home"></i>
          </span>{" "}
          Home
        </a>
        <a class="nav-item is-tab is-hidden-tablet">
          <span class="icon">
            <i class="fa fa-table"></i>
          </span>{" "}
          Links
        </a>
        <a class="nav-item is-tab is-hidden-tablet">
          <span class="icon">
            <i class="fa fa-info"></i>
          </span>{" "}
          About
        </a>

        <a class="nav-item is-tab is-active">
          <span class="icon">
            <i class="fa fa-user"></i>
          </span>
        </a>
        <a class="nav-item is-tab">
          <span class="icon">
            <i class="fa fa-sign-out"></i>
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Nav;
