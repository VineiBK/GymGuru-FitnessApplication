import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PointsContext = createContext();

export const usePoints = () => useContext(PointsContext);

export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);

  // Load points from storage
  useEffect(() => {
    const loadPoints = async () => {
      try {
        const storedPoints = await AsyncStorage.getItem('points');
        if (storedPoints !== null) {
          console.log("Loaded points: ", storedPoints); // Debugging
          setPoints(JSON.parse(storedPoints));
        }
      } catch (error) {
        console.error('Failed to load points from storage', error);
      }
    };
    loadPoints();
  }, []);

  // Save points to storage
  useEffect(() => {
    const savePoints = async () => {
      try {
        await AsyncStorage.setItem('points', JSON.stringify(points));
        console.log("Saved points: ", points); // Debugging
      } catch (error) {
        console.error('Failed to save points to storage', error);
      }
    };
    savePoints();
  }, [points]);

  const addPoint = () => {
    setPoints(points + 1);
  };

  return (
    <PointsContext.Provider value={{ points, addPoint }}>
      {children}
    </PointsContext.Provider>
  );
};
