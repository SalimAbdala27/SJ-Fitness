import React, { useState, useEffect } from 'react';
import "./workoutSplit.scss";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";



const WorkoutSplit = (props) => {
    const { splitTitle, openSplitDown, splitExercises } = props;
    const mode = (openSplitDown ? <AiOutlinePlus /> : <AiOutlineClose /> )
    const [openSplit, setOpenSplit] = useState(false);
    const handleChange = () => {
        setOpenSplit((prevOpenDrop) => !prevOpenDrop)
        console.log(openSplit);
    }


    const getExercises = () => {
        return (
            splitExercises.map((exercise) =>
                <div className="splitBar__subs-exercise">
                    <div className="splitBar__subs-exercise-name">{exercise}</div>
                    <div className="splitBar__subs-exercise-icon"><CgMoreO /></div>
                </div>
            )
        )
    }



  return (
        <div className="splitBar">
            <div className="splitBar__main">
                <div className="splitBar__heading-title" onClick={handleChange}>{splitTitle}</div>
                <div className="splitBar__heading-icon" onClick={handleChange}>
                    {mode}
                </div>
            </div>
            {openSplit && (
                <div className="splitBar__subs">
                    {getExercises()}
                </div>
            )}
        </div>
    )
}
export default WorkoutSplit
