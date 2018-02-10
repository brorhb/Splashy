import React, { Component } from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native'
import { Text, H1 } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: false,
    headerBackTitle: 'Back'
  }

  constructor () {
    super()
    this.state = {
      year: '',
      date: '',
      month: '',
      loading: true
    }
    this.getCurrentDay = this.getCurrentDay.bind(this)
  }

  getCurrentDay () {
    var d = new Date()
    var date = d.getDate().toString()
    var month = (d.getMonth() + 1).toString()
    var year = d.getFullYear().toString()
    this.setState({ date: date, month: month, year: year })
  }

  componentWillMount() {
    this.getCurrentDay()
    this.setState({ loading: false })
  }

  render () {
    var { year, date, month, loading } = this.state
    return (
      <SafeAreaView style={styles.container}>
      {loading
        ? <Text>loading</Text>
        : <ScrollView style={{paddingHorizontal: 8}}>
            <View style={{paddingBottom: 8}}>
              <Text note>{date}/{month}/{year}</Text>
              <H1>Today</H1>
            </View>

            <View style={styles.card}>
              <View style={styles.cardImgContainer}>
                <Image
                  style={styles.img}
                  source={require('../sample/img.jpg')}
                  height={300}
                  width={400}
                  resizeMode='cover'
                  resizeMethod='scale'/>
                </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>Author</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <MaterialCommunityIcons color={'#FF725C'} name="heart" size={16} />
                  <Text note style={styles.cardText}>Likes</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardImgContainer}>
                <Image
                  style={styles.img}
                  source={require('../sample/img2.jpg')}
                  height={300}
                  width={400}
                  resizeMode='cover'
                  resizeMethod='scale'/>
                </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>Author</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <MaterialCommunityIcons color={'#FF725C'} name="heart" size={16} />
                  <Text note style={styles.cardText}>Likes</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardImgContainer}>
                <Image
                  style={styles.img}
                  source={require('../sample/img3.jpg')}
                  height={300}
                  width={400}
                  resizeMode='cover'
                  resizeMethod='scale'/>
                </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>Author</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <MaterialCommunityIcons color={'#FF725C'} name="heart" size={16} />
                  <Text note style={styles.cardText}>Likes</Text>
                </View>
              </View>
            </View>

          </ScrollView>
      } 
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  card: {
    height: 300,
    marginVertical: 8,
    borderRadius: 16,
    shadowOffset:{ width: 0, height: 0, },
    shadowColor: '#333',
    shadowRadius: 8,
    shadowOpacity: 0.5
  },
  cardTextContainer: {
    position: 'absolute',
    padding: 8,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  cardText: {
    color: 'white'
  },
  img: {
    borderRadius: 0
  },
  cardImgContainer: {
    borderRadius: 16,
    overflow: 'hidden'
  }
})
