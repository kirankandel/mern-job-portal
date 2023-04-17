import {
  Grid,
  Typography,
  makeStyles,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import Employees from "../assets/employees.png";
import { useHistory } from "react-router-dom";
import Delivery from "../assets/delivery.png";
import Intro from "../assets/intro.png";
import Housekeeping from "../assets/housekeeping.png";
import Warehouse from "../assets/warehouse.png";
import Manufacturing from "../assets/manufacturing.png";
import SecurityGuard from "../assets/security-guard.png";
import Painter from "../assets/painter.png";
import Labour from "../assets/labour.png";
import Technician from "../assets/technician.png";
import Driver from "../assets/driver.png";
import Beautician from "../assets/beautician.png";
import Chef from "../assets/chef.png";
import Waiter from "../assets/waiter.png";
import below10th from "../assets/below_10th.png";
import TenthPass from "../assets/tenthpass.png";
import TwelvethPass from "../assets/twelvethpass.png";
import Diploma from "../assets/diploma.png";
import Graduate from "../assets/graduate.png";
import PostGraduate from "../assets/postgraduate.png";
import Next from "../assets/next.png";
import Typewriter from "typewriter-effect";
import workHome from "../assets/workHome.png";
import PartTime from "../assets/parttime.png";
import FullTime from "../assets/fulltime.png";
import Fresher from "../assets/fresher.png";
import WomenJobs from "../assets/woman.png";
import Contract from "../assets/contract.png";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Footer from "./includes/Footer";

const availableJobs = [
  { city: "Kathmandu", jobs: "10+" },
  { city: "Pokhara", jobs: "5+" },
  { city: "Biratnagar", jobs: "5+" },
  { city: "Bharatpur", jobs: "5+" },
  { city: "Janakpur", jobs: "5+" },
  { city: "Dharan", jobs: "5+" },
  { city: "Butwal", jobs: "5+" },
  { city: "Nepalgunj", jobs: "5+" },
];

const jobsByEducation = [
  {
    title: "Jobs for Diploma",
    image: Diploma,
    education: "Diploma",
    vacancies: "15+ Vacancies",
    alt: "Jobs for Diploma",
  },
  {
    title: "Jobs for Graduate",
    image: Graduate,
    education: "Graduate",
    vacancies: "10+ Vacancies",
    alt: "Jobs for Graduate",
  },
  {
    title: "Jobs for Fresher",
    image: Fresher,
    education: "Fresher Jobs",
    vacancies: "20+ Vacancies",
    alt: "Fresher Jobs",
  },
  {
    title: "Jobs for Experienced",
    image: Contract,
    education: "Experienced Jobs",
    vacancies: "10+ Vacancies",
    alt: "Experienced Jobs",
  },
];

const useStyles = makeStyles((theme) => ({
  respImg: {
    maxWidth: "100%",
  },
  heroString: {
    fontSize: "2.5em",
    fontFamily: "Poppins",
  },
  userImage: {
    maxWidth: "100%",
    marginBottom: "1em",
  },
  container: {
    maxWidth: "1000px",
    margin: "auto",
    display: "flex",
    fontFamily: "Inter",
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    marginTop: "64px",
    background: "linear-gradient(45deg, #e2f1ff, #fff7f5)",
    padding: "50px 0",
  },
  cities: {
    width: "100%",
    marginTop: "20px",
    padding: "20px 0",
  },
  qualifications: {
    width: "100%",
    marginTop: "20px",
    padding: "20px 0",
  },
  jobTypes: {
    fontFamily: "Inter",
    width: "100%",
    marginTop: "20px",
    padding: "20px 0",
  },
  jobroles: {
    width: "100%",
    marginTop: "20px",
    padding: "20px 0",
  },
  mt1: {
    marginTop: "1em",
  },
  mb1: {
    fontFamily: "Inter",
    marginBottom: "1em",
  },
  location: {
    cursor: "pointer",
    borderRadius: "4px",
    padding: "10px 0",
    boxShadow:
      "rgb(0 0 0 / 50%) 0px 1px 1px -1px, rgb(0 0 0 / 30%) 0px 0px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px",
  },
  education: {
    cursor: "pointer",
    borderRadius: "4px",
    padding: "10px",
    boxShadow:
      "rgb(0 0 0 / 50%) 0px 1px 1px -1px, rgb(0 0 0 / 30%) 0px 0px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  role: {
    cursor: "pointer",
    borderRadius: "4px",
    padding: "10px 0",
    boxShadow:
      "rgb(0 0 0 / 50%) 0px 1px 1px -1px, rgb(0 0 0 / 30%) 0px 0px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  types: {
    cursor: "pointer",
    borderRadius: "4px",
    padding: "10px",
    boxShadow:
      "rgb(0 0 0 / 50%) 0px 1px 1px -1px, rgb(0 0 0 / 30%) 0px 0px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  nextImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Welcome = () => {
  let history = useHistory();
  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.banner}>
        <Grid className={classes.container}>
          <Grid item xs={12} md={8}>
            <div className={classes.heroString} align={"left"}>
              <Typewriter
                options={{
                  strings: [
                    "Find jobs matching your requirements!",
                    "Best job portal for finding job across Nepal",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <img className={classes.respImg} src={Intro} alt="Intro" />
          </Grid>
        </Grid>
      </div>

      <div className={classes.cities}>
        <Typography variant="h4" align={"center"} className={classes.mb1}>
          Where do you want to work?
        </Typography>
        <Grid className={classes.container} container spacing={1}>
          {availableJobs.map((city) => (
            <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
              <div className={classes.location} title={`Jobs in ${city.city}`}>
                <Typography variant="h6" align={"center"}>
                  {city.city}
                </Typography>
                <Typography variant="subtitle1" align={"center"}>
                  {city.jobs} Vacancies
                </Typography>
              </div>
            </Grid>
          ))}
          <Grid className={classes.container} container spacing={1}>
            {jobsByEducation.map((edu) => (
              <Grid
                key={edu.title}
                item
                xs={12}
                md={3}
                onClick={() => handleClick("/home")}
              >
                <div className={classes.education} title={edu.title}>
                  <img
                    className={classes.userImage}
                    src={edu.image}
                    alt={edu.title}
                  />
                  <Typography variant="h6" align={"center"}>
                    {edu.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align={"center"}
                    className={classes.nextImg}
                  >
                    {edu.vacancies}<img src={Next} alt="Next" />
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>

      <div className={classes.jobTypes}>
        <Typography variant="h4" align={"center"} className={classes.mb1}>
          Popular Questions?
        </Typography>
        <Grid className={classes.container} container>
          <Grid item md={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Are there any charges for applying on jobs?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No there are no charges applicable for applying a job. We do
                  not support any recruiter who asks for money from Job seekers.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item md={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How can we contact the recruiters?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can directly call the recruiters by clicking on the ‘Call’
                  button in the Job Description which is active between 10 a.m.
                  to 7 p.m. post which you can apply on the job and the
                  recruiter can call you if they find your application relevant.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item md={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What can I do if the recruiters don’t pick my calls?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Recruiters usually take actions based on the candidate
                  profile. We always recommend to apply on multiple jobs
                  regularly to increase the chances of getting shortlisted.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item md={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How can I contact you?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can send us an email on{" "}
                  <a href="mailto:contact@jobfinder.com">
                    contact@jobfinder.com
                  </a>{" "}
                  and we will answer your query.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item md={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What type of jobs do you have?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  1. Part-Time Jobs <br />
                  2. Full Time Jobs <br />
                  3. Contract Jobs <br />
                  4. Work From Home Jobs <br />
                  5. Fresher Jobs <br />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
