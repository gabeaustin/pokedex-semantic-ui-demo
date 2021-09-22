import React from "react";
import { Segment } from "semantic-ui-react";
import { Header } from "semantic-ui-react";

const PokedexHeader = ({ name }) => {
  return (
    <Segment basic inverted padded="very" vertical>
      <Header as="h1">This is a Header for {name} Pokedex!</Header>
      <Header as="h3">This is a subheading.</Header>
    </Segment>
  );
};

export default PokedexHeader;
