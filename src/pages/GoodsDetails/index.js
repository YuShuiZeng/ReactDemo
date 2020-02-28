import React from 'react';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    Dimensions,
  } from 'react-native';
import { Badge, Image } from 'react-native-elements'
  
const { width } = Dimensions.get('window');
const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}
class GoodsDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {
              goodsId: '1',
              goodsName: 'EURO DB几何个性镭射百搭女士包包',
              goodsImage: 'https://image.sudian178.com/sd/goodsRealImg/20191205161734161169.jpg',
              goodsOldPrice: 332.00,
              goodsNewPrice: 33.00,
              goodsTag:[
                  '限时抢购'
              ],
            },
        }
    }
    static navigationOptions = {
        title: '商品详情',
    };
    jump = () => {}

    render() {
        return (
          <View style={styles.box}>
            <ScrollView style={styles.scrollBox}>
              <View style={styles.imgBox}>
                  <Image source={{ uri: this.state.details.goodsImage }}
                    PlaceholderContent={<ActivityIndicator />}
                    style={styles.cardImg}/>
              </View>
              <View style={styles.priceInfo}>
                <View style={styles.price}>
                  <Text style={styles.priceNew}>￥787</Text>
                  <Text style={styles.priceOld}>￥909</Text>
                </View>
                <Text style={styles.sellDone}>已售888</Text>
              </View>
            </ScrollView>
            {/* <Text>{this.state.details.goodsName}</Text> */}
            <View style={styles.bottomBtn}>
              <View style={styles.btnLeft}>
                <Text style={styles.totalText}></Text>
              </View>
              <View style={styles.btnRight}>
                <Text style={styles.addCar}>加入购物车</Text>
                <Text style={styles.buyNow} onPress={this.jump}>立即购买</Text>
              </View>
            </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  scrollBox: {
    marginBottom: 50,
  },
  imgBox: {
    overflow: 'hidden',
  },
  cardImg: {
    width: width,
    height: width,
  },
  priceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sellDone: {
    fontSize: 14,
    color: '#ccc',
  },
  priceOld: {
    fontSize: 14,
    color: '#ccc',
    textDecorationLine: 'line-through',
  },
  priceNew: {
    fontSize: 18,
    color: 'red',
  },
  bottomBtn: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'space-between',
  },
  btnLeft: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  btnRight: {
    flexDirection: 'row',
  },
  addCar: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: '#fff',
  },
  buyNow: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'red',
    color: '#fff',
  }
})

export default GoodsDetails;