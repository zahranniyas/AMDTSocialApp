import React from 'react';
import {Image} from 'react-native';
import style from './style';

const Title = () => {
  return (
    <Image
      style={style.title}
      source={require('../../assets/images/amdt_con_logo.png')}
    />
  );
};

export default Title;
