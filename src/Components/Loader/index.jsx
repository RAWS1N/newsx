import React from "react";
import {MutatingDots} from 'react-loader-spinner'
import {LoaderContainer} from './styles/Loader'

function index() {
  return (
    <LoaderContainer>
      <MutatingDots
        height="100"
        width="100"
        color="#404240"
        secondaryColor="#404240"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h2>Loading...</h2>
    </LoaderContainer>
  );
}

export default index;
