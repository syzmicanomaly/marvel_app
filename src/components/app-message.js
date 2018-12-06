import {connect}     from "react-redux"
import React         from 'react';
import {Alert}       from 'reactstrap';
import {hideMessage} from "../redux/actions";

const mapStateToProps = state => ({
    hide:    !state.message,
    message: state.message
});

const mapDispatchToProps = dispatch => ({
    onDismiss() {
        dispatch(hideMessage());
    }
});

/**
 * Component used to render alert box in app for info/error messages.
 */
class AppMessage extends React.Component {
    render() {
        if (this.props.hide) {
            return null;
        }

        const
            props = this.props,
            msg   = props.message,
            text  = msg.text,
            color = msg.level
        ;

        return (
            <Alert color={color} isOpen={true} toggle={props.onDismiss}>
                {text}
            </Alert>
        );
    }
}

const AppMessageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppMessage);

export default AppMessageContainer;
