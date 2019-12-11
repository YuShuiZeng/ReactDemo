import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator,
  } from 'react-native';

import { Image, Text } from 'react-native-elements';
import CountTime from '~components/CountTime';
  

class LimitTime extends React.Component {
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
                    <Text h4>限时抢购</Text>
                    <View style={styles.countTime}>
                        <CountTime
                            hasUnit={false}
                            numberStyle={styles.number}
                            timeStamp={1000 * 65 * 20 * 20}/>
                    </View>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.sectionContainer}>
                    {
                        this.state.goodsList.map(item => {
                            return (
                                <View key={item.goodsId} style={styles.card}>
                                    <View style={styles.imgBox}>
                                        <Image source={{ uri: item.goodsImage }}
                                            PlaceholderContent={<ActivityIndicator />}
                                            style={styles.cardImg}/>
                                    </View>
                                    <Text style={styles.cardName} numberOfLines={2}>{item.goodsName}</Text>
                                    <View style={styles.cardPrice}>
                                        <Text style={styles.oldPrice}>￥{item.goodsOldPrice}</Text>
                                        <Text style={styles.newPrice}>￥{item.goodsNewPrice}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
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
        flexDirection: 'row',
    },
    card: {
        marginRight: 10,
        width: 150,
        borderRadius: 10,
    },
    cardName: {
        paddingVertical: 10,
    },
    imgBox: {
        width: 150,
        height: 100,
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardImg: {
        width: 150,
        height: 100,
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
    countTime: {
        marginLeft: 10,
    },
    number: {
        color: 'red',
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        width: 20,
        textAlign: 'center',
        lineHeight: 20,
    }
})

export default LimitTime;