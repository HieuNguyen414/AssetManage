/* @flow */

import React, { Component } from 'react';
import { Input, Item, Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, CardItem, Card } from "native-base";
import { Dimensions, Image, View, TouchableOpacity } from 'react-native';
import styles from "../styles";

export default class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.txtAsset}>Year bought</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Produced by</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Brand</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Price advertised</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Discount</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Receipt number</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>



        <Text style={styles.txtAsset}>Purchase form</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Tax or VAT</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Net amount</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Gross amount</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Lifespan</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Quality</Text>
        <Card style={{marginBottom:30}}>
          <CardItem style={styles.Cardinput}>
            <Input
              underlineColorAndroid= 'rgba(0,0,0,0)'
              style = {styles.inputtext}
            />
          </CardItem>
        </Card>
      </View>
    );
  }
}
