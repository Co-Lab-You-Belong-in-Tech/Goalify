import React from 'react';
import Header from './header';
import ListCards from './listCards';
import {useSelector} from "react-redux";
import IntroduceStepper from "../../components/stepper/IntroduceStepper.jsx";

const Dashboard = () => {
    const name = useSelector((state) => state.user.name);
    return (
        <>
            { (name.length === 0) ?
                <IntroduceStepper/>
                : <>
                    <Header/>
                    <ListCards/>
                </>
            }

        </>
    );
};

export default Dashboard;
