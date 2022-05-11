import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import style from './style';
import testVideo from './test.mp4';

const Post = () => {
  const [pause, setPause] = useState(false);

  const handlePress = () => {
    setPause(!pause);
  };

  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Video
          style={style.video}
          source={testVideo}
          resizeMode='cover'
          paused={pause}
          repeat
          onError={e => console.log('video error', e)}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;

