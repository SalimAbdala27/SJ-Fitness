import React, { useState, useRef } from "react";
import "./workoutSplit.scss";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdPending, MdDoneOutline } from "react-icons/md";

const WorkoutSplit = ({ opendropdown, splitName, workouts }) => {
    const mode = opendropdown ? (
        <MdOutlineArrowDropUp />
    ) : (
        <MdOutlineArrowDropDown />
    );

    const [openDrop, setOpenDrop] = useState(false);

    const handleChange = () => {
        setOpenDrop((prevOpenDrop) => !prevOpenDrop);
    };

    const listOfWorkOuts = [];

    workouts.map(exercise => {
        listOfWorkOuts.push(
            <p className="dropdown__options-exercise">{exercise} <MdPending className="dropdown__options-exercise-icon"/></p>
        )
    })

    const inputRef = useRef(null);

    const createExercise = () => {
        console.log(inputRef.current.value);
        listOfWorkOuts.push(
            <p className="dropdown__options-exercise">{inputRef.current.value} <MdPending className="dropdown__options-exercise-icon"/></p>
        )
    }

    return (
        <div className="pageHold">
            <div className="dropdown">
                <div className="dropdown__heading-container" onClick={handleChange}>
                    <div className="dropdown__heading-title">
                        {splitName}
                    </div>
                    <div className="dropdown__heading-icon">
                        {mode}
                    </div>
                </div>
                <div className="dropdown__options">
                    {openDrop && (
                        <div className="dropdown__options-list">
                            {listOfWorkOuts}
                            {/* <form onSubmit={createExercise}>
                                <input className="dropdown__options-exercise-icon" placeholder="Add new exercise" ref={inputRef} />
                                <button type="submit"> <MdDoneOutline /> </button>
                            </form> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkoutSplit;
