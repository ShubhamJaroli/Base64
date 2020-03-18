import React, { Component } from 'react';
import {StyleSheet,Button,View,Text,Image} from 'react-native';
import ImgToBase64 from 'react-native-image-base64'
export default class App extends Component
{
  constructor()
  {
    super()
    this.state=
    {
      data:"data:image/png;base64,",
      networkdata:'data:image/png;base64,'
    }
  }
  send=()=>
  {
    ImgToBase64.getBase64String('https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
      .then(base64String => {
        console.log(base64String.length);
        this.setState(
          {
            networkdata:"data:image/png;base64,"+base64String
          }
        )
      })
      .catch(err => console.log(err));
  }
  send2=()=>
  {
      ImgToBase64.getBase64String('file:///storage/emulated/0/Download/nature.png')
      .then(base64String => {
        console.log(base64String.length);
        this.setState(
          {
            data:"data:image/png;base64,"+base64String
          }
        )
      })
      .catch(err => console.log(err));
  }
  render()
  {
    return(
      <View>
        <Image source={{uri:this.state.networkdata}} style={styles.image}/>
        <Button title="Network Image" onPress={this.send.bind(this)} />
        <Image source={{uri:this.state.data}} style={styles.image}/>
        <Button title="Local Image" onPress={this.send2.bind(this)}/>
      </View>
    )
  }
}
const styles = StyleSheet.create(
{
  image:
  {
    height:'40%',
    width:'80%',
    alignSelf:'center',
    marginTop:'5%',
    marginBottom:'2%',
  }
}
)