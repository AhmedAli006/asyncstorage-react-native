import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Todo() {
  const [list, setList] = useState<any>([]);
  const [text, setText] = useState<any>('');

  const add = async () => {
    setList([...list, {todo: text, isDone: false}]);
    setText('');

    const jsonList = JSON.stringify(list);
    await AsyncStorage.setItem('to-do-list', jsonList);
  };

  const del = async (i: number) => {
    list.splice(i, 1);
    setList([...list]);
    const jsonList = JSON.stringify(list);
    await AsyncStorage.setItem('to-do-list', jsonList);
  };

  const taskDone = async (i: number) => {
    const item = list[i];
    item.isDone = !item.isDone;
    setList([...list]);

    const jsonList = JSON.stringify(list);

    await AsyncStorage.setItem('to-do-list', jsonList);
  };
  useEffect(() => {
    async function getTodoList() {
      const jsonList = await AsyncStorage.getItem('to-do-list');
      const list = JSON.parse(jsonList!);
      setList(list);
    }

    getTodoList();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}>
          <TextInput
            value={text}
            onChangeText={e => setText(e)}
            style={styles.inp}
            placeholder="Enter Task ..."
          />

          <TouchableOpacity onPress={add} style={styles.btn}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
          <View>
            <ScrollView style={{height: 500}}>
              {list.map((x: any, i: number) => (
                <View
                  key={i}
                  style={{
                    borderWidth: 2,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    padding: 5,
                    marginVertical: 5,
                  }}>
                  <Text style={{padding: 5, fontSize: 20}}>{x.todo}</Text>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity
                      onPress={() => del(i)}
                      style={[
                        styles.btn,
                        {marginHorizontal: 10, paddingHorizontal: 30},
                      ]}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 20,
                          textAlign: 'center',
                        }}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => taskDone(i)}
                      style={{
                        backgroundColor: x.isDone ? 'green' : 'red',
                        borderRadius: 10,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        marginVertical: 10,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 20,
                          textAlign: 'center',
                        }}>
                        Done
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pera: {
    fontSize: 25,
    color: '#003566',
  },
  container: {
    height: '100%',
    backgroundColor: 'white',
  },

  inp: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#003566',
    padding: 10,
    fontSize: 20,
    borderRadius: 8,
  },
  body: {
    padding: 15,
    paddingVertical: 25,
  },
  btn: {
    backgroundColor: '#003566',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  px: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
});
