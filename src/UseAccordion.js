import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import { DataAccord } from "./DataAccord";
import { FiPlus, FiMinus } from "react-icons/fi";
import styled from "styled-components";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
background : #272727;
color : #fff;
display : flex;
justify-content : space-between;
align-items : center;
width : 100%;
text-align : center
cursor : pointer

h3 {
    padding : 2rem;
    font-size : 2rem;
}

span{
    margin-right : 1.5rem;
}

`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  heigth: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;

  p {
    font-size: 1.25rem;
  }
`;

function UseAccordion() {
  const [clicked, setClicked] = useState(false);

  function toggle(index) {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  }
  return (
    <div>
      <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
        <AccordionSection>
          <Container>
            {DataAccord.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h3>{item.question}</h3>

                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>

                  {clicked === index ? (
                    <Dropdown>
                      <h3>
                        <p>{item.answer}</p>
                      </h3>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
    </div>
  );
}

export default UseAccordion;
