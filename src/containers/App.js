import React from 'react';
import { connect } from 'react-redux';
import {
    mouseIdle,
    mouseSlowlyMoving,
    mouseRapidlyMoving,
    changeCharater,
    changeCharaterVisibility
} from '../actions';
import Stage from './Stage';

class CatcheMeApp extends React.Component {

    handleStateOnClick = () => {
        console.log('Changing visibilty to: ' + !this.props.charaterIsVisible);
        this.props.dispatch(changeCharaterVisibility(!this.props.charaterIsVisible));
    }

    render() {
        return (
            <Stage
                onClick = {() => this.handleStateOnClick()} 
                stageHeight = {500}
                stageWidth = {500}
                charaterName = {this.props.charaterName}
                charaterImageURL = {this.props.charaterImageURL}
                charaterIsVisible = {this.props.charaterIsVisible}
                mouseX = {0}
                mouseY = {0}
                mouseSpeed = {0}
            /> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stageHeight: state.stageState.stageHeight,
        stageWidth: state.stageState.stageWidth,
        charaterName: state.charaterState.charaterName,
        charaterImageURL: state.charaterState.charaterImageURL,
        charaterIsVisible: state.charaterState.charaterIsVisible,
        mouseX: state.mouseState.mouseX,
        mouseY: state.mouseState.mouseY,
        mouseSpeed: state.mouseState.mouseSpeed
    }
}

export default connect(mapStateToProps)(CatcheMeApp);