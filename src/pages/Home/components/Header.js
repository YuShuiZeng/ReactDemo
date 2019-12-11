import React from 'react';
import {
    Avatar,
    SearchBar
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
        };
    }


    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        return (
            <View style={styles.sectionContainer} >
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>header</Text>
                    <Avatar
                        rounded
                        size="medium"
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        }}/>
                </View>
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
                <View style={styles.navBar}>
                    <View style={styles.navBarItem}><Icon name='twitter' size={30} color="#000"/></View>
                    <View style={styles.navBarItem}><Icon name='youko' size={30} color="#000"/></View>
                    <View style={styles.navBarItem}><Icon name='yelp' size={30} color="#000"/></View>
                    <View style={styles.navBarItem}><Icon name='sina-weibo' size={30} color="#000"/></View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: '#000',
        borderBottomRightRadius: 30,
        paddingHorizontal: 24,
        paddingBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginTop: 10,
    },
    userName: {
        fontSize: 26,
        color: '#fff',
    },
    searchCStyle: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 0,
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
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    navBarItem: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 4,
        backgroundColor: '#fff'
    }
})

export default Header;