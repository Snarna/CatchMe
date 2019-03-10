import React from 'react';
import Charater from '../components/Charater';

/*  Porps 
    stageHeight,
    stageWidth,
    charaterName,
    charaterImageURL,
    mouseX,
    mouseY,
    mouseSpeed,
*/

class Stage extends React.Component {
    render = () => {
        console.log("In stage: " + this.props.charaterIsVisible);
        return (
            <div onClick={this.props.onClick}>
                <Charater
                    name={this.props.charaterName} 
                    imageURL={this.props.charaterImageURL}
                    isVisible={this.props.charaterIsVisible}
                />
            </div>
        );
    };
}

export default Stage;