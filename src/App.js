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
                <Container fluid={true}>
                    <Row style={{paddingTop: "20px", paddingBottom: "10px", marginBottom: "30px", backgroundColor: "#444444", color: "#FFFFFF"}}>
                        <Col>
                            <h3>Marvel Comics Search App</h3>
                            <h6>Search 1000s of Marvel Comic titles</h6>
                        </Col>
                    </Row>

                    <Container>
                        <AppMessage/>
                        <SearchPanel/>
                        <ResultsPanel/>
                        <SingleResultPanel/>

                    </Container>
                </Container>
            </Provider>
        );
    }
}

export default App;
