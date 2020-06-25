import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'


export default class Page3Screen extends React.Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.title : 'this page3',
            headerStyle: {
                ...navigationOptions.headerStyle,   // 防止覆盖defaultNavigationOptions.headerStyle
                backgroundColor: 'red',
            },
            headerTintColor: 'green',
        }
    };

    render() {
        const { navigation } = this.props;
        const { state, setParams } = navigation;
        const { params = {} } = state;

        const showText = params.mode === 'edit' ? '正在编辑' : '编辑完成';

        return (
            <View style={{ flex: 1, backgroundColor: "gray", }}>
                <Text>欢迎来到Page3</Text>
                <Text>{showText}</Text>
                <TextInput
                    onChangeText={text => {
                        setParams({ title: text })
                    }} />
                <Button
                    title="Go Back"
                    onPress={() => {
                        navigation.goBack();
                    }} />
            </View>
        )
    }

}