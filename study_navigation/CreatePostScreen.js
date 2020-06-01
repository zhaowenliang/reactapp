import * as React from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from './styles/study_styles';

export default function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <View style={styles.button}>
        <Button
          title="update the title"
          onPress={() => navigation.setOptions({ title: 'Update!' })}/>
      </View>

      <TextInput
        multiline
        placeholder="What's on you mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}/>

      <View style={styles.button}>
        <Button
          title="Done"
          onPress={() => {
            navigation.navigate('Home', { post: postText });
          }}/>
      </View>
    </>
  );
}
