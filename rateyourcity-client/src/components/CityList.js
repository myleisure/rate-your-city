import React from 'react';
import {Dropdown, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';

class CityList extends React.Component {

    handleChange = (event, data) => {
    }

    render() {
        if (!this.props.cities.length) {
            return null;
        }
        return (
            <React.Fragment>
                <Header as='h4'>Select a city to be rated</Header>
                <Dropdown
                    placeholder='Selecte city'
                    fluid
                    search
                    selection
                    onChange={this.handleChange}
                    options={this.props.cities}
                />
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities.map(city => {
            return {
                key: city.name + ' ' + city.lat + ' ' + city.lng,
                value: city.name,
                text: city.name
            };
        })
    }
}

export default connect(mapStateToProps)(CityList);

