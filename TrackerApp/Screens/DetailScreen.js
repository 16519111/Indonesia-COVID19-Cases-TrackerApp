import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default class DetailScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.titleBox}>
                    <Text style={styles.updateText}>Terakhir Di-Update : 15 Agustus 2020</Text>
                    <View style={styles.provinceBox}>
                        <Text style={styles.provText}>{this.props.route.params.prov}</Text>
                        <View style={{alignItems:'flex-end'}}>
                            <Text style={styles.provinceText}>Provinsi / Province</Text>
                        </View>
                    </View>
                    </View>
                <View style={styles.descriptionBox}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:20,margin:'6%',color:'#e4dcf1'}}>FID</Text>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={styles.descText}>{this.props.route.params.fid}</Text>
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.descTitle}>Kode Provinsi</Text>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={styles.descText}>{this.props.route.params.kode}</Text>
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.descTitle}>Kasus Positif</Text>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={styles.descText}>{this.props.route.params.positif}</Text>
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.descTitle}>Kasus Sembuh</Text>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={styles.descText}>{this.props.route.params.sembuh}</Text>
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:20,margin:'6%',color:'#e4dcf1'}}>Kasus Kematian</Text>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={styles.descText}>{this.props.route.params.meninggal}</Text>
                        </View>
                    </View>              
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    titleBox: {
        backgroundColor:"#494D5F",
        height:'15%',
        flex:1,
        marginBottom:'13%'
    },
    updateText: {
        color:'white',
        marginHorizontal:'3%',
        marginTop:'20%',
        fontStyle:'italic'
    },
    provinceBox: {
        backgroundColor:'#49657b',
        height:'60%',
        marginTop:'5%',
        zIndex:20,
        marginHorizontal:'10%',
        borderRadius:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 4,
        justifyContent:'space-between'
    },
    descriptionBox: {
        backgroundColor:'#2d3246',
        height:'58%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 3,
        zIndex:10
    },
    descTitle: {
        fontSize:20,
        margin:'6%',
        color:'#e4dcf1'
    },
    descText: {
        fontSize: 12,
        margin:'6%',
        fontStyle:'italic',
        color:'#e4dcf1'
    },
    provinceText: {
        fontSize:12,
        marginHorizontal:'6%',
        fontStyle:'italic',
        marginBottom:'2%',
        color:'white'
    },
    provText: {
        fontSize: 24,
        marginTop:'4%',
        fontFamily:'Roboto',
        fontWeight:'bold',
        marginHorizontal:'6%',
        color:'white'
    },
    borderLine: {
        borderBottomColor: '#e4dcf1', 
        borderBottomWidth: 0.8,
        marginHorizontal:'7%',
        borderRadius:1
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