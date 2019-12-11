import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
  } from 'react-native';
import { ListItem, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo';
  
// @setStatusBar({
//     barStyle: 'light-content',
//     translucent: true,
//     backgroundColor: 'transparent'
//   })
class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: '用户设置',
                    subList: [
                        {
                            name: 'Amy Farha',
                            icon: 'add-user',
                            subtitle: 'Vice President'
                        },
                        {
                            name: 'Chris Jackson',
                            icon: 'calendar',
                            subtitle: 'Vice Chairman'
                        },
                        {
                            name: 'Chris Jackson',
                            icon: 'creative-commons',
                            subtitle: 'Vice Chairman'
                        },
                        {
                            name: 'Chris Jackson',
                            icon: 'export',
                            subtitle: 'Vice Chairman'
                        },
                    ]
                },
                {
                    title: '基本设置',
                    subList: [
                        {
                            name: 'Amy Farha',
                            icon: 'add-user',
                            subtitle: 'Vice President'
                        },
                        {
                            name: 'Chris Jackson',
                            icon: 'calendar',
                            subtitle: 'Vice Chairman'
                        },
                    ]
                },
                {
                    title: '地址设置',
                    subList: [
                        {
                            name: 'Amy Farha',
                            icon: 'add-user',
                            subtitle: 'Vice President'
                        },
                        {
                            name: 'Chris Jackson',
                            icon: 'calendar',
                            subtitle: 'Vice Chairman'
                        },
                    ]
                }
            ]
        }
    }
    static navigationOptions = {
        title: '设置',
    };
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item, index }) => (
        <View
            key={index}
            style={index !== this.state.list.length - 1 ? styles.setBoxBorder : styles.setBox}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            {   
                item.subList.map((l, i) => (
                <ListItem
                    containerStyle={styles.listC}
                    key={i}
                    leftAvatar={
                        <View style={styles.navBarItem}>
                            <Icon name={l.icon} size={20} color="red"/>
                        </View>
                    }
                    rightIcon={
                        <Icon name='chevron-right' size={20} color="#000"/>
                    }
                    title={l.name}
                    subtitle={l.subtitle}/>
                ))
            }
        </View>
    )
    render() {
        return (
            <View>
                <Text style={styles.pageTitle}>设置</Text>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    listC: {
        backgroundColor: 'transparent',
    },
    setBoxBorder: {
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
        marginBottom: 30,
    },
    setBox: {
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
        marginBottom: 30,
    },
    pageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    navBarItem: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#fff'
    }
})

export default Setting;