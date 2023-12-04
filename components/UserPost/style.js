import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  postContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#EFF2F6',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    flexDirection: 'row',
  },
  profileTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  profileText: {
    fontSize: 16,
    fontFamily: getFontFamily({baseFont: 'Inter'}, {weight: '500'}),
  },
  profileSubText: {
    marginTop: 1,
    fontSize: 10,
    fontFamily: getFontFamily({baseFont: 'Inter'}, {weight: '400'}),
    color: '#79869F',
  },
  postButtonIco: {
    justifyContent: 'right',
    color: '#79869F',
  },
  postImageContainer: {
    marginTop: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#dedede',
    borderRadius: 15,
  },
  postImage: {
    objectFit: 'cover',
    borderRadius: 15,
    width: '100%',
    height: 320,
  },
  postCommentContainer: {
    marginTop: 10,
    marginLeft: 5,
  },
  postComment: {
    color: '#363636',
    fontSize: 12,
    fontFamily: getFontFamily({baseFont: 'Inter'}, {weight: '400'}),
  },
  impressionContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  impression: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  impressionText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#6a6a6a',
    fontFamily: getFontFamily({baseFont: 'Inter'}, {weight: '400'}),
  },
});

export default style;
