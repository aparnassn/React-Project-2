import React from "react";
import Button from "react-bootstrap/esm/Button";

const initialCandies = ["Snickers", "Kitkat", "Milky Way", "twix", "Skittle"];

function CandyDispenser() {
  const initialCandies = ["Snickers", "Kitkat", "Milky Way", "twix", "Skittle"];
  const [candies, setCandies] = React.useState(initialCandies);
  const dispense =(candy) => {
    setCandies((allCandies) => allCandies.filter((c)=>c !== candy))
    console.log({candies})

    
  };

  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {
            candies.length===0 ? (
                <Button onClick={() => setCandies(initialCandies)}>refill</Button>
            ) :(
                <ul>
                    {candies.map((candy) => (
                        <li key={candy}>
                            <Button onClick={()=> dispense(candy)}>Grab</Button>{candy}
                        </li>
                    ))}
                </ul>
            )
        }
      </div>
    </div>
  );
}

export default CandyDispenser;
