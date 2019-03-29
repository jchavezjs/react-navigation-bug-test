import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

const Tab1 = () => (
  <View>
    <Text>Tab 1</Text>
  </View>
);

const Tab2 = () => (
  <View>
    <Text>Tab 2</Text>
  </View>
);

const Tab3 = () => (
  <View>
    <Text>Tab 3</Text>
  </View>
);

const Navigator = createAppContainer(createMaterialTopTabNavigator(
  {
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        title: 'Tab1',
      },
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        title: 'Tab2',
      },
    },
    Tab3: {
      screen: Tab3,
      navigationOptions: {
        title: 'Tab3',
      },
    },
  },
  {
    initialRouteName: 'Tab2',
  }
));

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
