import {connect}                                                from "react-redux"
import React                                                    from 'react';
import {Card, CardBody, CardImg, CardText, Col, Container, Row} from 'reactstrap';
import {showSingleSearchPage}                                   from "../redux/actions";
import Api                                                      from "../marvel-api";

const mapStateToProps = state => ({
    hide: state.currentSearchResults.length === 0 || !!state.currentComic,
    results: state.currentSearchResults
});

const mapDispatchToProps = dispatch => ({
    onComicClick(id) {
        Api.fetchById(id).then((results) => {
            if (results.data.results.length === 0) {
                dispatch(showSingleSearchPage(null));
            } else {
                console.log("Single result: ", results.data.results[0]);
                dispatch(showSingleSearchPage(results.data.results[0]));
            }
        });
    }
});

// grid rendering taken and adapted from: https://stackoverflow.com/questions/36268705/react-jsx-conditional-wrapper-for-bootstrap-grid
const Comic = ({comic, onClick}) => (
    <Col md={4}>
        <Card>
        {
            comic.images && comic.images.length > 0 &&
                <CardImg top width={"100%"} src={comic.images[0].path + "." + comic.images[0].extension} onClick={() => onClick(comic.id)} />
        }
        {
            comic.images && comic.images.length === 0 &&
            <CardBody>
                <CardText>{comic.title}</CardText>
            </CardBody>
        }
        </Card>
    </Col>
);

const ComicsRow = ({rowData, onClick}) => (
    <Row>
        {
            rowData.map((comic, index) => (
                <Comic key={index} comic={comic} onClick={onClick} />
            ))
        }
    </Row>
);

/**
 * Component used to redner grid of search results.
 */
class ResultsPanel extends React.Component {
    render() {
        const
            comp    = this,
            props   = comp.props,
            results = props.results
        ;

        if (props.hide) {
            return null;
        }
        return (
            <Container>
                {
                    results.reduce((rowData, comic, index) => {
                        if (index % 3 === 0) {
                            rowData.push([]);
                        }
                        rowData[rowData.length - 1].push(comic);
                        return rowData;
                    }, []).map((rowData, index) => (
                        <ComicsRow key={index} rowData={rowData} onClick={props.onComicClick} />
                    ))
                }
            </Container>
        );
    }
}

const ResultsPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsPanel);

export default ResultsPanelContainer;

