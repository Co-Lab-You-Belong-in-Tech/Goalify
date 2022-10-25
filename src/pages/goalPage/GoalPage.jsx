// import {useParams} from "react-router-dom";
import * as React from "react";
import Logo from "../../assets/icons/logo.png";
import Button from "../../components/button.jsx";

const GoalPage = () => {
    // let params = useParams();

    return (
        <div className="bg-yellow-100 h-56 py-3 md:py-5 md:px-20">
            <div className="flex gap-4 items-center my-5">
                <img src={Logo} alt="logo"/>
                <h1 className="text-4xl font-semibold">Welcome back, Jason</h1>
            </div>
            <div>
                <Button className="btn-primary w-44 ml-2" >+ Create a goal</Button>
            </div>
        </div>
    );
}

export default GoalPage;