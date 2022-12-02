import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../assets/icons/star.svg';
import AddNameStep from "./AddNameStep.jsx";
import UploadAvatarStep from "./UploadAvatarStep.jsx";
import {assignUser} from "../../redux/user/userSlice.js";

export default function IntroduceStepper( ) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addUserInfo = (user) => {
        dispatch(assignUser(user));
    };
    const [userObj, setUserObj] = useState({name: ''});
    const steps = [
        {
            title: 'Adding your name',
            content: <AddNameStep setUser={setUserObj} />,
        },
        {
            title: 'Uploading Avatar',
            content: <UploadAvatarStep setUser={setUserObj} userObj={userObj} />,
        },
    ];

    const [activeStep, setActiveStep] = React.useState(0); //Index of the Active step
    const [skipped, setSkipped] = React.useState(new Set()); //Skipped set

    // Check if the step is optional by checking the index
    const isStepOptional = (index) => {
        return steps[index].optional;
    };

    // Check if the step belong to skipped set
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        // If the active step is skipped assign new set with skipped one deleted
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        // Increment the index of ActiveStep
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    // Decrement the index of ActiveStep
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        // Increment index of ActiveSteo
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // Add the ActiveStep to the skipped set
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    // Assign activeStep to 0
    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    const navigateDashboard = () => {
        addUserInfo(userObj);
        navigate('/');
    };

    return (
        <div className={"bg-gray-200 w-full h-screen flex justify-center items-center"}>
            <div className={"border border-solid border-gray-300 p-6 rounded-xl bg-white w-2/5"}>
            <Stepper activeStep={activeStep}>
                {/*Iterate over the steps*/}
                {steps.map((step, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    // Show the title of the step
                    return (
                        <Step key={step.title} {...stepProps}>
                            <StepLabel {...labelProps}>{step.title}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {/*Stepper body*/}
            {/*All steps are done?*/}
            {activeStep === steps.length ? ( // Yes, show the end message and reset button
                <React.Fragment>
                    <p className={'text-2xl font-bold leading-9 inline'}>
                        {' '}
                        Your account setup is completed.
                        <img
                            width={30}
                            height={30}
                            src={star}
                            alt="edit"
                            className="mx-3 pr-2 inline"
                        />
                    </p>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {/*Add the goalObj to redux store*/}
                        {/*Go to Dashboard*/}
                        <Button onClick={navigateDashboard}>Dashboard</Button>
                        {/*<Button onClick={handleReset}>Reset</Button>*/}
                    </Box>
                </React.Fragment> // No, show the step content
            ) : (
                <React.Fragment>
                    <Box sx={{ mt: 2, mb: 1 }}>{steps[activeStep].content}</Box>
                    {/*Navigation Buttons*/}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={"text-white p-3 rounded-3xl w-24 font-bold hover:rounded-3xl"}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}

                        <Button class={"bg-indigo-600 text-white p-3 rounded-3xl w-24 font-bold"} onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
            </div>
        </div>
    );
}
