import React from 'react';
import { ToastAndroid, Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

import { getMovies } from '~/api/Network';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const NEWS_ITEM_TYPE = {
    ITEM_TYPE_1: 1,
    ITEM_TYPE_2: 2,
}

export default class NewsScreen extends React.Component {

    state = {
        dimensions: { window, screen }
    };

    constructor(props) {
        super(props);

        this.dataList = [];

        this.dataProvider = new DataProvider((r1, r2) => {
            return r1 != r2;
        });

        this.state = {
            dataProvider: this.dataProvider.cloneWithRows(this.dataList),
        }
    }

    componentDidMount() {
        this.getData();
    }

    // 拉取数据
    getData = () => {
        getMovies()
            .then((result) => {
                this.setState({
                    dataList: result,
                });
            })
            .catch((error) => {
                console.log(error);
                ToastAndroid.show("数据加载失败", ToastAndroid.SHORT);
            });
    }

    // 列表刷新
    onDataSetChanged = () => {
        this.setState({
            dataProvider: this.dataProvider.cloneWithRows(this.dataList),
        })
    }

    // 计算item宽高
    _layoutProvider = new LayoutProvider(
        // 配置item类型
        (index) => {
            if (index % 3 === 0) {
                return NEWS_ITEM_TYPE.ITEM_TYPE_1;
            } else {
                return NEWS_ITEM_TYPE.ITEM_TYPE_2;
            }
        },
        // 计算item宽高
        (type, dim, index) => {
            switch (type) {
                case NEWS_ITEM_TYPE.ITEM_TYPE_1:

                    break;

                case NEWS_ITEM_TYPE.ITEM_TYPE_2:

                    break;

                default:
                    break;
            }
        }
    )

    // 渲染列表视图
    _rowRenderer = (type, data, index) => {

    }

    render() {
        return (
            <>
                <RecyclerListView
                    dataProvider={this.state.dataProvider}
                    rowRenderer={this._rowRenderer}
                    layoutProvider={this._layoutProvider}
                />
            </>
        )
    }

}
