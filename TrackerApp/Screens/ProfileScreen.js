import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTentang}>Tentang Kami</Text>
                <Text style={styles.textJob}>React Native Developer</Text>

                <View style={styles.bulat}>
                    <View style={{alignItems:"center"}}>
                        <MaterialCommunityIcons name='account-circle' color='#3F5D8B' size={70} />
                        <Text style={styles.textNama}>M. Makki</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <MaterialCommunityIcons name='account-circle' color='#3F5D8B' size={70} />
                        <Text style={styles.textNama}>Gregorius D. B.</Text>
                    </View>
                </View>

                <View style={styles.KotakCilik}>
                    <Text style={styles.textPortofolio}>Tentang Aplikasi</Text>
                    <View style={styles.Garis}></View>
                    <Text style={{paddingTop:10}}>Aplikasi ini dibuat untuk menyelesaikan tugas akhir bootcamp Sanbercode. Kami mohon maaf apabila terdapat kekurangan dalam aplikasi ini. Jangan lupa follow social media kami yah...</Text>

                </View>              

                <View style={styles.Kotak}>
                    <Text style={styles.textPortofolio}>Contact Us</Text>
                    <View style={styles.Garis}></View>

                    <View style={{paddingTop: 20}}>
                        <View style={styles.iconSos}>
                            <Entypo name="mail" size={24} color='#3EC6FF' />
                            <Text style={{color:'#003366'}}> m_makki7@yahoo.com</Text>
                        </View>

                        <View style={styles.iconSos}>
                            <AntDesign name="instagram" size={24} color='#3EC6FF' />
                            <Text style={{color:'#003366'}}> @m_makki7</Text>
                        </View>

                        <View style={styles.iconSos}>
                            <AntDesign name="linkedin-square" size={24} color='#3EC6FF' />
                            <Text style={{color:'#003366'}}> https://www.linkedin.com/in/muchammad-makki/</Text>
                        </View>
                    </View>

                    <View style={{paddingTop: 20}}>
                        <View style={styles.iconSos}>
                            <Entypo name="mail" size={24} color='#3EC6FF' />
                            <Text style={{color:'#003366'}}> gregdimasbaskara@gmail.com</Text>
                        </View>

                        <View style={styles.iconSos}>
                            <AntDesign name="instagram" size={24} color='#3EC6FF' />
                            <Text style={{color:'#003366'}}> @greg_dimasb</Text>
                        </View>

                        <View style={styles.iconSos}>
                            <AntDesign name="linkedin-square" size={24} color='#3EC6FF' />
                            <View>
                                <Text style={{color:'#003366'}}> https://www.linkedin.com/in/gregorius-dimas</Text>
                                <Text style={{color:'#003366'}}> -baskara-aba7a71aa/</Text>
                            </View>
                        </View>
                    </View>

                </View>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    textTentang:{
        color: '#4A90E2',
        textAlign: 'center',
        fontSize: 26,
        // marginTop: 100,
        fontWeight: 'bold'
    },

    textNama:{
        color: '#4A90E2',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },

    textJob:{
        color: '#3EC6FF',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },

    textPortofolio:{
        color: '#4A90E2',
        fontSize: 14,
    },
    Garis:{
        backgroundColor: '#003366',
        width:360,
        height:1,
        justifyContent: 'center'
    },
    GarisPutih:{
        backgroundColor: '#ffffff',
        width:360,
        height:1,
        justifyContent: 'center'
    },
    KotakCilik:{
        backgroundColor: '#EFEFEF',
        width:360,
        height:120,
        borderRadius: 25,
        paddingTop:20,
        paddingLeft:10,
    },
    Kotak:{
        backgroundColor: '#EFEFEF',
        width:360,
        height:250,
        borderRadius: 25,
        paddingTop:20,
        paddingLeft:10,
    },
   
    bulat:{
        flexDirection:'row',
        backgroundColor: '#EFEFEF',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    iconSos:{
        flexDirection:'row',
        paddingLeft:-20,
    },

})