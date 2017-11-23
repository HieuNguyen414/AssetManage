import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardItem, Item, Input, Button} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from "../styles";

export default class Calendar extends Component {
  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View>
        <Text style={styles.txtAsset}>Purchased on</Text>
        <Card>
          <CardItem style={styles.Cardinput}>
            <Item style={styles.ItemBarcode} >
              <Input />
            </Item>
            <Button transparent style={styles.btnbarcode} onPress={this._showDateTimePicker}>
              <Image source={require('../../../icon/calendar.png')} style={styles.imgbarcode}/>
            </Button>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              style={{backgroundColor:'yellow'}}
            />
          </CardItem>
        </Card>
      </View>
    );
  }
}
