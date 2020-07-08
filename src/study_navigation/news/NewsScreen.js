import React from 'react';
import { ToastAndroid, Dimensions, ActivityIndicator, StyleSheet } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

import { getWanBanner } from '~/api/Network';
import NewsItemType from './NewsItemType';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const NEWS_ITEM_TYPE = {
  ITEM_TYPE_1: 1,
  ITEM_TYPE_2: 2,
  ITEM_TYPE_3: 3,
};

export default class NewsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.dataList = [];

    this.dataProvider = new DataProvider((r1, r2) => {
      return r1 != r2;
    });

    this.layoutProvider = new LayoutProvider(
      (index) => {
        if (index % 3 === 1) {
          return NEWS_ITEM_TYPE.ITEM_TYPE_2;
        } else if (index % 3 === 2) {
          return NEWS_ITEM_TYPE.ITEM_TYPE_3;
        } else {
          return NEWS_ITEM_TYPE.ITEM_TYPE_1;
        }
      },
      (type, dim) => {
        const { width } = this.state.dimensions.window;

        switch (type) {
          case NEWS_ITEM_TYPE.ITEM_TYPE_1:
            dim.width = width;
            dim.height = 10 + 20 + 160 + 20 + 4 * 2;
            break;

          case NEWS_ITEM_TYPE.ITEM_TYPE_2:
            dim.width = width / 2;
            dim.height = 10 + 20 + 160 + 20 + 4 * 2;
            break;

          case NEWS_ITEM_TYPE.ITEM_TYPE_3:
            dim.width = width / 2;
            dim.height = 10 + 20 + 160 + 20 + 4 * 2;
            break;

          default:
            dim.width = 0;
            dim.height = 0;
            break;
        }
      }
    );

    this.state = {
      dimensions: { window, screen },
      dataProvider: this.dataProvider.cloneWithRows(this.dataList),
    };
  }

  componentDidMount() {
    this.getData();
  }

  // 拉取数据
  getData = () => {
    getWanBanner()
      .then((result) => {
        this.dataList = result;
        this.onDataSetChanged();
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show('数据加载失败', ToastAndroid.SHORT);
      });
  };

  // 列表刷新
  onDataSetChanged = () => {
    this.setState({
      dataProvider: this.dataProvider.cloneWithRows(this.dataList),
    });
  };

  // 渲染列表视图
  rowRenderer = (type, data) => {
    switch (type) {
      case NEWS_ITEM_TYPE.ITEM_TYPE_1:
        let { title: title1, imagePath: imagePath1 } = data;

        return <NewsItemType style={styles.itemType1} image={imagePath1} title={title1} />;

      case NEWS_ITEM_TYPE.ITEM_TYPE_2:
        const { title: title2, imagePath: imagePath2 } = data;

        return <NewsItemType style={styles.itemType2} image={imagePath2} title={title2} />;

      case NEWS_ITEM_TYPE.ITEM_TYPE_3:
        const { title: title3, imagePath: imagePath3 } = data;

        return <NewsItemType style={styles.itemType3} image={imagePath3} title={title3} />;

      default:
        break;
    }
  };

  render() {
    if (this.state.dataProvider.getSize() === 0) {
      return <ActivityIndicator />;
    }

    return (
      <RecyclerListView
        style={{ backgroundColor: '#EDEDF2' }}
        dataProvider={this.state.dataProvider}
        layoutProvider={this.layoutProvider}
        rowRenderer={this.rowRenderer}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemType1: {
    marginStart: 12,
    marginEnd: 12,
    marginTop: 5,
    marginBottom: 5,
  },
  itemType2: {
    marginStart: 12,
    marginEnd: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  itemType3: {
    marginStart: 5,
    marginEnd: 12,
    marginTop: 5,
    marginBottom: 5,
  },
});
