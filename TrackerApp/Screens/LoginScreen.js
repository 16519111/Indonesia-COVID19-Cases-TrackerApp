import React from 'react';
import { View, Text, TextInput, StyleSheet, Button,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      isError: false,
    }
  }

  loginHandler() {
    if (this.state.password === '12345678') {
      this.setState({ isError: false });
      this.props.navigation.navigate('Home', {
        userName : this.state.userName
      })

    } else {
      this.setState({ isError: true });
    }

  }

  profileHandler(){
    this.props.navigation.navigate('Profile');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lembar}>
          <Text style={styles.titleText}>Covid-19 Update Indonesia</Text>
        

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name='account-circle' color='#3F5D8B' size={30} style={{paddingTop:30}}/>
            <View>
              <Text style={styles.labelText}>Username/Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Masukkan Nama User/Email'
                onChangeText={userName => this.setState({ userName })}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name='lock' color='#3F5D8B' size={25} style={{paddingTop:30}} />
            <View>
              <Text style={styles.labelText}>Password</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Masukkan Password'
                onChangeText={password => this.setState({ password })}
                secureTextEntry={true}
              />
            </View>
          </View>
          <Text style={this.state.isError ? styles.errorText : styles.hiddenErrorText}>Password Salah</Text>
          <View style={{width:100,borderRadius:25,alignItems:"center",alignSelf: "center"}}>
            <Button title='Login'  color='#3F5D8B' onPress={() => this.loginHandler()} />
          </View>
        </View>          
        
        <TouchableOpacity
          style={{paddingTop:30}}
          onPress={()=> this.profileHandler()}
        >
          <Text style={{color:'#3F5D8B'}}>Hubungi Kami</Text>
      </TouchableOpacity>
      
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#3F5D8B',
  },
  lembar:{
    flex:1,
    width:300,
    height:400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3F5D8B',
    textAlign: 'center',
  },

  formContainer: {
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  labelText: {
    fontWeight: 'bold',
    paddingTop: 20,
  },
  textInput: {
    width: 200,
    backgroundColor:'#c4c4c4',
    paddingLeft:20,
    borderRadius:25,
    fontSize:12,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  hiddenErrorText: {
    color: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});
