import React, { useState, useRef, useEffect } from "react";
import "./workoutSplit.scss";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdPending, MdDoneOutline, MdModeEdit } from "react-icons/md";
import { BsPlus, BsPlusLg, BsFillEyeFill, BsFillTrashFill  } from "react-icons/bs";
import { logDOM } from "@testing-library/react";


const WorkoutSplit = ({ opendropdown, splitName, workouts }) => {

    const [openDrop, setOpenDrop] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [arrayOfWorkouts, setArrayOfWorkouts] = useState([...workouts]);
    const [listOfWorkouts, setListOfWorkouts] = useState([]);
    const [optionsPopup, setOptionsPopup] = useState(true)


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
        // setOptionsPopup(true)
        setOptionsPopup((prevOpenDrop) => !prevOpenDrop);
    };

    const initialiseWorkouts = () => {
        const workoutData = [];
        console.log("Inital workouts ", arrayOfWorkouts);
        arrayOfWorkouts.map((exercise, index) => {
            workoutData.push(
                <div key={index}>
                    {/* <p className="dropdown__options-exercise" >
                        {exercise} 
                        <MdPending className="dropdown__options-exercise-icon" onClick={handleOptionsPopup} />
                    </p> */}
                    <div className="dropdown__options-exercise" >
                        <p className="dropdown__options-exercise-name">{exercise}</p>
                        <MdPending className="dropdown__options-exercise-icon" onClick={handleOptionsPopup} />
                    </div>
                    {optionsPopup && (
                        <div className="options-popup">
                            <li className="options-popup__item">
                                <BsFillEyeFill className="options-popup__item-icon" />
                                <p className="options-popup__item-name">View</p>
                            </li>
                            <li className="options-popup__item">
                                <MdModeEdit className="options-popup__item-icon" />
                                <p className="options-popup__item-name">Edit</p>
                            </li>
                            <li className="options-popup__item" onClick={handleDelete} value={index}>
                                <BsFillTrashFill className="options-popup__item-icon" /> 
                                <p className="options-popup__item-name">Delete</p> 
                            </li>
                            {/* <li className="options-popup__item">View</li>
                            <li className="options-popup__item">Edit</li>
                            <li className="options-popup__item" onClick={handleDelete} value={index}>Delete</li> */}
                        </div>
                    )}
                </div>
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
            <div key={updatedArrayWorkouts.length - 1}>
                <p className="dropdown__options-exercise">
                    {inputRef.current.value} 
                    <MdPending className="dropdown__options-exercise-icon" onClick={handleOptionsPopup} />
                </p>
                {optionsPopup && (
                    <div className="options-popup">
                        <li className="options-popup__item">View</li>
                        <li className="options-popup__item">Edit</li>
                        <li className="options-popup__item" onClick={handleDelete}>Delete</li>
                    </div>
                )}
            </div>
        );
        setListOfWorkouts(updatedList)
        setArrayOfWorkouts(updatedArrayWorkouts)
        console.log("After array ", arrayOfWorkouts);
        inputRef.current.value = ""; // Clear the input field
        handleAddDrop();
    }

    const handleDelete = (e) => {
        const deleteValue = arrayOfWorkouts[e.target.value]
        console.log("Deleted value: ", deleteValue);
        const deletedArr = arrayOfWorkouts.filter(workout => workout !== deleteValue)
        console.log("The deleted array ", deletedArr);
        setArrayOfWorkouts(deletedArr);
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
