import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <section className="navbar">
          {/*  === Name of news channel == */}
          <h2>
            {/*news icon*/}
            <i class="fa fa-newspaper-o icon" aria-hidden="true"></i>
            <font className="titlenews">News</font>
            <font className="titletwelve">24</font>
            <font className="titlepaper">PAPER</font>
          </h2>

          {/*  === lists == */}
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* == LIKES  == */}
          <a href="#">
            <div className="subcribe" type="button">
              Subcribe
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </div>
          </a>

          <></>
          {/* == SEARCH  == */}
        </section>
      </div>
      <secion className="line"></secion>

      <section className="navtools">
        <div className="react">
          {/* to get feedback from client */}
          <a href="love">
            <i class="fa fa-heart love" aria-hidden="true"></i>
          </a>
          <a href="live">
            <i class="fa fa-thumbs-up like" aria-hidden="true"></i>
          </a>
        </div>
        <h2>News12Paper Is always at the forefront of Information</h2>
        <h4>
          If you are looking for a news channel that provides the latest updates
        </h4>

        {/* search */}
        <div class="search-container">
          <input type="text" id="search-input" placeholder="Search..." />
          <button id="search-button">Search</button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
