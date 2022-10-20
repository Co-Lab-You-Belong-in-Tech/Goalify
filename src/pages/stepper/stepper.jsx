import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateNewGoalStep from "./CreateNewGoalStep.jsx";
import DevelopMilestonesStep from "./DevelopMilestonesStep.jsx";
import SetDateStep from "./SetDateStep.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addGoal} from "../../redux/goal/goalSlice.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import star from "../../assets/icons/star.svg";


export default function HorizontalLinearStepper() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goals = useSelector((state) => state.goals);

    const createGoal = (goal) => {
        dispatch(addGoal(goal))
    }

    const [goalObj, setGoalObj] = useState({id:goals.length,milestones: [], startDate: '', endDate: ''})
    const steps = [
        {title: 'Create Goal', content: <CreateNewGoalStep setGoal={setGoalObj}/>},
        {title: 'Develop Milestones', content: <DevelopMilestonesStep setGoal={setGoalObj}/>},
        {title: 'Assign Dates', content: <SetDateStep setGoal={setGoalObj}/>, optional: true},]

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
        createGoal(goalObj)
        navigate('/dashboard');
    }

    return (<Box sx={{width: '100%'}}>
        <Stepper activeStep={activeStep}>
            {/*Iterate over the steps*/}
            {steps.map((step, index) => {
                const stepProps = {};
                const labelProps = {};

                if (isStepOptional(index)) {
                    labelProps.optional = (<Typography variant="caption">Optional</Typography>);
                }
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                // Show the title of the step
                return (<Step key={step} {...stepProps}>
                    <StepLabel {...labelProps}>{step.title}</StepLabel>
                </Step>);
            })}
        </Stepper>
        {/*Stepper body*/}
        {/*All steps are done?*/}
        {activeStep === steps.length ?
            // Yes, show the end message and reset button
            (<React.Fragment>
                <p className={"text-2xl font-bold leading-9 inline"}> Your first goal is set
                <img width={30} height={30} src={star} alt="edit" className="mx-3 pr-2 inline"/>
                </p>
                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                    <Box sx={{flex: '1 1 auto'}}/>
                    {/*Add the goalObj to redux store*/}
                    {/*Go to Dashboard*/}
                    <Button onClick={navigateDashboard}>Dashboard</Button>
                    {/*<Button onClick={handleReset}>Reset</Button>*/}
                </Box>
            </React.Fragment>) :
            // No, show the step content
            (<React.Fragment>
                <Box sx={{mt: 2, mb: 1}}>{steps[activeStep].content}</Box>
                {/*Navigation Buttons*/}
                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{mr: 1}}
                    >
                        Back
                    </Button>
                    <Box sx={{flex: '1 1 auto'}}/>
                    {isStepOptional(activeStep) && (<Button color="inherit" onClick={handleSkip} sx={{mr: 1}}>
                        Skip
                    </Button>)}

                    <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Box>
            </React.Fragment>)}
    </Box>);
}


