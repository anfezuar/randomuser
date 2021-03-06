/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/UI/Actions';
import {setPictures} from '../../Core/Pictures/Actions';
import {setFavoritos, deleteFavoritos} from '../../Core/Favoritos/Actions';

const mapStateToProps = ({ui, contacts, pics, fav}) => {
  const {loading} = ui;
  const {pictures} = pics;
  const {profile} = contacts;
  const {favoritos} = fav;
  return {
    loading,
    profile,
    pictures,
    favoritos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    setPictures: data => dispatch(setPictures(data)),
    setFavoritos: state => dispatch(setFavoritos(state)),
    deleteFavoritos: state => dispatch(deleteFavoritos(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
