import React from "react";
import { Segment } from "semantic-ui-react";

const PokedexHeader = ({ name }) => {
  return (
    <Segment basic inverted padded="very" vertical>
      <h1>This is a Header for {name} Pokedex!</h1>
      <h3>This is a subheading.</h3>
    </Segment>
  );
};

export default PokedexHeader;
