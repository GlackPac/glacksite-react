import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function addMinutes(date: Date, minutes:number) {
    //we multiply minutes by 60000 is to convert minutes to milliseconds
    return new Date(date.getTime() + minutes * 60000);
};

function Clock() {
    const [time, setTime] = useState(new Date());
  
    const handleClickPlusTen = () => {
        setTime((previousTime) => addMinutes(previousTime, 10))
    };
    
    const handleClickReset = () => {
        setTime(new Date());
    }
  
    return (
      <div>
        <p>Time Refreshed -{'>'}{time.toLocaleTimeString()}</p>
        <Button onClick={handleClickPlusTen} className='mx-1'>+ 10 Minutes</Button>
        <Button onClick={handleClickReset} className='mx-1'>Reset</Button>
      </div>
    );
}

function LoadingTest() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(Array<number>);
    function loadData() {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setData([1, 2, 3, 4]);
      }, 3000);
    }
  
    return (
      <>
        {loading && <p>Loading...</p>}
        <p>{JSON.stringify(data, null, ' ')}</p>
        <Button onClick={loadData}>Load Data</Button>
      </>
    );
}
  

const About = (props:any) => {
    return (
        <Container>
            <p>Hello, i'm About</p>
            <p>Goofy stuff below:</p>
            <Clock/>
            <br/>
            <LoadingTest/>
        </Container>
    )
}

export default About