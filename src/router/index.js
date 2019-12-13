import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Car from '../pages/Car';
import Home from '../pages/Home';
import Message from '../pages/Message';
import Setting from '../pages/Setting';
import GoodsDetails from '../pages/GoodsDetails';

class IconWithBadge extends React.Component {
    render() {
        const { name, badgeCount, color, size } = this.props;
        return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
            <Icon name={name} size={size} color={color} />
            {badgeCount > 0 && (
                <View
                style={{
                    // /If you're using react-native < 0.57 overflow outside of the parent
                    // will not work on Android, see https://git.io/fhLJ8
                    position: 'absolute',
                    right: -6,
                    top: -3,
                    backgroundColor: 'red',
                    borderRadius: 6,
                    width: 12,
                    height: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                    {badgeCount}
                </Text>
                </View>
            )}
            </View>
        );
    }
}
  
const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Home') {
    //   iconName = `ios-navigate${focused ? '' : '-outline'}`;
      iconName = `home`;
      // We want to add badges to home tab icon
    } else if (routeName === 'Car') {
      iconName = 'shopping-cart';
    } else if (routeName === 'Message') {
        iconName = 'typing';
        IconComponent = HomeIconWithBadge;
    } else if (routeName === 'Setting') {
        iconName = 'cog';
    }
  
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
    },
    Car: {
        screen: Car,
    },
    Message: {
        screen: Message,
    },
    Setting: {
        screen: Setting,
    },
},{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    GoodsDetails: {
        screen: GoodsDetails,
        navigationOptions: {
            title: '商品详情'
        }
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
});

const appStack = createStackNavigator({
    bottomTabNavigator: {
        screen: TabNavigator,
        navigationOptions: {
            header: null,
        }
    },
    GoodsDetails: {
        screen: GoodsDetails
    },
    initialRouteName: 'bottomTabNavigator'
})
export default createAppContainer(appStack);