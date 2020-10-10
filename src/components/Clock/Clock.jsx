import React from 'react';
import 'moment-timezone';
import Clock from 'react-live-clock';






class MyClock extends React.Component {
    render() {
        return (
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        )
    }
}


export default MyClock;