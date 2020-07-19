import React from "react";
import {Dropdown, Header} from "semantic-ui-react";
import {connect} from 'react-redux';
import {fetchCountries, fetchCitiesInCurrentCountry} from "../actions";

class CountryList extends React.Component {

    componentDidMount() {
        this.props.fetchCountries();
    }

    handleChange = (event, {value}) => {
        this.props.fetchCitiesInCurrentCountry(value);
    }

    render() {
        return (
            <React.Fragment>
                <Header as='h4'>Select a country first</Header>
                <Dropdown
                    placeholder='Search a country'
                    fluid
                    search
                    selection
                    onChange={this.handleChange}
                    options={this.props.countries}
                />
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries.map(c => {
            return {
                key: c.alphaCode,
                value: c.id,
                text: c.name,
                flag: c.alphaCode.toLowerCase()
            }
        })
    }
}

export default connect(mapStateToProps, {fetchCountries, fetchCitiesInCurrentCountry})(CountryList);
