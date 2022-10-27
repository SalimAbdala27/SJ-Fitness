import React, { useState, useRef, useEffect } from "react";
import "./workoutSplit.scss";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdPending, MdDoneOutline } from "react-icons/md";
import { BsPlus, BsPlusLg } from "react-icons/bs";

const WorkoutSplit = ({ opendropdown, splitName, workouts }) => {

    const [openDrop, setOpenDrop] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [arrayOfWorkouts, setArrayOfWorkouts] = useState([...workouts]);
    const [listOfWorkouts, setListOfWorkouts] = useState([]);
    const [optionsPopup, setOptionsPopup] = useState(false)


    const mode = opendropdown ? (
        <MdOutlineArrowDropUp />
    ) : (
        <MdOutlineArrowDropDown />
    );

    const handleSplitDrop = () => {
        setOpenDrop((prevOpenDrop) => !prevOpenDrop);
    };

    const handleAddDrop = () => {
        setOpenAdd((prevOpenDrop) => !prevOpenDrop);
    };

    const handleOptionsPopup = () => {
        console.log("Clicked");
        setOptionsPopup((prevOpenDrop) => !prevOpenDrop);
    };

    const initialiseWorkouts = () => {
        const workoutData = [];
        console.log("Inital workouts ", arrayOfWorkouts);
        arrayOfWorkouts.map(exercise => {
            workoutData.push(
                <>
                    <p className="dropdown__options-exercise" >
                        {exercise} 
                        <MdPending className="dropdown__options-exercise-icon" onClick={handleOptionsPopup} />
                    </p>
                    {/* {optionsPopup && ( */}
                        <div className="options-popup">
                            <li className="options-popup__item">View</li>
                            <li className="options-popup__item">Edit</li>
                            <li className="options-popup__item">Delete</li>
                        </div>
                    {/* )} */}
                </>
            )
        })
        setListOfWorkouts(workoutData)
        console.log("List of workouts after set: ",listOfWorkouts)
    }

    const inputRef = useRef(null);

    const createExercise = (e) => {
        e.preventDefault();
        let updatedArrayWorkouts = [...arrayOfWorkouts];
        updatedArrayWorkouts.push(inputRef.current.value);
        let updatedList = [...listOfWorkouts];
        updatedList.push(
            <>
                <p className="dropdown__options-exercise">
                    {inputRef.current.value} 
                    <MdPending className="dropdown__options-exercise-icon" onClick={handleOptionsPopup} />
                </p>
                {/* {optionsPopup && ( */}
                    <div className="options-popup">
                        <li className="options-popup__item">View</li>
                        <li className="options-popup__item">Edit</li>
                        <li className="options-popup__item">Delete</li>
                    </div>
                {/* )} */}
            </>
        );
        setListOfWorkouts(updatedList)
        setArrayOfWorkouts(updatedArrayWorkouts)
        console.log("After array ", arrayOfWorkouts);
    }

    useEffect(() => {
        initialiseWorkouts();
    }, [arrayOfWorkouts])

    return (
        <div className="pageHold">
            <div className="dropdown">
                <div className="dropdown__heading-container">
                    <div className="dropdown__heading-container-left" onClick={handleSplitDrop}>
                        <div className="dropdown__heading-title">
                            {splitName}
                        </div>
                        <div className="dropdown__heading-icon">
                            {mode}
                        </div>
                    </div>
                    { openDrop && (
                        <div className="dropdown__heading-container-right" onClick={handleAddDrop}>
                            <BsPlusLg />
                        </div>
                    )}
                </div>
                <div className="dropdown__options">
                    {openDrop && (
                        <div className="dropdown__options-list">
                            {listOfWorkouts}
                            {openAdd && (
                                <form onSubmit={createExercise}>
                                    <input className="dropdown__options-exercise-icon" placeholder="Add new exercise" ref={inputRef} />
                                    <button type="submit"> <MdDoneOutline /> </button>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkoutSplit;


{/* <WorkoutSplit splitName={"Pull"} workouts={["Pull up", "Bicep curl"]}/> */}
