import * as React from "react";
import ReactHtmlParser from "react-html-parser";

function ReadMore(props) {
  const { section } = props;
  return (
    <main>
      <section className="section-intro">
        <div className="u-center-text u-margin-bottom-medium">
          <h2 className="heading-secondairy">{section.attributes.title}</h2>
        </div>
        <div className="paragraph">
          {ReactHtmlParser(section.attributes.field_readmore_body.processed)}
        </div>
      </section>
    </main>
  );
}

export default ReadMore;
