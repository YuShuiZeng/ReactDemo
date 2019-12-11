import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
  } from 'react-native';
import { ListItem, Text, Image, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: '保税仓',
                    storeId: '88',
                    checked: false,
                    subList: [
                        {
                            goodsId: '1',
                            goodsName: 'EURO DB几何个性镭射百搭女士包包',
                            goodsImage: 'https://image.sudian178.com/sd/goodsRealImg/20191205161734161169.jpg',
                            goodsOldPrice: 332.00,
                            goodsNewPrice: 33.00,
                            checked: false,
                        },
                        {
                            goodsId: '2',
                            goodsName: 'EURO DB几何个性镭射百搭女士包包',
                            goodsImage: 'https://image.sudian178.com/sd/goodsRealImg/20191205161734161169.jpg',
                            goodsOldPrice: 332.00,
                            goodsNewPrice: 33.00,
                            checked: true,
                        },
                        {
                            goodsId: '3',
                            goodsName: 'EURO DB几何个性镭射百搭女士包包',
                            goodsImage: 'https://image.sudian178.com/sd/goodsRealImg/20191205161734161169.jpg',
                            goodsOldPrice: 332.00,
                            goodsNewPrice: 33.00,
                            checked: false,
                        },
                        {
                            goodsId: '4',
                            goodsName: 'EURO DB几何个性镭射百搭女士包包',
                            goodsImage: 'https://image.sudian178.com/sd/goodsRealImg/20191205161734161169.jpg',
                            goodsOldPrice: 332.00,
                            goodsNewPrice: 33.00,
                            checked: false,
                        },
                        {
                            goodsId: '5',
                            goodsName: 'EURO DB几何个性镭射百搭女士包包',
                            goodsImage: 'https://image.sudian178.com/sd/goodsRealImg/20191205161734161169.jpg',
                            goodsOldPrice: 332.00,
                            goodsNewPrice: 33.00,
                            checked: false,
                        },
                    ]
                },
            ]
        }
    }
    static navigationOptions = {
        title: '购物车',
    };
    onPress = () => {}
    checkItem = (s_id, g_id) => {
        const i = this.state.list.findIndex(el => el.storeId === s_id)
        if (i >= 0) {
            const j = this.state.list[i].subList.findIndex(el => el.goodsId === g_id)
            if (j >= 0) {
                this.state.list[i].subList[j].checked = !this.state.list[i].subList[j].checked
                const allCheck = this.state.list[i].subList.some(el => !el.checked)
                this.state.list[i].checked = !allCheck
                this.setState({
                    list: [...this.state.list]
                })
            }
        }
    }
    checkStore = (check, s_id) => {
        const i = this.state.list.findIndex(el => el.storeId === s_id)
        this.state.list[i].checked = !check
        this.state.list[i].subList.map(el => {
            el.checked = !check
            return el
        })
        this.setState({
            list: [...this.state.list]
        })
    }
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <View
            key={item.storeId}
            style={styles.carBox}>
            <View style={styles.storeName}>
                <CheckBox
                    checkedColor="#000"
                    checked={item.checked}
                    onIconPress={() => this.checkStore(item.checked, item.storeId)}
                    containerStyle={styles.checkC}/>
                <Text style={styles.sectionTitle}>{item.title}</Text>
            </View>
            {   
                item.subList.map((l, i) => (
                <View style={styles.carList}>
                    <CheckBox
                        checked={l.checked}
                        checkedColor="#000"
                        onIconPress={() => this.checkItem(item.storeId, l.goodsId)}
                        containerStyle={styles.checkC}/>
                    <View style={styles.goodInfo}>
                        <View style={styles.imageView}>
                            <Image
                            source={{ uri: l.goodsImage }}
                            style={styles.image}
                            PlaceholderContent={<ActivityIndicator />}/>
                        </View>
                        <View style={styles.goodInfoText}>
                            <View style={styles.goodNameBox}>
                                <Text style={styles.goodName} numberOfLines={2}>{l.goodsName}</Text>
                                <Icon name='delete' size={20} color="#ccc"/>
                            </View>
                            <Text style={styles.oldPrice}>￥{l.goodsOldPrice}</Text>
                            <View style={styles.priceNum}>
                                <Text style={styles.newPrice}>￥{l.goodsNewPrice}</Text>
                                <View style={styles.goodNumChange}>
                                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                                    <Icon name='minus' size={12} color="#fff"/>
                                </TouchableOpacity>
                                <Text style={styles.goodNum}>0</Text>
                                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                                    <Icon name='plus' size={12} color="#fff"/>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                ))
            }
        </View>
    )
    render() {
        return (
            <View>
                <Text style={styles.pageTitle}>购物车</Text>
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
    carBox: {
        marginBottom: 100,
    },
    storeName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    carList: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingRight: 10,
        alignItems: 'flex-start',
    },
    checkC: {
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    goodInfo: {
        flexDirection: 'row',
        flex: 1,
    },
    imageView: {
        width: 100,
        height: 100,
        borderRadius: 10,
        overflow:'hidden',
    },
    image: {
        width: 100,
        height: 100,
    },
    goodInfoText: {
        marginLeft: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    goodNameBox: {
        flexDirection: 'row',
    },
    goodName: {
        paddingRight: 10,
        flex: 1,
        fontWeight: 'bold'
    },
    priceNum: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    oldPrice: {
        fontSize: 14,
        color: '#ccc',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontSize: 18,
        color: 'red'
    },
    goodNumChange: {
        flexDirection: 'row',
    },
    goodNum: {
        width: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 4,
    },
})

export default Car;