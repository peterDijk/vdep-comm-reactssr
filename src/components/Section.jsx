import * as React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

function Section(props) {
  const { section, classes } = props
  
  return (
      <section className="section-intro">
        <div className="u-center-text u-margin-bottom-medium">
          <h2 className="heading-secondairy">
            { section.attributes.title }
          </h2>
        </div>
        <div className="paragraph">
          { ReactHtmlParser(section.attributes.body.processed) }
        </div>
        { !props.seminars && 
          <Link key={section.id} to={`/more/${section.attributes.field_slug}`} className="btn-readmore">
            <Button variant="contained" >
              Lees meer
            </Button>
          </Link>
        }
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
          { props.seminars &&
            props.seminars.data.map(sem => (
              <div key={ sem.id } className="feature-box">
                {sem.attributes.title}
              </div>
          ))
          
          }
        </div>
      </section>
  )
}

const styles = {
  card: {
    maxWidth: 275,
  }
}

export default withStyles(styles)(Section)