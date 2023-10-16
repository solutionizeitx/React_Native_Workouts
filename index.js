/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Home from './src/home/Home';
import DropdownList from './src/accordionCustom/DropdownList';
// import AccordionPackage from './src/accordionCollapse/AccordionPackage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DropdownList);
