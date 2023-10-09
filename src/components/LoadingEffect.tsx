import React, { useState, useEffect } from 'react';
import { Spinner, Button } from 'react-bootstrap';

function LoadingTest() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(Array<number>);
    const [page, setPage] = useState(1);

    function loadData() {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (page === 1) {
          setData([1, 2, 3, 4, 5]);
        } else if (page === 2) {
          setData([6, 7, 8, 9, 10]);
        } else {
          setData([0, 0, 0, 0, 0]);
        }
      }, 1000);
    }

    useEffect(loadData, [page]);

    function handleNext() {
      setPage((currentPage) => currentPage + 1);
    }

    return (
      <>
        {loading && <Spinner size="sm"/>}
        {data && <p>{JSON.stringify(data, null, ' ')}</p>}
        <span>Current Page: {page}</span>
        <Button variant='secondary' className='mx-2' onClick={handleNext}>Load Data</Button>
      </>
    );
}

export default LoadingTest