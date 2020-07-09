import React from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '当某行滑出渲染区域之外后，其内部状态将不会保留。请确保你在行组件以外的地方保留了数据。',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '但在本文档中没有列出。此外还有下面这些需要注意的事项',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-1',
    title: '但在本文档中没有列出。此外还有下面这些需要注意的事项',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-2',
    title: '但在本文档中没有列出。此外还有下面这些需要注意的事项',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-3',
    title: '完全跨平台。',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-4',
    title: '模式',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-5',
    title: '行组件显示或隐藏时可配置回调事件。',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-6',
    title: '支持单独的头部组件。',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-7',
    title: '支持单独的尾部组件。',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-8',
    title: '支持自定义行间分隔线。',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title:
      '为了优化内存占用同时保持滑动的流畅，列表内容会在屏幕外异步绘制。这意味着如果用户滑动的速度超过渲染的速度，则会先看到空白的内容。这是为了优化不得不作出的妥协，你可以根据自己的需求调整相应的参数，而我们也在设法持续改进。',
  },
];

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Item = ({ id, title, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[styles.item, { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' }]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [selected, setSelected] = React.useState(new Map());
  const [refreshing, setRefreshing] = React.useState(false);

  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }) => (
    <Item id={item.id} title={item.title} selected={!!selected.get(item.id)} onSelect={onSelect} />
  );

  /*分割线*/
  const separatorComponent = () => {
    return <View style={{ height: 1, backgroundColor: 'red' }} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        ItemSeparatorComponent={separatorComponent}
        keyExtractor={(item) => item.id}
        extraData={selected}
        numColumns={2}
        columnWrapperStyle={styles.row}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  row: {
    flexWrap: 'wrap',
  },
});

export default App;
