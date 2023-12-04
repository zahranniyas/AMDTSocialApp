import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faMessage,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={style.postContainer}>
      <View style={style.profileContainer}>
        <View style={style.profileImageContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={36}
          />
          <View style={style.profileTextContainer}>
            <Text style={style.profileText}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.profileSubText}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon
          style={style.postButtonIco}
          icon={faEllipsis}
          size={20}
        />
      </View>
      <View style={style.postImageContainer}>
        <Image style={style.postImage} source={props.image} />
      </View>
      <View style={style.postCommentContainer}>
        <Text style={style.postComment}>{props.caption}</Text>
      </View>
      <View style={style.impressionContainer}>
        <View style={style.impression}>
          <FontAwesomeIcon icon={faHeart} color="#F35BAC" />
          <Text style={style.impressionText}>{props.likes}</Text>
        </View>
        <View style={style.impression}>
          <FontAwesomeIcon icon={faMessage} color="#5b7cf3" />
          <Text style={style.impressionText}>{props.comments}</Text>
        </View>
        <View style={style.impression}>
          <FontAwesomeIcon icon={faShareFromSquare} color="#30a85e" />
          <Text style={style.impressionText}>{props.comments}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
};

export default UserPost;
