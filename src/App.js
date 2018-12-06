import React, {Component}             from 'react';
import {Col, Container, Row}          from 'reactstrap';
import {applyMiddleware, createStore} from "redux";
import {Provider}                     from "react-redux";
import {createLogger}                 from "redux-logger";
import thunkMiddleware                from "redux-thunk";
import reducer                        from "./redux/reducers";
import AppMessage                     from "./components/app-message";
import SearchPanel                    from "./components/search-panel";
import ResultsPanel                   from "./components/results-panel";
import SingleResultPanel              from "./components/single-result-panel";

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    )
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <AppMessage/>
                    <SearchPanel/>
                    <ResultsPanel/>
                    <SingleResultPanel/>
                    <Row>
                        <Col>Data provided by Marvel. © 2014 Marvel</Col>
                    </Row>
                </Container>
            </Provider>
        );
    }
}

export default App;
