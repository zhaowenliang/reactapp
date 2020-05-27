import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

const GET_MOVIES_URL = 'https://facebook.github.io/react-native/movies.json';

const GET_MOVIES_INIT = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // body: JSON.stringify({
  //   firstParam: 'yourValue',
  //   secondParam: 'yourOtherValue',
  // }),
};

// function getMoviesFromApiAsync() {
//   return fetch(GET_MOVIES_URL, GET_MOVIES_INIT);
//
//   // return responsePromise
//   //   .then(response => response.json())
//   //   .then(responseJson => {
//   //     return responseJson.movies;
//   //   })
//   //   .catch(error => {
//   //     console.log(error);
//   //   });
// }

async function getMoviesFromApi() {
  try {
    const response = await fetch(GET_MOVIES_URL, GET_MOVIES_INIT);
    const responseJson = await response.json();
    console.log(`获取电影信息: ${JSON.stringify(responseJson)}`);

    return responseJson.movies;
  } catch (e) {
    console.error(e);
  }
}

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    // 获取数据，更新state，数据更新驱动UI更新。
    getMoviesFromApi()
      .then(movies => {
        this.setState({
          isLoading: false,
          dataSource: movies,
        }, function () {
          console.log('state更新结束');
        });
      });
  }

  // componentDidMount() {
  //   return getMoviesFromApiAsync()
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       // 改变数据，驱动UI更新。
  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson.movies,
  //       }, function () {
  //         console.log('11111111111');
  //       });
  //     })
  //     .catch(error => console.error(error));
  // }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <>
              <Text>{item.id}</Text>
              <Text>{item.title}, {item.releaseYear}</Text>
            </>
          )}/>
      </View>
    );
  }
};

/*
    renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
    或
    renderItem={({ item }) => (
            <>
              <Text>{item.title}, {item.releaseYear}</Text>
              <Text>{item.id}</Text>
            </>
          )}/>
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
