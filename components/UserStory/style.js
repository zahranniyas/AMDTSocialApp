import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  storyContainer: {
    margin: 10,
    alignItems: 'center',
  },

  storyText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: getFontFamily({baseFont: 'Inter'}, {weight: '500'}),
    color: '#022150',
  },
});

export default style;
