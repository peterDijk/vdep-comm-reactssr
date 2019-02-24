import * as React from "react";
import ReactHtmlParser from "react-html-parser";

export const Footer = props => {
  console.log(props);
  return (
    <div className="footer">
      <div className="paragraph">
        {/* {ReactHtmlParser(props.footer.attributes.body.value)} */}
      </div>
    </div>
  );
};
