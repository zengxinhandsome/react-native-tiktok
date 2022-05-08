import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';
import style from './style';

const Post = () => {
  return (
    <View style={style.container}>
      <Video source={{ uri: '' }} />
    </View>
  );
};

export default Post;

