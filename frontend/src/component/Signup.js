import { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import DescriptionIcon from "@material-ui/icons/Description";
import FaceIcon from "@material-ui/icons/Face";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import FileUploadInput from "../lib/FileUploadInput";
import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";
import jobRoles from "./roles.json";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "80px 80px",
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
}));

const MultifieldInput = (props) => {
  const classes = useStyles();
  const { education, setEducation } = props;

  return (
    <>
      {education.map((obj, key) => (
        <Grid
          item
          container
          className={classes.inputBox}
          key={key}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Grid item xs={6}>
            <TextField
              label={`Institution Name #${key + 1}`}
              value={education[key].institutionName}
              onChange={(event) => {
                const newEdu = [...education];
                newEdu[key].institutionName = event.target.value;
                setEducation(newEdu);
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={`Course Name #${key + 1}`}
              value={education[key].courseName}
              onChange={(event) => {
                const newEdu = [...education];
                newEdu[key].courseName = event.target.value;
                setEducation(newEdu);
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Start Year"
              value={obj.startYear}
              variant="outlined"
              type="number"
              onChange={(event) => {
                const newEdu = [...education];
                newEdu[key].startYear = event.target.value;
                setEducation(newEdu);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="End Year"
              value={obj.endYear}
              variant="outlined"
              type="number"
              onChange={(event) => {
                const newEdu = [...education];
                newEdu[key].endYear = event.target.value;
                setEducation(newEdu);
              }}
            />
          </Grid>
        </Grid>
      ))}
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            setEducation([
              ...education,
              {
                institutionName: "",
                courseName: "",
                startYear: "",
                endYear: "",
              },
            ])
          }
          className={classes.inputBox}
        >
          Add another institution details
        </Button>
      </Grid>
    </>
  );
};

const Login = (props) => {
  const classes = useStyles();

  const setPopup = useContext(SetPopupContext);

  const [workexperience, setWorkExperience] = useState("");

  const [loggedin, setLoggedin] = useState(isAuth());

  const [phone, setPhone] = useState("");

  const [exp, setExp] = useState(false);

  const [education, setEducation] = useState([
    {
      institutionName: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [signupDetails, setSignupDetails] = useState({
    role: "applicant",
    type: "",
    email: "",
    password: "",
    name: "",
    gender: "",
    hq: "",
    workexp: workexperience,
    salary: "",
    years: "",
    months: "",
    education: [],
    skills: [],
    resume: "",
    profile: "",
    bio: "",
    contactNumber: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    password: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    name: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
  });

  const handleWorkExp = (value) => {
    setWorkExperience(value);
    console.log(value, " value");
    if (value === "experienced") {
      setExp(true);
    } else {
      setExp(false);
    }
  };

  const handleInput = (key, value) => {
    setSignupDetails({ ...signupDetails, [key]: value });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        required: true,
        untouched: false,
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const tmpErrorHandler = {};
    Object.keys(inputErrorHandler).forEach((obj) => {
      if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
        tmpErrorHandler[obj] = {
          required: true,
          untouched: false,
          error: true,
          message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
        };
      } else {
        tmpErrorHandler[obj] = inputErrorHandler[obj];
      }
    });

    console.log(education);

    let updatedDetails = {
      ...signupDetails,
      education: education
        .filter((obj) => obj.institutionName.trim() !== "")
        .map((obj) => {
          if (obj["endYear"] === "") {
            delete obj["endYear"];
          }
          return obj;
        }),
    };

    console.log("update", updatedDetails);

    setSignupDetails(updatedDetails);

    console.log("signupDetails", signupDetails);

    const verified = !Object.keys(tmpErrorHandler).some((obj) => {
      return tmpErrorHandler[obj].error;
    });

    if (verified) {
      axios
        .post(apiList.signup, updatedDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.role);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setInputErrorHandler(tmpErrorHandler);
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  const handleLoginRecruiter = () => {
    const tmpErrorHandler = {};
    Object.keys(inputErrorHandler).forEach((obj) => {
      if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
        tmpErrorHandler[obj] = {
          required: true,
          untouched: false,
          error: true,
          message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
        };
      } else {
        tmpErrorHandler[obj] = inputErrorHandler[obj];
      }
    });

    let updatedDetails = {
      ...signupDetails,
    };
    if (phone !== "") {
      updatedDetails = {
        ...signupDetails,
        contactNumber: `+${phone}`,
      };
    } else {
      updatedDetails = {
        ...signupDetails,
        contactNumber: "",
      };
    }
    setSignupDetails(updatedDetails);
    const verified = !Object.keys(tmpErrorHandler).some((obj) => {
      return tmpErrorHandler[obj].error;
    });

    if (verified) {
      axios
        .post(apiList.signup, updatedDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.role);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setInputErrorHandler(tmpErrorHandler);
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  return loggedin ? (
    <Redirect to="/" />
  ) : (
    <Paper elevation={5} className={classes.body}>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Signup
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            select
            label="Role"
            variant="outlined"
            className={classes.inputBox}
            value={signupDetails.role}
            onChange={(event) => {
              handleInput("role", event.target.value);
            }}
          >
            <MenuItem value="applicant">Applicant</MenuItem>
            <MenuItem value="recruiter">Recruiter</MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <TextField
            label="Name"
            value={signupDetails.name}
            onChange={(event) => handleInput("name", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler.name.error}
            helperText={inputErrorHandler.name.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("name", true, "Name is required");
              } else {
                handleInputError("name", false, "");
              }
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <EmailInput
            label="Email"
            value={signupDetails.email}
            onChange={(event) => handleInput("email", event.target.value)}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
            className={classes.inputBox}
            required={true}
          />
        </Grid>

        <Grid item>
          <PasswordInput
            label="Password"
            value={signupDetails.password}
            onChange={(event) => handleInput("password", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler.password.error}
            helperText={inputErrorHandler.password.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("password", true, "Password is required");
              } else {
                handleInputError("password", false, "");
              }
            }}
          />
        </Grid>
        <Grid item>
          <PhoneInput
            country={"np"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </Grid>
        {signupDetails.role === "applicant" ? (
          <>
            <Grid item>
              <TextField
                select
                label="Job Type"
                variant="outlined"
                className={classes.inputBox}
                value={signupDetails.type}
                onChange={(event) => {
                  handleInput("type", event.target.value);
                }}
              >
                {jobRoles.jobs.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                select
                label="Gender"
                variant="outlined"
                className={classes.inputBox}
                value={signupDetails.gender}
                onChange={(event) => {
                  handleInput("gender", event.target.value);
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                select
                label="Highest Qualification"
                variant="outlined"
                className={classes.inputBox}
                value={signupDetails.hq}
                onChange={(event) => {
                  handleInput("hq", event.target.value);
                }}
              >
                <MenuItem value="b10">Below 10th</MenuItem>
                <MenuItem value="10">10th Pass</MenuItem>
                <MenuItem value="12">12th Pass</MenuItem>
                <MenuItem value="g">Graduate</MenuItem>
                <MenuItem value="pg">Post Graduate</MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                select
                label="Work Experience"
                variant="outlined"
                className={classes.inputBox}
                value={workexperience}
                onChange={(event) => {
                  handleWorkExp(event.target.value);
                }}
              >
                <MenuItem value="fresher">Fresher</MenuItem>
                <MenuItem value="experienced">Experienced</MenuItem>
              </TextField>
            </Grid>
            {exp === true && (
              <>
                <Grid item>
                  <TextField
                    label="Salary"
                    value={signupDetails.salary}
                    onChange={(event) =>
                      handleInput("salary", event.target.value)
                    }
                    className={classes.inputBox}
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Years (5)"
                    value={signupDetails.years}
                    onChange={(event) =>
                      handleInput("years", event.target.value)
                    }
                    className={classes.inputBox}
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Months (10)"
                    value={signupDetails.months}
                    onChange={(event) =>
                      handleInput("months", event.target.value)
                    }
                    className={classes.inputBox}
                    variant="outlined"
                  />
                </Grid>
              </>
            )}
            <Grid item>
              <TextField
                select
                label="City"
                variant="outlined"
                className={classes.inputBox}
                value={signupDetails.city}
                onChange={(event) => {
                  handleInput("city", event.target.value);
                }}
              >
                <MenuItem value="kathmandu">Kathmandu</MenuItem>
                <MenuItem value="pokhara">Pokhara</MenuItem>
                <MenuItem value="biratnagar">Biratnagar</MenuItem>
                <MenuItem value="bharatpur">Bharatpur</MenuItem>
                <MenuItem value="birgunj">Birgunj</MenuItem>
                <MenuItem value="janakpur">Janakpur</MenuItem>
                <MenuItem value="hetauda">Hetauda</MenuItem>
                <MenuItem value="dharan">Dharan</MenuItem>
                <MenuItem value="butwal">Butwal</MenuItem>
                <MenuItem value="nepalgunj">Nepalgunj</MenuItem>
              </TextField>
            </Grid>
            <MultifieldInput
              education={education}
              setEducation={setEducation}
            />
            <Grid item>
              <ChipInput
                className={classes.inputBox}
                label="Skills"
                variant="outlined"
                helperText="Press enter to add skills"
                onChange={(chips) =>
                  setSignupDetails({ ...signupDetails, skills: chips })
                }
              />
            </Grid>
            <Grid item>
              <FileUploadInput
                className={classes.inputBox}
                label="Resume (.pdf)"
                icon={<DescriptionIcon />}
                uploadTo={apiList.uploadResume}
                handleInput={handleInput}
                identifier={"resume"}
              />
            </Grid>
            <Grid item>
              <FileUploadInput
                className={classes.inputBox}
                label="Profile Photo (.jpg/.png)"
                icon={<FaceIcon />}
                uploadTo={apiList.uploadProfileImage}
                handleInput={handleInput}
                identifier={"profile"}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item style={{ width: "100%" }}>
              <TextField
                label="Bio (upto 250 words)"
                multiline
                rows={8}
                style={{ width: "100%" }}
                variant="outlined"
                value={signupDetails.bio}
                onChange={(event) => {
                  if (
                    event.target.value.split(" ").filter(function (n) {
                      return n != "";
                    }).length <= 250
                  ) {
                    handleInput("bio", event.target.value);
                  }
                }}
              />
            </Grid>
          </>
        )}
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              signupDetails.role === "applicant"
                ? handleLogin()
                : handleLoginRecruiter();
            }}
            className={classes.submitButton}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;

// {/* <Grid item>
//           <PasswordInput
//             label="Re-enter Password"
//             value={signupDetails.tmpPassword}
//             onChange={(event) => handleInput("tmpPassword", event.target.value)}
//             className={classes.inputBox}
//             labelWidth={140}
//             helperText={inputErrorHandler.tmpPassword.message}
//             error={inputErrorHandler.tmpPassword.error}
//             onBlur={(event) => {
//               if (event.target.value !== signupDetails.password) {
//                 handleInputError(
//                   "tmpPassword",
//                   true,
//                   "Passwords are not same."
//                 );
//               }
//             }}
//           />
//         </Grid> */}
