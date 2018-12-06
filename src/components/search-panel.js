import {connect}                                        from "react-redux"
import React                                            from 'react';
import {Button, Form, FormGroup, Input, Label}          from 'reactstrap';
import {fetchResults, renderSearchResults, showMessage} from "../redux/actions";
import Api                                              from "../marvel-api";

const mapStateToProps = state => ({
    hide: !!state.currentComic
});

const mapDispatchToProps = dispatch => ({
    doSearch(searchText) {
        if (!searchText) {
            dispatch(showMessage("You must enter search text", "danger"));
            return;
        }
        dispatch(fetchResults(searchText));
        Api.fetchBySearchText(searchText).then((results) => {
            if (results.data) {
                const comics = results.data.results;
                if (comics.length === 0) {
                    dispatch(showMessage("No results were returned for search text: " + searchText, "warning"));
                } else {
                    console.log("Results: ", results.data.results);
                    dispatch(renderSearchResults(results.data.results));
                }
            } else {
                dispatch(showMessage("An error has occurred", "danger")); //TODO obtain API error
                console.warn("No Results: ", results);
            }
        });
    }
});

/**
 * Component used to render search input box and button
 */
class SearchPanel extends React.Component {

    constructor(props) {
        super(props);

        this.textInput = React.createRef();
    }

    render() {
        const
            comp     = this,
            props    = comp.props,
            onSearch = () => {
                props.doSearch(comp.textInput.current.value);
            }
        ;

        if (props.hide) {
            return null;
        }

        return (
            <Form>
                <FormGroup>
                    <Label for="searchText">Search Text</Label>
                    <Input type="text" name="searchText" id="searchText" placeholder="Search Text" innerRef={this.textInput}/>
                </FormGroup>
                <Button onClick={onSearch}>Search</Button>
            </Form>
        );
    }
}

const SearchPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPanel);

export default SearchPanelContainer;
