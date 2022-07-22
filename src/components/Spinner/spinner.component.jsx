import React from 'react';
import spinnerImg from '../../assets/image/loading.gif';

const Spinner = () => {
  return (
    <React.Fragment>
        <img src={spinnerImg} alt="Loading" className="d-block m-auto" style={{width:'200px'}} />
    </React.Fragment>
  )
}

export default Spinner;