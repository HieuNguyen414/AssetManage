import { StyleSheet, Dimensions } from "react-native";
const width  = Dimensions.get('window').width;

const styles = {
  text1_view_content:{
    textAlign:'center',
    fontWeight:'bold',
    padding:5
  },
  CardItems:{
    height:180,
  },
  card:{
    width:width-30,
    marginLeft:15,
    marginTop:10,
  },
  header:{
    backgroundColor: '#2196F3',
  },
  iconHeader:{
    marginLeft:25,
    width: 20,
    height: 20
  },
  txtShowing:{
    fontSize:23,
    fontWeight:'bold',
    color:'#6E7172',
    textAlign:'center'
  },
  ViewStatus:{
    height:40,
    backgroundColor:'#E3E1E3',
    justifyContent:'center',
    alignItems:'center'
  },
  txtcardItems2:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:15,
  },
  txtRight1:{
    fontSize:25,
    color:'black',
    fontWeight:'bold',
    marginBottom:30
  },
  txtRight2:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginBottom:30
  },
  checkbox:{
    marginRight:10,
    marginTop:5,
  },
  LeftCard:{
    flex:0.6
  },
  imgCam:{
    width:150,
    height:150
  },
  txtname0:{
    fontSize:25,
    fontWeight:'bold'
  },
  txtname1:{
    fontSize:20
  },
  doublename1:{
    fontSize:20,
    paddingTop:10,
    fontWeight:'bold'
  },
  doublename2:{
    fontSize:20,
    fontWeight:'bold'
  },
  txtDatetime:{
    fontSize:18,
    paddingTop:10
  }
}

export default styles;
