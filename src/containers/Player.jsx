import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/containers/Player.scss';
import NotFound from './NotFound';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='player'>
      <video controls>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapDispatchToProps = {
  getVideoSource,
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
