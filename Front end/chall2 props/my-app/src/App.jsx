import './App.css';
import React from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const name = 'Zack';
  const hour = 10;

  function time(){
    return hour
  }

  function p1(){
    return 'I wanted to let you know as soon as possible that I will be staying home from work today.'
  }
  function p2(){
    return 'Unfortunately, I developed a stomach bug that has made it very difficult to get work done.'
  }
  function p3(){
    const timeline = time();
    return () => {
    return `I went to urgent care last night and was told it should subside within ${timeline} hours. I do not expect to be online throughout the day.`;
    }

  }
  function p4(){
    return 'While I do plan to be back in the office tomorrow, I’ve asked Kelly to take over for me today in case any emergencies arise. I had an important call scheduled with a supplier, but Daniel has agreed to manage the meeting.'
  }
  function p5(){
    return 'Please let me know of any additional steps you’d like me to take to ensure the day runs as smoothly as possible in my absence.'
  }

  return (
    <>
     <ChildComponent name={name}
     time={time}
     p1={p1}
     p2={p2}
     p3={p3}
     p4={p4}
     p5={p5}
     />
    </>
  )
}


export default App
