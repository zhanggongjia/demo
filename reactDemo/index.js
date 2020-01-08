/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import Navigators from './navigators/Navigators';
import { createAppContainer } from 'react-navigation';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => createAppContainer(Navigators));
