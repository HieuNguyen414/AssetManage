/* @Duy */

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = {
  container: {
    flex: 1,
  },
  preview: {
      flex: 1,
  },
  Image:{
    width:250,
    height:250,
    justifyContent:'center',
    alignItems:'center'
  },
  rectangleContainer: {
      backgroundColor: 'transparent',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  rectangle: {
      backgroundColor: 'transparent',
      height: 250,
      width: 250,
      borderColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  },
  Top:{
    flex:0.75,
    backgroundColor: 'transparent', //rgba(52, 52, 52, 0.8)
  },
  ViewContent:{
    flex:1,
    backgroundColor:'transparent',
    flexDirection:'row'
  },
  Left:{
    flex: 1,
    width:20,
    height:height,
    backgroundColor: 'transparent',//rgba(52, 52, 52, 0.8)
  },
  Content:{
    width:260,
    height:height,
    backgroundColor:'transparent'
  },
  Right:{
    flex: 1,
    width:20,
    height:height,
    backgroundColor: 'transparent',//rgba(52, 52, 52, 0.8)
  },
  Bottom:{
    flex:0.7,
    backgroundColor: 'transparent',//rgba(52, 52, 52, 0.8)
    justifyContent:'center',
    alignItems:'center'
  },
  txtbottom:{
    color:'white',
    fontSize:20
  },
  btnHome:{
    width:70,
    height:70,
    backgroundColor:'#C9C9C7',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    borderColor:'white',
    borderWidth:1,
    marginTop:10,
    marginLeft:10
  },
  btnGellary:{
    width:70,
    height:70,
    backgroundColor:'#C9C9C7',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    borderColor:'white',
    borderWidth:1,
    marginTop:10,
    marginRight:10
  },
  btnFlashOff:{
    width:70,
    height:70,
    backgroundColor:'#C9C9C7',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    borderColor:'white',
    borderWidth:1,
    marginTop:10,
    marginLeft:10
  },
  btnimg:{
    width:40,
    height:40
  },
  icon:{
    color:'black'
  }
}

export default styles;
