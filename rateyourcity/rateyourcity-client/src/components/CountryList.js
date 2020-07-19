import React from "react";
import {Dropdown} from "semantic-ui-react";
import {connect} from 'react-redux';
import {fetchCountries, fetchCountry} from "../actions";

class CountryList extends React.Component {

    componentDidMount() {
        this.props.fetchCountries();
    }

    handleChange = (event, {value}) => {
        this.props.fetchCountry(value);
    }

    render() {
        return (
            <Dropdown
                placeholder='Search a country'
                fluid
                search
                selection
                onChange={this.handleChange}
                options={this.props.countries}
            />
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
                flag: c.alphaCode
            }
        })
    }
}

export default connect(mapStateToProps, {fetchCountries, fetchCountry})(CountryList);
