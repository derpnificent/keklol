import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

import HomeScreen from './HomeScreen';
import Train from './Train';
import Schedule from './Schedule';

const SimpleApp = DrawerNavigator({
  Home: { screen: HomeScreen },
  Train: { screen: Train },
  Schedule: { screen: Schedule },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
