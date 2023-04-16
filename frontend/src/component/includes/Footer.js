import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    marginTop: "64px",
    background: "linear-gradient(45deg, #e2f1ff, #fff7f5)",
    padding: "50px 0",
  },
  container: {
    maxWidth: "1600px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  link:{
    textDecoration: 'none',
    color: 'inherit',
    margin: '5px 0'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid className={classes.container} container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h4" align={"left"}>
            Tryonlinefree
          </Typography>
          <Typography variant="subtitle1" align="left">
            Tryonlinefree.com is an Indian employment website operating in India. It was founded in June 2018. Tryonlinefree.com is the largest employment website
            in India.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" align={"center"}>
            Company
          </Typography>
          <div className={classes.links}>
            <Link className={classes.link} to="/">About Us</Link>
            <Link className={classes.link} to="/">Contact Us</Link>
            <Link className={classes.link} to="/">Cookie Policy</Link>
            <Link className={classes.link} to="/">Privacy Policy</Link>
            <Link className={classes.link} to="/">Terms & Conditions</Link>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" align={"center"}>
            Browse Jobs
          </Typography>
          <div className={classes.links}>
          <Link className={classes.link} to="/">Delivery Jobs</Link>
          <Link className={classes.link} to="/">Driver Jobs</Link>
          <Link className={classes.link} to="/">Warehouse Jobs</Link>
          <Link className={classes.link} to="/">Manufacturing Jobs</Link>
          <Link className={classes.link} to="/">Housekeeping Jobs</Link>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" align={"center"}>
            Follow US
          </Typography>
          <div className={classes.links}>
          <Link className={classes.link} to="/">Facebook</Link>
          <Link className={classes.link} to="/">Twitter</Link>
          <Link className={classes.link} to="/">Linkedin</Link>
          <Link className={classes.link} to="/">Instagram</Link>
          <Link className={classes.link}  to="/">Youtube</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
