import React from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';


class CountTime extends React.Component {
    constructor(props) {
        super(props);
        this._interval = this._second = 1000;
        this._minute = 60 * this._second;
        this._hour = 60 * this._minute;
        this._day = 24 * this._hour;
        this.leadingZero = true;
        this.timeout = null
        this.state = {
            count: props.timeStamp
        }
        this.start()
    }
    timeFommat(time) {
        // alert(time)
        const day = this.preprocess(Math.floor(time / this._day));
        const hour = this.preprocess(Math.floor(time % this._day / this._hour), 2)
        const minute = this.preprocess(Math.floor(time % this._hour / this._minute), 2)
        const second = this.preprocess(Math.floor(time % this._minute / this._second), 2)
        return (
            <View>
                {
                    this.props.hasUnit ?
                        <View style={styles.timeContain}>
                            {
                                day > 0 ? <Text style={this.props.numberStyle}>{day}</Text> : <></>
                            }
                            {
                                day > 0 ? <Text style={this.props.unitStyle}>天</Text> : <></>
                            }
                            <Text style={this.props.numberStyle}>{hour}</Text>
                            <Text style={this.props.unitStyle}>小时</Text>
                            <Text style={this.props.numberStyle}>{minute}</Text>
                            <Text style={this.props.unitStyle}>分钟</Text>
                            <Text style={this.props.numberStyle}>{second}</Text>
                            <Text style={this.props.unitStyle}>秒</Text>
                        </View>
                        : 
                        <View style={styles.timeContain}>
                            {
                                day > 0 ? <Text style={this.props.numberStyle}>{day}</Text> : <></>
                            }
                            {
                                day > 0 ? <Text style={styles.point}>:</Text> : <></>
                            }
                            <Text style={this.props.numberStyle}>{hour}</Text>
                            <Text style={styles.point}>:</Text>
                            <Text style={this.props.numberStyle}>{minute}</Text>
                            <Text style={styles.point}>:</Text>
                            <Text style={this.props.numberStyle}>{second}</Text>
                        </View>
                }
                
            </View>
        )
    }
    preprocess(value, num) {
        return this.leadingZero && value < 10 && num === 2 ? '0' + value : value;
    }
    start() {
        this.timeout = setInterval(() => {
            if (this.state.count > 0) {
                this.setState({
                    count: this.state.count - this._interval
                });
            } else {
                this.stop()
            }
        }, this._interval);
    }
    stop() {
        this.setState({
            count: 0
        });
        this.timeout && clearInterval(this.timeout);
        this.timeout = null
    }
    render() {
        return (
            <View>
                {this.timeFommat(this.state.count)}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'red',
    },
    timeContain: {
        flexDirection: 'row',
    },
    point: {
        paddingHorizontal: 5,
    }
})

export default CountTime;