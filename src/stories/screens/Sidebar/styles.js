import { StyleSheet } from 'react-native';

const styles = {
  container: {
    flex: 1,
  },
  UserManager:{
    flex:0.4,
    backgroundColor: '#63BAF4',
    alignItems: 'center',
    justifyContent: 'center',

  },
  txtManagerUser:{
    color: 'white',
    fontSize:40,
    marginLeft:10,
  },
  imageUser:{
    width:120,
    height:120,
    borderRadius:75,
  },
  txtName:{
    fontSize:25,
    marginLeft:10,
    color:'#565D6B',
  },
  BtnName:{
    marginTop:15,
    flexDirection:'row',
    alignItems:'center',
    height:60
  },
  BtnNameActive:{
    backgroundColor:'#64B9F4'
  },
  txtnameActive:{
    color:'#fff'
  },
  image:{
    width:40,
    height:40,
    marginLeft: 10
  }
}

export default styles;
