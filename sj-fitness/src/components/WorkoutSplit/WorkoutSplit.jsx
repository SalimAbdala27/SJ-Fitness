import React, { useState } from "react";
import "./workoutSplit.scss";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

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
            <p className="options__links">{exercise}</p>
        )
    })

    return (
        <div className="dropdown">
            <div className="dropdown__bar" onClick={handleChange}>
                {splitName} {mode}
            </div>
            <div className="dropdown__options">
                {openDrop && (
                    <div className="options">
                        {listOfWorkOuts}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkoutSplit;
