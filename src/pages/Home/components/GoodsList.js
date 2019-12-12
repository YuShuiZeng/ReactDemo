import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator,
  } from 'react-native';

import { Image, Text } from 'react-native-elements';

class GoodsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsList: [
                {
                    goodsId: '1',
                    goodsName: 'EURO DB几何个性镭射百搭女士包包',
                    goodsImage: 'https://image.sudian178.com/sd/goodsRealImg/20191205161734161169.jpg',
                    goodsOldPrice: 332.00,
                    goodsNewPrice: 33.00,
                    goodsTag:[
                        '限时抢购'
                    ],
                },
                {
                    goodsId: '2',
                    goodsName: 'HMILY/海谜璃 半高领毛衣男冬季加厚款针织衫秋季2019新款毛线衣HBF1506',
                    goodsImage: 'https://image.sudian178.com/sd/goodsRealImg/20191206092422538413.jpg',
                    goodsOldPrice: 492.00,
                    goodsNewPrice: 300.00,
                    goodsTag:[
                        '限时抢购'
                    ],
                },
                {
                    goodsId: '3',
                    goodsName: '百草味 坚果零食组合大礼包 480G（含夏威夷果碧根果）',
                    goodsImage: 'https://image.sudian178.com/sd/goodsRealImg/20190903223134703557.jpg',
                    goodsOldPrice: 120.00,
                    goodsNewPrice: 98.00,
                    goodsTag:[
                        '限时抢购'
                    ],
                },
                {
                    goodsId: '4',
                    goodsName: 'ILEVEN 薄皮核桃 300G/袋',
                    goodsImage: 'https://image.sudian178.com/sd/middleImg/20190507184406946.jpg',
                    goodsOldPrice: 32.00,
                    goodsNewPrice: 10.00,
                    goodsTag:[
                        '限时抢购'
                    ],
                }
            ]
        }
    }
    
    render() {
        return (
            <>
                <View style={styles.title}>
                    <Text h4>精品推荐</Text>
                </View>
                <View
                    style={styles.sectionContainer}>
                    {
                        this.state.goodsList.map(item => {
                            return (
                                <View key={item.goodsId} style={styles.card}>
                                    <View style={styles.imgBox}>
                                        <Image source={{ uri: item.goodsImage }}
                                            PlaceholderContent={<ActivityIndicator />}
                                            style={styles.cardImg}/>
                                    </View>
                                    <View style={styles.goodsInfo}>
                                        <Text style={styles.cardName} numberOfLines={2}>{item.goodsName}</Text>
                                        <View style={styles.cardBottom}>
                                            <View style={styles.cardPrice}>
                                                <Text style={styles.oldPrice}>￥{item.goodsOldPrice}</Text>
                                                <Text style={styles.newPrice}>￥{item.goodsNewPrice}</Text>
                                            </View>
                                            <Text style={styles.cardBtn}>立即购买</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        marginTop: 32,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionContainer: {
        marginTop: 10,
        paddingHorizontal: 16,
    },
    card: {
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    cardName: {
        // paddingVertical: 10,
    },
    imgBox: {
        width: 120,
        height: 120,
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardImg: {
        width: 120,
        height: 120,
    },
    goodsInfo: {
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    cardBottom: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    cardPrice: {
        flexDirection: 'row',
        alignItems: "center",
    },
    oldPrice: {
        fontSize: 14,
        color: '#ccc',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontSize: 18,
        marginLeft: 5,
        color: 'red'
    },
    cardBtn: {
        backgroundColor: 'red',
        color: '#fff',
        lineHeight: 28,
        paddingHorizontal: 10,
        borderRadius: 14,
    },
})

export default GoodsList;