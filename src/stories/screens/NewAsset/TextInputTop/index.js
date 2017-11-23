/* @flow */

import React, { Component } from 'react';
import { Input, Item, Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, CardItem, Card } from "native-base";
import { Dimensions, Image, View, TouchableOpacity } from 'react-native';

import styles from "../styles";

export default class TextInputTop extends Component {
  render() {
    return (
      <View>
        <Text style={styles.txtAsset}>Name</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Item style={styles.Iteminput} >
              <Input />
            </Item>
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Description</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Item style={styles.Iteminput} >
              <Input />
            </Item>
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Estimated value</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Item style={styles.Iteminput} >
              <Input />
            </Item>
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Quantity</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Item style={styles.Iteminput} >
              <Input />
            </Item>
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Category</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Item style={styles.Iteminput} >
              <Input />
            </Item>
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Location</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Item style={styles.Iteminput} >
              <Input />
            </Item>
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Status</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Item style={styles.Iteminput} >
              <Input />
            </Item>
          </CardItem>
        </Card>

        <Text style={styles.txtAsset}>Status note</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Item style={styles.Iteminput} >
              <Input />
            </Item>
          </CardItem>
        </Card>
      </View>
    );
  }
}
