import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#aaa',
    position: 'relative'
  },
  video: {
    width: '100%',
    height: '100%'
  },
  // rightContainer 相关样式
  rightContainer: {
    position: 'absolute',
    right: 0,
    bottom: 200,
    alignItems: 'center'
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 28
  },
  iconContainer: {
    marginBottom: 18
  },
  textUnderIcon: {
    color: '#fff',
    marginTop: 6
  },

  // bottomContainer 相关样式

  bottomContainer: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 70,
    left: 20
  },
  bottomText: {
    color: '#fff',
    fontSize: 17,
    marginBottom: 18
  }
});

export default style;

