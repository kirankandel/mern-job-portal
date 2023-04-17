import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    marginTop: "64px",
    background: "linear-gradient(45deg, #e2f1ff, #fff7f5)",
    padding: "50px 0",
  },
  poppinsFont:{
    fontFamily:"Poppins"
  },
  interFont: {
    fontFamily:"Inter"
  },
  container: {
    fontFamily:"Inter",
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
          <Typography className={classes.poppinsFont} variant="h4" align={"left"}>
            JobFinder.
          </Typography>
          <Typography variant="subtitle1" className={classes.interFont} align="left">
            JobFinder is a job search platform located in Nepal that helps job seekers find suitable employment opportunities across different industries and job categories.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" className= {classes.poppinsFont} align={"center"}>
            Company
          </Typography>
          <div className={[classes.links, classes.interFont].join(' ')}>
            <Link className={classes.link} to="/">About Us</Link>
            <Link className={classes.link} to="/">Contact Us</Link>
            <Link className={classes.link} to="/">Cookie Policy</Link>
            <Link className={classes.link} to="/">Privacy Policy</Link>
            <Link className={classes.link} to="/">Terms & Conditions</Link>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" className= {classes.poppinsFont} align={"center"}>
            Browse Jobs
          </Typography>
          <div className={[classes.links, classes.interFont].join(' ')}>
          <Link className={classes.link} to="/">Delivery Jobs</Link>
          <Link className={classes.link} to="/">Engineering Jobs</Link>
          <Link className={classes.link} to="/">Designing Jobs</Link>
          <Link className={classes.link} to="/">Management Jobs</Link>
          <Link className={classes.link} to="/">Human Resources Jobs</Link>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" className= {classes.poppinsFont} align={"center"}>
            Follow US
          </Typography>
          <div className={[classes.links, classes.interFont].join(' ')}>
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
