import React from 'react';
import {
    StyleSheet,
    StatusBar,
    ScrollView,
    View,
    Animated,
  } from 'react-native';
import {
    Avatar,
    SearchBar,
    Text
  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Header from './components/Header';
import LimitTime from './components/LimitTime';
import GoodsList from './components/GoodsList';
import StickyHeader from '~components/topBar';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalVisible: false,
            scrollY: new Animated.Value(0),
            headHeight: -1,
            search: '',
            scrollHeight: 0,
        };
    }
    static navigationOptions = {
        title: '首页',
    };
    scrollHandle = (e) => {
        // alert(e.nativeEvent.contentOffset.x)
    }
    updateSearch = search => {
        alert(JSON.stringify(this.state.scrollY))
        this.setState({ search });
    };
    render() {
        return (
            <Animated.ScrollView 
                style={{ flex: 1 }}
                onScroll={
                    Animated.event(
                    [{
                        nativeEvent: { contentOffset: { y: this.state.scrollY } } // 记录滑动距离
                    }],
                    {
                        useNativeDriver: true,
                        listener: event => {
                            const scrollHeight = event.nativeEvent.contentOffset.y
                            this.setState({ scrollHeight });
                            // do something special
                        },
                    }) // 使用原生动画驱动
                }
                scrollEventThrottle={1}
                >
                <StatusBar translucent={false} backgroundColor='#000' barStyle="light-content" />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>header</Text>
                    <Avatar
                        rounded
                        onPress={() => {this.props.navigation.openDrawer()}}
                        size="medium"
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        }}/>
                </View>
                <StickyHeader
                    stickyHeaderY={this.state.headHeight} // 把头部高度传入
                    stickyScrollY={this.state.scrollY}  // 把滑动距离传入
                    >
                    <SearchBar
                        placeholder="Type Here..."
                        round
                        lightTheme
                        placeholderTextColor="#fff"
                        searchIcon={styles.searchLStyle}
                        containerStyle={styles.searchCStyle}
                        inputContainerStyle={styles.searchIStyle}
                        inputStyle={styles.searchTStyle}
                        onChangeText={this.updateSearch}
                        value={this.state.search}/>
                </StickyHeader>
                <View style={styles.navBar}>
                    <View style={styles.navBarItem}><Icon name='twitter' size={30} color="#000"/></View>
                    <View style={styles.navBarItem}><Icon name='youko' size={30} color="#000"/></View>
                    <View style={styles.navBarItem}><Icon name='yelp' size={30} color="#000"/></View>
                    <View style={styles.navBarItem}><Icon name='sina-weibo' size={30} color="#000"/></View>
                </View>
                <LimitTime goDetail={(val) => {
                    const { navigate } = this.props.navigation;
                    navigate('GoodsDetails');
                }}/>
                <GoodsList goDetail={(val) => {
                    const { navigate } = this.props.navigation;
                    navigate('GoodsDetails');
                }}/>
            </Animated.ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#000',
    },
    userName: {
        fontSize: 26,
        color: '#fff',
    },
    searchCStyle: {
        backgroundColor: '#000',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 20,
        flex: 1,
    },
    searchLStyle: {
        color: "#fff"
    }, 
    searchIStyle: {
        backgroundColor: 'rgba(255,255,255, .6)',
        height: 35,
    },
    searchTStyle: {
        fontSize: 14,
        color: '#fff',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
        backgroundColor: '#000',
        borderBottomRightRadius: 30,
    },
    navBarItem: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 4,
        backgroundColor: '#fff'
    },
})

export default Home;