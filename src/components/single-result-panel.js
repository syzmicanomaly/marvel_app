import {connect}                                                                                 from "react-redux"
import React                                                                                     from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row} from 'reactstrap';
import {showSearchPage}                                                                          from "../redux/actions";
import renderHTML                                                                                from 'react-render-html';

const mapStateToProps = state => ({
    hide:  !state.currentComic,
    comic: state.currentComic
});

const mapDispatchToProps = dispatch => ({
    showSearch() {
        dispatch(showSearchPage());
    }
});

const formatDate = (date) => {
    if (!date) {
        return "";
    }
    console.log("Date: ", date);
    /** @type {Date} */
    const dateObj = new Date(date.date);
    return dateObj.toLocaleDateString();
};

/**
 * Component used to render detailed single comic result.
 */
class SingleResultPanel extends React.Component {
    render() {

        if (this.props.hide) {
            return null;
        }
        const
            props   = this.props,
            comic   = props.comic,
            src     = comic.images && comic.images.length > 0 ? comic.images[0].path + "." + comic.images[0].extension : null,
            date    = comic.dates && comic.dates.length > 0 ? comic.dates[0] : null,
            fmtDate = formatDate(date)
        ;


        return (
            <Container>
                <Row>
                    <Col>
                        <Button onClick={props.showSearch}>Return to Search</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <Card>
                            {src &&
                            <CardImg top width={"100%"} src={src}>

                            </CardImg>
                            }
                            {!src &&
                            <CardBody>
                                <CardTitle>{comic.title}</CardTitle>
                            </CardBody>
                            }
                            <CardBody>
                                <CardTitle>{comic.title}</CardTitle>
                                <CardSubtitle>{renderHTML(comic.description)}</CardSubtitle>
                                {fmtDate &&
                                <CardText>Published: {fmtDate}</CardText>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const SingleResultPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleResultPanel);

export default SingleResultPanelContainer;
