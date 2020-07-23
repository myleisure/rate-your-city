import React from "react";
import {Dropdown, Header} from "semantic-ui-react";
import {connect} from 'react-redux';
import {fetchCountries, fetchCitiesInCurrentCountry, setCUrrentCountry} from "../actions";

class CountryList extends React.Component {

    componentDidMount() {
        this.props.fetchCountries();
    }

    handleChange = (event, {value}) => {
        const currentCountry = this.props.countries[value];
        this.props.setCUrrentCountry(currentCountry);
        this.props.fetchCitiesInCurrentCountry(currentCountry);
    }

    render() {
        if (!this.props.countries) {
            return null;
        }
        const countries = Object.values(this.props.countries).map(c => ({
                key: c.alphaCode,
                value: c.id,
                text: c.name,
                flag: c.alphaCode.toLowerCase()
            })
        );
        return (
            <React.Fragment>
                <Header as='h4'>Select a country first</Header>
                <Dropdown
                    placeholder='Search a country'
                    fluid
                    search
                    selection
                    onChange={this.handleChange}
                    options={countries}
                />
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {countries: state.countries}
}


export default connect(mapStateToProps, {fetchCountries, fetchCitiesInCurrentCountry, setCUrrentCountry})(CountryList);
