import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const AnimatedCounter = ({ numsArray, decoration }) => {
  // Numbers array where the counter stops
  const numbersArray = numsArray; // Add your desired stop points here
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0); // Track the target number index
  const [started, setStarted] = useState(false); // Track if the counter has started after delay

  const targetNumber = numbersArray[currentIndex]; // Current target number
  const maxProgressForCounter = 65; // The progress at which the counter should stop (65%)

  // Calculate the increment speed to sync the counter with progress bar
  const progressToMax = maxProgressForCounter;
  const incrementSpeed = targetNumber / progressToMax; // Calculate how fast to increment

  // Start the counter after 1 second delay
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, 500); // 1 second delay

    return () => clearTimeout(startTimeout); // Clear timeout if component unmounts
  }, []);

  // Function to increment the number
  useEffect(() => {
    let numberInterval;
    if (started && count < targetNumber && progress < maxProgressForCounter) {
      numberInterval = setInterval(() => {
        setCount((prev) => Math.min(prev + incrementSpeed, targetNumber)); // Increment based on speed
      }, 50); // Adjust interval for smoothness
    }
    return () => clearInterval(numberInterval);
  }, [count, progress, targetNumber, incrementSpeed, started]);

  // Function to animate the progress bar
  useEffect(() => {
    let progressInterval;
    if (started && progress < 100) {
      progressInterval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 50); // Adjust the speed here
    }
    return () => clearInterval(progressInterval);
  }, [progress, started]);

  // Stop the counter and set it to the target number when progress hits maxProgressForCounter
  useEffect(() => {
    if (progress >= maxProgressForCounter) {
      setCount(targetNumber);
    }
  }, [progress, targetNumber]);

  return (
    <div className="flex w-[28%] flex-col items-center justify-center text-center">
      <h3 className="xxl:text-[67.2px] lg:text-[3.5vw] text-[35px] w-full lg:text-black text-white text-center">
        {JSON.stringify(Math.round(count))}
        {decoration}
      </h3>
      <div className="lg:text-black text-white w-full pt-1 lg:text-[1.15vw] text-[10px] xxl:text-[22.08px]">
        Lorem ipsum dolor. <br />
        <span className="lg:text-gray-500 text-gray-400"> adipisicing elit, ipsam.</span>
      </div>
    </div>
  );
};

export default AnimatedCounter;
