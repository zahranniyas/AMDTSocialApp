import React from 'react';
import {View, Image} from 'react-native';
import style from '../UserProfileImage/style';
import PropTypes from 'prop-types';

const UserProfileImage = props => {
  return (
    <View
      style={[
        style.storyImageContainer,
        {borderRadius: props.imageDimensions},
      ]}>
      <Image
        style={{width: props.imageDimensions, height: props.imageDimensions}}
        source={props.profileImage}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
