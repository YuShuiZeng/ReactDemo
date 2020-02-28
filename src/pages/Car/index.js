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
            allChecked: false,
            list: [
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
            ]
        }
    }
    static navigationOptions = {
        title: '购物车',
    };
    onPress = () => {}
    checkItem = (g_id) => {
        const i = this.state.list.findIndex(el => el.goodsId === g_id)
        if (i >= 0) {
            this.state.list[i].checked = !this.state.list[i].checked
            const allCheck = this.state.list.some(el => !el.checked)
            // this.state.list[i].checked = !allCheck
            this.setState({
                allChecked: !allCheck,
                list: [...this.state.list]
            })
        }
    }
    checkStore = (check) => {
        this.state.list.map(el => {
            el.checked = !check
            return el
        })
        this.setState({
            allChecked: !check,
            list: [...this.state.list]
        })
    }
    totalPrice = () => {
        let sum = 0
        this.state.list.forEach(cur => {
            if (cur.checked) {
                sum += cur.goodsNewPrice
            }
        })
        return sum
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <View style={styles.carList} key={item.goodsId}>
            <CheckBox
                checked={item.checked}
                checkedColor="#000"
                onIconPress={() => this.checkItem(item.goodsId)}
                containerStyle={styles.checkC}/>
            <View style={styles.goodInfo}>
                <View style={styles.imageView}>
                    <Image
                    source={{ uri: item.goodsImage }}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />}/>
                </View>
                <View style={styles.goodInfoText}>
                    <View style={styles.goodNameBox}>
                        <Text style={styles.goodName} numberOfLines={2}>{item.goodsName}</Text>
                        <Icon name='delete' size={20} color="#ccc"/>
                    </View>
                    <Text style={styles.oldPrice}>￥{item.goodsOldPrice}</Text>
                    <View style={styles.priceNum}>
                        <Text style={styles.newPrice}>￥{item.goodsNewPrice}</Text>
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
    )
    jump = () => {
        const { navigate } = this.props.navigation;
        navigate('GoodsDetails');
    }

    render() {
        const { allChecked } = this.state
        return (
            <View style={styles.carContain}>
                <Text style={styles.pageTitle}>购物车</Text>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}/>
                <View style={styles.bottomBtn}>
                    <View style={styles.checkedAll}>
                        <CheckBox
                            checkedColor="#000"
                            checked={allChecked}
                            onIconPress={() => this.checkStore(allChecked)}
                            containerStyle={styles.checkC}/>
                        <Text>全选</Text>
                    </View>
                    <View style={styles.totalBox}>
                        <Text style={styles.totalText}>合计金额：</Text>
                        <Text style={styles.totalPrice}>￥{this.totalPrice()}</Text>
                        <Text style={styles.buyBtn} onPress={this.jump}>结算（22）</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    carContain: {
        flex: 1,
        // backgroundColor: 'green',
    },
    pageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5,
        textAlign: 'center',
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
    bottomBtn: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    checkedAll: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    totalBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        paddingRight: 20,
    },
    buyBtn: {
        paddingVertical: 22,
        paddingHorizontal: 20,
        backgroundColor: 'red',
        fontWeight: 'bold',
        color: '#fff',
    }
})

export default Car;