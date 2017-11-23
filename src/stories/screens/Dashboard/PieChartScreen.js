import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  processColor
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import {PieChart} from 'react-native-charts-wrapper';

class PieChartScreen extends Component {

  constructor() {
    super();
    //Config Chart And Data Here
    this.state = {
      legend: {
        enabled: true,
        textSize: 30,
        form: 'CIRCLE',
        position: 'RIGHT_OF_CHART',
        wordWrapEnabled: true,
      },
      data: {
        dataSets: [{
          values: [
            {value: 20, label: 'Ghế'},
            {value: 21, label: 'Bàn'},
            {value: 15, label: 'Máy Tính'},
            {value: 15, label: 'Tủ Tài Liệu'},
            {value: 29, label: 'Quạt Máy'},
          ],
          label: '',
          config: {
            colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF'), processColor('#FF8C9D')],
            valueTextSize: 30,
            valueTextColor: processColor('#fff'),
            sliceSpace: 50,
            selectionShift: 20
          }
        }],
      },
      description: {
        text: 'Total Asset Category',
        textSize: 25,
        textColor: processColor('darkgray'),
        height:0

      }
    };
  }
  render() {
    return (
      <View>

        <View style={styles.container}>
          <PieChart
            style={styles.chart}
            logEnabled={true}
            chartBackgroundColor={processColor('#fff')}
            chartDescription={this.state.description}
            data={this.state.data}
            legend={this.state.legend}
            entryLabelColor = {processColor('black')}
            entryLabelTextSize = {0}
            rotationEnabled={true}
            drawSliceText={true}
            usePercentValues={true}
            centerText={''}
            TextSize={30}
            centerTextRadiusPercent={100}
            holeRadius={20}
            holeColor={processColor('#f0f0f0')}
            transparentCircleRadius={30}
            transparentCircleColor={processColor('#f0f0f088')}
            maxAngle={360}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    padding:20
  },
  chart: {
    flex: 1
  },
  InforChart : {
    paddingHorizontal: 20
  },
  CoverAll: {
    borderBottomWidth: 1,
    borderColor: 'rgb(65, 66, 71)',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default PieChartScreen;
