import React from 'react';
import {View, Image} from 'react-native';

export default function SecondBannerSlider({data}) {
  return (
    <View>
      <Image
        source={data.image}
        style={{height: 150, width: 200, borderRadius: 10}}
      />
    </View>
  );
}