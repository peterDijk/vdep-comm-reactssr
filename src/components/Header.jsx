import * as React from "react";
import * as constants from "../constants";
import { Link } from "react-router-dom";

function Header(props) {
  const { headerNode, imageNode } = props;
  return (
    <Link to="/">
      <header
        className="header"
        style={{
          "--bg-img-url": `url(${constants.contentDomain}${
            imageNode.attributes.uri.url
          })`
        }}
      >
        <div className="header__logo-box">
          <img
            src="/images/vdep-logo.png"
            alt="Van Dijk E-Projects"
            className="header__logo"
          />
        </div>
        <div className="header__text-box">
          <h1>
            <span className="heading-primary heading-primary--main">
              {headerNode.attributes.title}
            </span>
            {/* <span className="heading-primary heading-primary--sub">
            { headerNode.attributes.field_subtitle }
          </span> */}
          </h1>
        </div>
      </header>
    </Link>
  );
}

export default Header;
