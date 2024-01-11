import { Link } from "@reach/router";
import React from "react";
import { useNavigate } from "@reach/router";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
//import Button from "react-bootstrap/Button";



function Shopper() {
  const navigate = useNavigate()

  const Button = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : right;
    position : relative;
`;

  return (
    <div>
      <Container style={{backgroundColor:"lightblue", height:"75px"}}>
      <div className="col-sm-6">
        <div className="logoname">
          <h2>
            <a href="#">Electronics Shop</a>
          </h2>
        </div>
        <div className="Home">
          <Button variant="primary" onClick={()=>navigate("/")}>
            Home
          </Button>
        </div>
        <div className="SignUp">
          <Button>
          <button><Link to="/Register">SignUp</Link></button>
          </Button>
        </div>
        <div className="Cart">
          <Button>
          <button><Link to="#">Cart</Link></button>
          </Button>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default Shopper;
