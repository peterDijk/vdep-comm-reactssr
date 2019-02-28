import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import * as constants from "../constants";

class SeminarDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { seminar, image } = this.props;
    return (
      <section className="section-details">
        <div className="u-center-text u-margin-bottom-medium">
          <h2 className="heading-secondairy">{seminar.attributes.title}</h2>
        </div>
        <div className="paragraph">
          {ReactHtmlParser(seminar.attributes.body.processed)}
        </div>
        <div className="section-details__bullet">
          <div className="paragraph">
            {ReactHtmlParser(seminar.attributes.field_bulletpoints.processed)}
          </div>
          <div className="section-details__bullet--image">
            {image !== undefined && (
              <img
                src={`${constants.contentDomain}${image.attributes.uri.url}`}
              />
            )}
          </div>
        </div>
        <div className="section-details__programma">
          <div className="paragraph">
            <h2 className="heading-tertiary">Programma</h2>
            {ReactHtmlParser(seminar.attributes.field_programma.processed)}
          </div>
        </div>
      </section>
    );
  }
}
export default SeminarDetails;
