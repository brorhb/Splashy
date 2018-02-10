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
import Unsplash, { toJson } from 'unsplash-js/native'

const unsplash = new Unsplash({
  applicationId: 'ea2ba80d2ab325bf1b186466579b5859e560890f6ab977a8d9853cfa33abe497',
  secret: '0a8df389774ebf8879bef6486b8f4e35fbb4ffc2d153f6961f410fa3e051bc37',
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
})

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
      loading: true,
      data: {}
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
      unsplash.photos.listPhotos()
        .then(toJson)
        .then(json => {
          this.setState({data: json})
        })
        .then(() => {this.setState({loading: false})})
  }

  render () {
    var { year, date, month, loading, data } = this.state
    !loading ? console.log(data.map((item) => item)) : console.log('loading')
    return (
      <SafeAreaView style={styles.container}>
      {loading
        ? <Text>loading</Text>
        : <ScrollView style={{paddingHorizontal: 8}}>
            <View style={{paddingBottom: 8, paddingTop: 16}}>
              <Text note>{date}/{month}/{year}</Text>
              <H1>Today</H1>
            </View>

            { data.map((item) => (
              <View key={item.id} style={styles.card}>
                <View style={styles.cardImgContainer}>
                  <Image
                    style={styles.img}
                    source={{uri: item.urls.small}}
                    height={300}
                    width={400}
                    resizeMode='cover'
                    resizeMethod='resize'/>
                  </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardText}>{item.user.name}</Text>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <MaterialCommunityIcons color={'#FF725C'} name="heart" size={16} />
                    <Text note style={styles.cardText}>{item.likes}</Text>
                  </View>
                </View>
              </View>
            ))
            }

          </ScrollView>
      } 
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    shadowOpacity: 0.1
  },
  cardTextContainer: {
    position: 'absolute',
    padding: 16,
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
