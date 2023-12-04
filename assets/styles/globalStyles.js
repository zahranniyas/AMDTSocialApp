import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  headView: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  msgButtonBg: {
    padding: 10,
    backgroundColor: '#f9fafb',
    borderRadius: 50,
    flexDirection: 'column',
  },

  msgButtonCount: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 5,
    top: 7,
  },

  msgButtonCountNum: {
    color: '#fff',
    fontSize: 6,
    fontFamily: getFontFamily({baseFont: 'Inter'}, {weight: '600'}),
  },

  msgButtonIco: {
    color: '#898DAE',
  },

  userStoryContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default globalStyle;
