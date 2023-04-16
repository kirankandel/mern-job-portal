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
import workHome from "../assets/workHome.png";
import PartTime from "../assets/parttime.png";
import FullTime from "../assets/fulltime.png";
import Fresher from "../assets/fresher.png";
import WomenJobs from "../assets/woman.png";
import Contract from "../assets/contract.png";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Footer from "./includes/Footer";
const useStyles = makeStyles((theme) => ({
  respImg: {
    maxWidth: "100%",
  },
  userImage: {
    maxWidth: "100%",
    marginBottom: "1em",
  },
  container: {
    maxWidth: "1000px",
    margin: "auto",
    display: "flex",
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
            <Typography variant="h2" align={"left"}>
              Find jobs with better salary!
            </Typography>
            <Typography variant="subtitle1" align={"left"}>
              Call HR directly to fix interview for FREE
            </Typography>
            <Button
              onClick={() => handleClick("/home")}
              className={classes.mt1}
              variant="contained"
              color="primary"
            >
              Get a Job Now
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <img className={classes.respImg} src={Employees} alt="Employees" />
          </Grid>
        </Grid>
      </div>

      <div className={classes.cities}>
        <Typography variant="h4" align={"center"} className={classes.mb1}>
          Where do you want to work?
        </Typography>
        <Grid className={classes.container} container spacing={1}>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Bangalore">
              <Typography variant="h6" align={"center"}>
                Bangalore
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                30,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Mumbai">
              <Typography variant="h6" align={"center"}>
                Mumbai
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                20,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Delhi">
              <Typography variant="h6" align={"center"}>
                Delhi
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                40,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Hyderabad">
              <Typography variant="h6" align={"center"}>
                Hyderabad
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                35,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Noida">
              <Typography variant="h6" align={"center"}>
                Noida
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                30,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Pune">
              <Typography variant="h6" align={"center"}>
                Pune
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                20,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Faridabad">
              <Typography variant="h6" align={"center"}>
                Faridabad
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                40,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Ghaziabad">
              <Typography variant="h6" align={"center"}>
                Ghaziabad
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                35,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Indore">
              <Typography variant="h6" align={"center"}>
                Indore
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                30,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Gurgaon">
              <Typography variant="h6" align={"center"}>
                Gurgaon
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                20,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Chennai">
              <Typography variant="h6" align={"center"}>
                Chennai
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                26,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Jaipur">
              <Typography variant="h6" align={"center"}>
                Jaipur
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                40,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Chandigarh">
              <Typography variant="h6" align={"center"}>
                Chandigarh
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                35,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Kolkata">
              <Typography variant="h6" align={"center"}>
                Kolkata
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                35,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Mohali">
              <Typography variant="h6" align={"center"}>
                Mohali
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                24,000+ Vacancies
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.location} title="Jobs in Lucknow">
              <Typography variant="h6" align={"center"}>
                Lucknow
              </Typography>
              <Typography variant="subtitle1" align={"center"}>
                24,000+ Vacancies
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.jobroles}>
        <Typography variant="h4" align={"center"} className={classes.mb1}>
          What kind of a job do you want?
        </Typography>
        <Grid className={classes.container} container spacing={1}>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Delivery Jobs">
              <img
                className={classes.userImage}
                src={Delivery}
                alt="Delivery Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Delivery
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 15,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Housekeeping Jobs">
              <img
                className={classes.userImage}
                src={Housekeeping}
                alt="Housekeeping Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Housekeeping
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 10,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Warehouse Jobs">
              <img
                className={classes.userImage}
                src={Warehouse}
                alt="Warehouse Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Warehouse
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 12,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Manufacturing Jobs">
              <img
                className={classes.userImage}
                src={Manufacturing}
                alt="Manufacturing Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Manufacturing
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 30,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Security Guard Jobs">
              <img
                className={classes.userImage}
                src={SecurityGuard}
                alt="Security Guard Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Security Guard
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 15,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Painter Jobs">
              <img
                className={classes.userImage}
                src={Painter}
                alt="Painter Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Painter
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 10,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Labour Jobs">
              <img
                className={classes.userImage}
                src={Labour}
                alt="Labour Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Labour
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 12,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Technician Jobs">
              <img
                className={classes.userImage}
                src={Technician}
                alt="Technician Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Technician
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 30,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Driver Jobs">
              <img
                className={classes.userImage}
                src={Driver}
                alt="Driver Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Driver
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 15,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Beautician Jobs">
              <img
                className={classes.userImage}
                src={Beautician}
                alt="Beautician Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Beautician
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 10,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Chef/Cook Jobs">
              <img className={classes.userImage} src={Chef} alt="Chef Jobs" />
              <Typography variant="h6" align={"center"}>
                Chef
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 12,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3} onClick={() => handleClick("/home")}>
            <div className={classes.role} title="Waiter Jobs">
              <img
                className={classes.userImage}
                src={Waiter}
                alt="Waiter Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Waiter
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                View 30,000+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Button
            className={classes.mt1}
            onClick={() => handleClick("/home")}
            variant="outlined"
          >
            Show All Roles
          </Button>
        </Grid>
      </div>

      <div className={classes.qualifications}>
        <Typography variant="h4" align={"center"} className={classes.mb1}>
          What is your Qualification?
        </Typography>
        <Grid className={classes.container} container spacing={1}>
          <Grid item xs={12} md={2} onClick={() => handleClick("/home")}>
            <div className={classes.education} title="Below 10th Jobs">
              <img
                className={classes.userImage}
                src={below10th}
                alt="Below 10th Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Below 10th
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                10k+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2} onClick={() => handleClick("/home")}>
            <div className={classes.education} title="Jobs for 10th Pass">
              <img
                className={classes.userImage}
                src={TenthPass}
                alt="Jobs for 10th Pass"
              />
              <Typography variant="h6" align={"center"}>
                10th Pass
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                35k+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2} onClick={() => handleClick("/home")}>
            <div className={classes.education} title="Jobs for 12th Pass">
              <img
                className={classes.userImage}
                src={TwelvethPass}
                alt="Jobs for 12th Pass"
              />
              <Typography variant="h6" align={"center"}>
                12th Pass
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                40k+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2} onClick={() => handleClick("/home")}>
            <div className={classes.education} title="Jobs for Diploma">
              <img
                className={classes.userImage}
                src={Diploma}
                alt="Jobs for Diploma"
              />
              <Typography variant="h6" align={"center"}>
                Diploma
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                15k+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2} onClick={() => handleClick("/home")}>
            <div className={classes.education} title="Jobs for Graduate">
              <img
                className={classes.userImage}
                src={Graduate}
                alt="Jobs for Graduate"
              />
              <Typography variant="h6" align={"center"}>
                Graduate
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                30k+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2} onClick={() => handleClick("/home")}>
            <div className={classes.education} title="Jobs for Post Graduate">
              <img
                className={classes.userImage}
                src={PostGraduate}
                alt="Jobs for Post Graduate"
              />
              <Typography variant="h6" align={"center"}>
                Post Graduate
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                20k+ Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.jobTypes}>
        <Typography variant="h4" align={"center"} className={classes.mb1}>
          What type of job do you want?
        </Typography>
        <Grid className={classes.container} container spacing={1}>
          <Grid item xs={12} md={4} onClick={() => handleClick("/home")}>
            <div className={classes.types} title="Work from home Jobs">
              <img
                className={classes.userImage}
                src={workHome}
                alt="Work from home Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Work From Home
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                30,000 Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} onClick={() => handleClick("/home")}>
            <div className={classes.types} title="Part Time Jobs">
              <img
                className={classes.userImage}
                src={PartTime}
                alt="Part Time Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Part Time Jobs
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                50,000 Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} onClick={() => handleClick("/home")}>
            <div className={classes.types} title="Full Time Jobs">
              <img
                className={classes.userImage}
                src={FullTime}
                alt="Full Time Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Full Time Jobs
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                40,000 Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} onClick={() => handleClick("/home")}>
            <div className={classes.types} title="Contract Jobs">
              <img
                className={classes.userImage}
                src={Contract}
                alt="Contract Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Contract Jobs
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                20,000 Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} onClick={() => handleClick("/home")}>
            <div className={classes.types} title="Fresher Jobs">
              <img
                className={classes.userImage}
                src={Fresher}
                alt="Fresher Jobs"
              />
              <Typography variant="h6" align={"center"}>
                Fresher Jobs
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                60,000 Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} onClick={() => handleClick("/home")}>
            <div className={classes.types} title="Jobs For Women">
              <img
                className={classes.userImage}
                src={WomenJobs}
                alt="Jobs For Women"
              />
              <Typography variant="h6" align={"center"}>
                Jobs For Women
              </Typography>
              <Typography
                variant="subtitle1"
                align={"center"}
                className={classes.nextImg}
              >
                45,000 Vacancies <img src={Next} alt="Next" />
              </Typography>
            </div>
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
                  Kindly share the details and proof of chat or call recording
                  with the recruiter who asks for money on
                  contact@tryonlinefree.com.
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
                <Typography>
                How can I contact you?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                You can send us an email on <a href="mailto:contact@tryonlinefree.com">contact@tryonlinefree.com</a> and we will answer your query.
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
                What type of jobs do you have?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                1. Part-Time Jobs <br/>
                2. Full Time Jobs <br/>
                2. Contract Jobs <br/>
                2. Work From Home Jobs <br/>
                2. Fresher Jobs <br/>
                2. Jobs for Women 
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
      <Footer/>
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
