import React from "react";
import { observer } from "mobx-react";

import Filters from "../Filters";

import { Heading, Container } from "./styledComponents.js";

function MainComponent() {
  return (
    <Container>
      <Heading>{"SpaceX Launch Programs"}</Heading>
      <Filters />
    </Container>
  );
}

export default observer(MainComponent);
