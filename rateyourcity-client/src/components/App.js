import React from 'react';
import {Container, Header} from "semantic-ui-react";

import CountryList from "./CountryList";
import CityList from "./CityList";

const App = () => (
    <Container>
        <Header as='h2'>Rate your city</Header>
        <CountryList />

        <CityList />
    </Container>
);

export default App;
