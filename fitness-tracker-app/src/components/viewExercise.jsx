import React from 'react';
import { useSelector } from 'react-redux';
import DeleteExercise from './deleteExercise'; // Ensure this import is correct

const ViewExercises = () => {
    const exercises = useSelector((state) => state.exercises.exercises);

    return (
        <ul>
            {exercises.map((exercise) => (
                <li key={exercise.id}>
                    {exercise.type} - {exercise.duration} minutes - {exercise.calories} kcal
                    <DeleteExercise id={exercise.id} />
                </li>
            ))}
        </ul>
    );
};

export default ViewExercises;
