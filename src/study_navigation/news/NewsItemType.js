import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';

export default class NewsItemType extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageHeight: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      defaultImage: 'https://facebook.github.io/react/logo-og.png',
      defaultImageHeight: 160,
      defaultTitle: '今天天气好晴朗',
    };
  }

  onPressItem = () => {
    const { title } = this.props;
    ToastAndroid.show(title, ToastAndroid.SHORT);
  };

  render() {
    const {
      height = this.state.defaultImageHeight,
      image = this.state.defaultImage,
      title = this.state.defaultTitle,
      style,
    } = this.props;

    return (
      <TouchableOpacity style={[styles.container, { ...style }]} activeOpacity={0.8} onPress={this.onPressItem}>
        <Image source={{ uri: image }} style={[styles.image, { height }]} />

        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 10,
  },
  image: {
    width: '100%',
  },
  title: {
    fontSize: 16,
    margin: 4,
  },
});
