import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateNewGoalStep from "./CreateNewGoalStep.jsx";
import DevelopMilestonesStep from "./DevelopMilestonesStep";
import SetDateStep from "./SetDateStep.jsx";

const steps = [
    {title: 'Create Goal', content: <CreateNewGoalStep/>},
    {title: 'Create Milestones', content: <DevelopMilestonesStep/>},
    {title: 'Assign Dates', content: <SetDateStep/>},]

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0); //Index of the Active step
    const [skipped, setSkipped] = React.useState(new Set()); //Skipped set

    // Check if the step is optional by checking the index
    const isStepOptional = (step) => {
        return step === 1;
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
    const handleReset = () => {
        setActiveStep(0);
    };

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
                <Typography sx={{mt: 2, mb: 1}}>
                    Your first goal is set :)
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                    <Box sx={{flex: '1 1 auto'}}/>
                    <Button onClick={handleReset}>Reset</Button>
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
