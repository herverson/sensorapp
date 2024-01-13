import React from 'react';
import { TabBar } from 'react-native-tab-view';

const CustomTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: 'blue' }}
  />
);

export default CustomTabBar;
