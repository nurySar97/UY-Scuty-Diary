import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.css'
 






class MyCalendar extends React.Component {
  state = {
    date: new Date(),
  }
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div id="calendar" style={{boxShadow:"0 0 30px black"}}>
        <Calendar className={`${styles.change}`} onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}







export default MyCalendar;