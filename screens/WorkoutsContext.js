import React, { createContext, useContext, useState } from 'react';

const WorkoutsContext = createContext();

export const useWorkouts = () => useContext(WorkoutsContext);

export const WorkoutsProvider = ({ children }) => {
  const [completedWorkouts, setCompletedWorkouts] = useState({ day1: 0, day2: 0, day3: 0, day4: 0, day5: 0, day6: 0 });

  const completeWorkout = (day) => {
    setCompletedWorkouts((currentWorkouts) => ({ ...currentWorkouts, [day]: currentWorkouts[day] + 1 }));
  };

  return <WorkoutsContext.Provider value={{ completedWorkouts, completeWorkout }}>{children}</WorkoutsContext.Provider>;
};
