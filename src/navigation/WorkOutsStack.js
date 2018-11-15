import React from 'react';
import WorkOutsScreen from '../screens/WorkOutsScreen';
import { createStackNavigator } from 'react-navigation';

const WorkOutsStack = createStackNavigator({
    WorkOuts: {
        screen: WorkOutsScreen,
        navigationOptions: {
            title: 'WorkOutsScreen',
        }
    }
});

export default WorkOutsStack;