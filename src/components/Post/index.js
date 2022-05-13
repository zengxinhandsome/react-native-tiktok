import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Video from 'react-native-video';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import style from './style';
import testVideo from '../../assets/test.mp4';
import avatarImg from '../../assets/avatar.jpeg';

const Post = () => {
  const [pause, setPause] = useState(false);

  const handlePress = () => {
    setPause(!pause);
  };

  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View>
          <Video
            style={style.video}
            source={testVideo}
            resizeMode='cover'
            paused={pause}
            repeat
            onError={e => console.log('video error', e)}
          />

          <View style={style.rightContainer}>
            <View>
              <Image source={avatarImg} style={style.avatarContainer} />
            </View>

            <View style={style.iconContainer}>
              <AntDesign name={'heart'} size={40} color='white' />
              <Text style={style.textUnderIcon}>12.1M</Text>
            </View>

            <View style={style.iconContainer}>
              <FontAwesome name={'commenting'} size={40} color='white' />
              <Text style={style.textUnderIcon}>12.1M</Text>
            </View>

            <View style={style.iconContainer}>
              <Fontisto name={'share-a'} size={35} color='white' />
              <Text style={style.textUnderIcon}>121.1k</Text>
            </View>
          </View>

          <View style={style.bottomContainer}>
            <Text style={style.bottomText}>@james_bond</Text>
            <Text style={style.bottomText}>hhhjhkhkh@james_bond</Text>
            <Text style={style.bottomText}>llkklklklklkl</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;

