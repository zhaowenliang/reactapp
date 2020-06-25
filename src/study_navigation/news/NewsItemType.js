import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, StyleSheet } from 'react-native'

export default class NewsItemType extends React.Component {

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string.isRequired,
        imageHeight: PropTypes.number,
    }

    constructor(props) {
        super(props)
        this.state = {
            defaultImage: 'https://facebook.github.io/react/logo-og.png',
            defaultImageHeight: 160,
            defaultTitle: "今天天气好晴朗",
        }
    }

    render() {
        const {
            height = this.state.defaultImageHeight,
            image = this.state.defaultImage,
            title = this.state.defaultTitle,
        } = this.props;
        console.log('NewsItemType ->  height: ' + height + ' image: ' + image + ' title: ' + title);

        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: image }}
                    style={[styles.image, { height }]} />

                <Text style={styles.title}>{title}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
    },
    image: {
        width: '100%',
    },
    title: {
        fontSize: 16,
        margin: 4,
    }
})