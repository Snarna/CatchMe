import React from 'react';
import posed from 'react-pose';

// Assets 
import ayanami from '../assets/ayanami.jpg';

const AnimatedCharater = posed.img({
    draggable: true,
    hidden: { opacity: 0},
    visible: { opacity: 1},
});

class Charater extends React.Component {
    render() {
        return(
            <AnimatedCharater src={ayanami} alt={this.props.name} pose={(this.props.isVisible) ? 'visible' : 'hidden'}/>
        );
    }
}

export default Charater;