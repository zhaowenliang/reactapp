import React from 'react';
import { StyleSheet } from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';

import MyTabBar from './MyTabBar';
import HomeScreen from '~/study_navigation/HomeScreen';
import Page1Screen from '~/study_navigation/Page1Screen';
import Page2Screen from '~/study_navigation/Page2Screen';
import Page3Screen from '~/study_navigation/Page3Screen';


export default class ScrollableApp extends React.Component {

    static navigationOptions = {
        header: null,   // 主页无标题
    }

    constructor(props) {
        super(props)

        this.state = {
            tabNames: ['主页', '分类', '书籍', '我的'],
            tabIconNames: ['ios-home', 'ios-grid', 'ios-book', 'ios-contact'],
        }
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;

        return (
            <ScrollableTabView
                style={styles.container}
                renderTabBar={() => <MyTabBar tabNames={tabNames} tabIconNames={tabIconNames} />}
                tabBarPosition={'bottom'}
                locked={false}   // 是否可以滑动，true：不可以滑动，false：可以滑动，默认false。
                initialPage={0}  // 默认页索引
                prerenderingSiblingsNumber={1}  // 预渲染tab页个数，Infinity：预渲染所有，默认0。
                scrollWithoutAnimation={true}   // 切换tab是否不适用动画，true：不使用动画，false：使用动画，默认false。
                tabBarBackgroundColor='white'   // tabar背景颜色，通过props传入renderTabBar，使用props.backgroundColor取出。
                tabBarActiveTextColor='green'   // 激活状态tab文本颜色
            >

                <HomeScreen
                    tabLabel="page1"
                    navigation={this.props.navigation}
                />

                <Page1Screen
                    tabLabel="page2"
                    navigation={this.props.navigation}
                />

                <Page2Screen
                    tabLabel="page3"
                    navigation={this.props.navigation}
                />

                <Page3Screen
                    tabLabel="page4"
                    navigation={this.props.navigation}
                />

            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

})


/*

import { View } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';

                <View tabLabel="page1" style={styles.center}>
                    <Icon name="logo-github" size={50} />
                    <IconFont.Button name="github" backgroundColor="#FF3399" size={20}>
                        专为开发人员而设
                    </IconFont.Button>
                </View>

                <View tabLabel="page2" style={styles.center}>
                    <Icon name="logo-apple" size={50} />
                    <IconFont.Button name="apple" backgroundColor="#FF3399" size={20}>
                        在 Apple 上构建任何应用
                    </IconFont.Button>
                </View>

                <View tabLabel="page3" style={styles.center}>
                    <Icon name="logo-android" size={50}></Icon>
                    <IconFont.Button name="android" backgroundColor="#FF3399" size={20} >
                        在 android 上构建任何应用
                    </IconFont.Button>
                </View>

                <View tabLabel="page4" style={styles.center}>
                    <Icon name="logo-html5" size={50}></Icon>
                    <IconFont.Button name="html5" backgroundColor="#FF3399" size={20} >
                        在 html5 上构建任何应用
                    </IconFont.Button>
                </View>

*/