import React from 'react';
import {Container, Header} from "semantic-ui-react";

import CountryList from "./CountryList";

const App = () => (
    <Container>
        <Header as='h2'>Rate your country</Header>
        <CountryList />
    </Container>
);

export default App;
