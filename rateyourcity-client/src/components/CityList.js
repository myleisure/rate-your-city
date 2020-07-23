import React from 'react';
import {Dropdown, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';

class CityList extends React.Component {

    handleChange = (event, {value}) => {
    }

    render() {
        if (!this.props.cities) {
            return null;
        }

        const cities = Object.values(this.props.cities).map(city => {
            return {
                key: city.name + ' ' + city.lat + ' ' + city.lng,
                value: city.name,
                text: city.name
            };
        });
        return (
            <React.Fragment>
                <Header as='h4'>Select a city to be rated</Header>
                <Dropdown
                    placeholder='Select a city'
                    fluid
                    search
                    selection
                    onChange={this.handleChange}
                    options={cities}
                />
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities[state.currentCountry.id]
    }
}

export default connect(mapStateToProps)(CityList);

