import React from 'react';
import ReactSpeech from 'react-speech';

const style={
    container: {
      width: '0%',
      marginRight:"20px"
    },
    text: {
      width: '100%',
      display: ''
    },
    play: {
      hover: {
        backgroundColor: 'GhostWhite'
      },
      button: {
        width: '20px',
        height: '20px',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'Gainsboro',
        border: 'solid 1px rgba(255,255,255,1)',
        borderRadius: "6px"
      }
    },
    stop: {
      hover: {
        backgroundColor: 'GhostWhite'
      },
      button: {
        width: '20px',
        height: '20px',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'Gainsboro',
        border: 'solid 1px rgba(255,255,255,1)',
        borderRadius: "6px"
      }
    },
    pause: {
      hover: {
        backgroundColor: 'GhostWhite'
      },
      button: {
        width: '20px',
        height: '20px',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'Gainsboro',
        border: 'solid 1px rgba(255,255,255,1)',
        borderRadius: "6px"
      }
    },
    resume: {
      hover: {
        backgroundColor: 'GhostWhite'
      },
      button: {
        width: '34px',
        height: '34px',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'Gainsboro',
        border: 'solid 1px rgba(255,255,255,1)',
        borderRadius: 6
      }
    }
  };
  


const ReactSpeechContainer = (props)=> {
    return (
        <ReactSpeech
            styles={style} 
            text={props.text}
            lang="en-GB"
            voice="Google UK English Male"
            disabled={false}
        />
    )
}



export default ReactSpeechContainer;

