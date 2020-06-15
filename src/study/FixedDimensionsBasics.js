import React, { Component } from 'react';
import { View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      /*<View>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}/>
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}/>
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }}/>
      </View>*/

      /*
       * flexDirection：主轴排列方向。
       *
       * justifyContent: 主轴排列方式。
       * alignItems：次轴排列方式，次轴为与主轴垂直的轴。要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸
       * */
      <>
        <View style={{
          flexDirection: 'column',   /* 主轴方向：竖直方向 */
          justifyContent: 'flex-start',  /* 主轴排列方式：居中 */
          alignItems: 'flex-start',     /* 次轴排列方式 */
        }}>
          <View style={{
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
            alignSelf: 'center',    /* 覆盖alignItems，设置只影响子元素自身的次轴排列方式 */
          }}/>
          <View style={{
            width: 50,
            height: 50,
            backgroundColor: 'skyblue',
          }}/>
          <View style={{
            height: 50,
            backgroundColor: 'steelblue',
            alignSelf: 'stretch',
          }}/>
        </View>

        <View style={{
          marginTop: 10,
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          flex: 1,
          flexDirection: 'row',             /* 主轴方向 */
          justifyContent: 'flex-start',     /* 主轴排列方式 */
          alignItems: 'flex-start',         /* 次轴排列方式 */
          flexWrap: 'wrap',                 /* 主轴多行根据屏幕自适应换行方式，默认不换行。 */
          alignContent: 'flex-start',       /* 主轴换行后产生多轴线，设置多轴线的对齐方式。 */
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}/>
          <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}/>
          <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }}/>
          <View style={{ width: 150, height: 150, backgroundColor: 'green' }}/>
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}/>
        </View>
      </>
    );
  }
}
