import React, { useState, useRef, useEffect } from "react";
import "./workoutSplit.scss";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdPending, MdDoneOutline } from "react-icons/md";

const WorkoutSplit = ({ opendropdown, splitName, workouts }) => {

    const [openDrop, setOpenDrop] = useState(false);
    const [listOfWorkouts, setListOfWorkouts] = useState([]);

    const mode = opendropdown ? (
        <MdOutlineArrowDropUp />
    ) : (
        <MdOutlineArrowDropDown />
    );

    const handleChange = () => {
        setOpenDrop((prevOpenDrop) => !prevOpenDrop);
    };

    const initialiseWorkouts = () => {
        const workoutData = [];
        workouts.map(exercise => {
            workoutData.push(
                <p className="dropdown__options-exercise">{exercise} <MdPending className="dropdown__options-exercise-icon"/></p>
            )
        })
        setListOfWorkouts(workoutData)
    }

    const inputRef = useRef(null);

    const createExercise = (e) => {
        e.preventDefault();
        let updatedList = [...listOfWorkouts];
        updatedList.push(<p className="dropdown__options-exercise">{inputRef.current.value} <MdPending className="dropdown__options-exercise-icon"/></p>);
        setListOfWorkouts(updatedList)
    }

    useEffect(() => {
        initialiseWorkouts();
    }, [])

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
                            {listOfWorkouts}
                            <form onSubmit={createExercise}>
                                <input className="dropdown__options-exercise-icon" placeholder="Add new exercise" ref={inputRef} />
                                <button type="submit"> <MdDoneOutline /> </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkoutSplit;


{/* <WorkoutSplit splitName={"Pull"} workouts={["Pull up", "Bicep curl"]}/> */}
