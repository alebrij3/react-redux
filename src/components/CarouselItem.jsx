import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, unsetFavorite } from '../actions';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {

  const { id, cover, title, year, contentRating, duration, isFav } = props;

  const handleSetFavorite = () => {
    let isFav = true;
    props.setFavorite({
      id, cover, title, year, contentRating, duration, isFav,
    });
  };

  const handleUnsetFavorite = (itemId) => {
    props.unsetFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title}  />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          </Link>
          {isFav ? <img className='carousel-item__details--img' src={removeIcon} alt='Remove Icon' onClick={() => handleUnsetFavorite(id)} /> : <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' onClick={handleSetFavorite} />
          }
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavorite,
  unsetFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);
