import React from "react";
import Hardware from "./Hardware";

function navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href>
        <div>
          <i
            class="bi bi-pc-display-horizontal navbar-item big-heading"
            width="30"
            height="30"
          >
            <h1 class="navbar-icon big-heading">trackMyPc</h1>
          </i>
        </div>
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <Hardware />
          <li class="nav-item">
            <a class="nav-link" href>
              Contact Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href>
              Wishlist
            </a>
          </li>
          <li class="nav-item my-lg-0">
            <a class="nav-link " href>
              <i class="bi bi-cart-fill">0</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
