import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import * as constants from "../constants";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

class Section extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { section, classes } = this.props;
    return (
      <section className="section-intro">
        <div className="u-center-text u-margin-bottom-medium">
          <h2 className="heading-secondairy">{section.attributes.title}</h2>
        </div>
        <div className="paragraph">
          {ReactHtmlParser(section.attributes.body.processed)}
        </div>
        {!this.props.seminars && (
          <Link
            key={section.id}
            to={`/more/${section.attributes.field_slug}`}
            className="btn-readmore"
          >
            <button className="btn-primary" variant="contained">
              Lees meer
            </button>
            {/* test */}
          </Link>
        )}
        {/* <Grid container direction="row" justify="center" alignContent="center" spacing={24}>
        { props.seminars &&
        props.seminars.data.map(sem => (
          <Grid item key={sem.id}>
            <Card  className={classes.card}>
              <CardContent>
                <h2>{ sem.attributes.title }</h2>
              </CardContent>
            </Card>
          </Grid>
        ))
        
        }
        </Grid> */}
        <div className="section-intro__seminars">
          {this.props.seminars &&
            this.props.seminars.data &&
            this.props.seminars.data.map(sem => {
              const imgSrc = this.props.seminars.included.filter(incl => {
                if (
                  sem.relationships.field_image.data !== null &&
                  incl.id === sem.relationships.field_image.data.id
                ) {
                  return incl;
                }
              });
              return (
                <Link key={sem.id} to={`/seminar/${sem.id}`}>
                  <div key={sem.id} className="feature-box">
                    <h3>{sem.attributes.title}</h3>
                    <div className="feature-box__image">
                      {imgSrc.length > 0 && (
                        <img
                          src={`${constants.contentDomain}${
                            imgSrc[0].attributes.uri.url
                          }`}
                        />
                      )}
                    </div>
                    <div className="feature-box__info">
                      <h4>Lokatie: {sem.attributes.field_location}</h4>
                      <h4>Data: {sem.attributes.field_date_info_text}</h4>
                    </div>

                    {/* <div className="btn-seminar-more">
                      Details
                    </div> */}
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    );
  }
}

const styles = {
  card: {
    maxWidth: 275
  }
};

export default withStyles(styles)(Section);
