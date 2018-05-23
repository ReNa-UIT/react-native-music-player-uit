import { AppRegistry, YellowBox } from 'react-native';
import Menu from './Menu';

AppRegistry.registerComponent('Player', () => Menu);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);