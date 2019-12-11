import React from 'react';
import {
    StyleSheet,
    StatusBar,
    ScrollView
  } from 'react-native';
import Header from './components/Header';
import LimitTime from './components/LimitTime';
import GoodsList from './components/GoodsList';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalVisible: false,
        };
    }
    static navigationOptions = {
        title: '首页',
    };
    scrollHandle = (e) => {
        alert(e.nativeEvent.contentOffset.x)
    }
    render() {
        return (
            <ScrollView
                style={styles.sectionContainer}
                onScroll={this.scrollHandle}
                scrollEventThrottle = {200}
                showsVerticalScrollIndicator={false}>
                <StatusBar translucent={false} backgroundColor='#000' barStyle="light-content" />
                <Header/>
                <LimitTime/>
                <GoodsList/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: '#fff',
        borderBottomColor: '#fff',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'red',
    },
})

export default Home;