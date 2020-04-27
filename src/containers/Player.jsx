import React from 'react';
import '../assets/styles/containers/Player.scss';

const Player = (props) => {
  return (
    <div className='player'>
      <video controls>
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
