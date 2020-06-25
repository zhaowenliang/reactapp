import React from 'react';
import { ToastAndroid, Dimensions, ActivityIndicator } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

import { getMovies } from '~/api/Network';
import NewsItemType from './NewsItemType';


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const NEWS_ITEM_TYPE = {
    ITEM_TYPE_1: 1,
}

export default class NewsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.dataList = [];

        this.dataProvider = new DataProvider((r1, r2) => {
            return r1 != r2;
        });

        this.layoutProvider = new LayoutProvider(
            (index) => {
                return NEWS_ITEM_TYPE.ITEM_TYPE_1;
            },
            (type, dim) => {
                const { width } = this.state.dimensions.window;

                switch (type) {
                    case NEWS_ITEM_TYPE.ITEM_TYPE_1:
                        dim.width = width;
                        dim.height = 190;
                        break;

                    default:
                        break;
                }
            }
        )

        this.state = {
            dimensions: { window, screen },
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
                this.dataList = result;
                this.onDataSetChanged();
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

    // 渲染列表视图
    rowRenderer = (type, data) => {
        switch (type) {
            case NEWS_ITEM_TYPE.ITEM_TYPE_1:
                const { title } = data;

                return (
                    <NewsItemType
                        image="https://facebook.github.io/react/logo-og.png"
                        title={title}
                    />
                )

            default:
                break;
        }
    }

    // contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}

    render() {
        if (this.state.dataProvider.getSize() === 0) {
            return <ActivityIndicator />
        }

        return (
            <RecyclerListView
                dataProvider={this.state.dataProvider}
                layoutProvider={this.layoutProvider}
                rowRenderer={this.rowRenderer}
            />
        )
    }

}
