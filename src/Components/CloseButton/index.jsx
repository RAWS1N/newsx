import React from "react";
import { Container,Division } from "./styles/CloseButton";

function CloseButton({...props}) {
  return (
    <Division {...props}>
    <Container>
      <svg viewBox="0 0 24 24" id="exit-btn" className="exit">
        <path
          id="exit"
          fill="white"
          d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
        />
      </svg>
    </Container>
    </Division>
  );
}

export default CloseButton;
