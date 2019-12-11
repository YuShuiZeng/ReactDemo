import React, { PropTypes } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
  } from 'react-native';
import { ListItem, Avatar, Badge } from 'react-native-elements'
  

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                  name: 'Amy Farha',
                  value: 0,
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  subtitle: 'Vice President'
                },
                {
                  name: 'Chris Jackson',
                  value: 3,
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
                },
            ]
        }
    }
    static navigationOptions = {
        title: '消息',
    };
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={
              <View style={styles.listTitle}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>昨天</Text>
              </View>
            }
            subtitle={
              <Text numberOfLines={1}>{item.subtitle}</Text>
            }
            containerStyle={styles.listC}
            contentContainerStyle={styles.rightC}
            leftElement={
              <View>
                <Avatar rounded source={{ uri: item.avatar_url }} size="medium"/>
                {
                  item.value > 0 ? <Badge
                    value={item.value}
                    badgeStyle={{ backgroundColor: 'red'}}
                    textStyle={{ color: '#fff'}}
                    containerStyle={styles.pointC}
                   /> : <></>
                }
                
              </View>
            }
            // bottomDivider
        />
    )
    render() {
        return (
          <View>
            <Text style={styles.pageTitle}>消息</Text>
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.list}
                renderItem={this.renderItem}/>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
    textAlign: 'center',
  },
  listC: {
    paddingLeft: 20,
    paddingRight: 0,
    paddingVertical: 0,
  },
  listTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pointC: {
    position: 'absolute',
    top: -2,
    left: 40,
  },
  rightC: {
    height: 80,
    paddingVertical: 15,
    paddingRight: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#ccc',
  }
})

export default Message;