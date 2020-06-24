import React from 'react';
import { View, Text, Button } from 'react-native';

import RoutePage from '~/study_navigation/router/RouteConfig'


export default class Page4Screen extends React.Component {

    static navigationOptions = {
        title: 'Page4',
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <>
                <Text>This is Page4 Screen</Text>

                <View style={{ height: 10 }} />

                <Button
                    title="Go to Home"
                    onPress={() => navigate(RoutePage.HOME)}
                />

                <View style={{ height: 10 }} />

                <Button
                    title="Go to Storage"
                    onPress={() => navigate(RoutePage.Storage)}
                />

                <View style={{ height: 10 }} />

                <Button
                    title="Go to News"
                    onPress={() => navigate(RoutePage.News)}
                />

                <View style={{ height: 10 }} />

                <Button
                    title="Go to Dimenssions"
                    onPress={() => navigate(RoutePage.Dimenssions)}
                />
            </>
        );
    }

}