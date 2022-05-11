import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#aaa'
  },
  video: {
    width: '100%',
    height: '100%'
  }
});

export default style;

