import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator  } from 'react-native';
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      isError: false
    };
  }

  // Mount User Method
  componentDidMount() {
    this.getGithubUser()
  }

  //   Get Api Users
  getGithubUser = async () => {
    try {
      const response = await Axios.get(`https://api.kawalcorona.com/indonesia/provinsi/`)
      this.setState({ isError: false, isLoading: false, data: response.data })
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    //  If load data
    if (this.state.isLoading) {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <ActivityIndicator size='large' color='red' />
        </View>
      )
    }
    // If data not fetch
    else if (this.state.isError) {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <Text>Terjadi Error Saat Memuat Data</Text>
        </View>
      )
    }
    // If data finish load
    return (
      <View style={{flex:1}}>
      <View style={{backgroundColor:'#494D5F',height:'37%'}}>
        <Text style={styles.text1}>Data Kasus COVID-19 di Indonesia</Text>
        <Text style={styles.text2}>Berdasarkan BPNB Indonesia</Text>
        <View style={styles.line1}></View>
        <View style={styles.line2}></View>
      </View>
      <FlatList
        data={this.state.data}
        renderItem={({ item }) =>
          <View style={styles.viewList}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', 
              {prov:item.attributes.Provinsi,fid: item.attributes.FID,
              kode:item.attributes.Kode_Provi,
              positif:item.attributes.Kasus_Posi,sembuh:item.attributes.Kasus_Semb,meninggal:item.attributes.Kasus_Meni})}>
              <Text style={styles.text3}>{item.attributes.Provinsi}</Text>
            </TouchableOpacity>
          </View>
        }
        keyExtractor={({ id }, index) => index.toString()}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewList: {
    height: 100,
    flexDirection: 'column',
    borderWidth: 0.25,
    borderColor: '#DDD',
    justifyContent: 'center',
    backgroundColor:'#2d3246',
  },
  Image: {
    width: 88,
    height: 80,
    borderRadius: 40
  },
  textItemLogin: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 16
  },
  textItemUrl: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 12,
    marginTop: 10,
    color: 'blue'
  },
  text1: {
    color:'white',
    marginTop:'22%',
    fontSize:20,
    marginHorizontal:'5%',
    fontWeight:'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10
  },
  text2: {
    color:'white',
    marginTop:'2%',
    fontSize: 14,
    marginHorizontal:'10%',
    fontStyle:'italic'
  },
  text3: {
    marginHorizontal:'6%',
    fontSize:20,
    color:'#e4dcf1'
  },
  line1: {
    borderBottomColor: '#e4dcf1',
    marginTop:'10%', 
    borderBottomWidth: 2,
    marginHorizontal:'5%',
    borderRadius:12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 4
  },
  line2: {
    borderBottomColor: '#e4dcf1',
    marginTop:'3%', 
    borderBottomWidth: 1,
    marginHorizontal:'14%',
    borderRadius:12
  }
})
