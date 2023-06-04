import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string.length > n ? string.substr(0, n - 1) + " . . ." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundImage: `url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `This is test movie name This is test movie name This is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie nameThis is test movie name`,
            100
          )}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
