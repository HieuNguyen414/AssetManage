import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Button } from 'native-base'
import Modal from 'react-native-modal'

//import styles
import styles from './styles';

export default class MenuModal extends Component {
  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render () {
    return (
      <View>
        <Button transparent onPress={this._showModal}>
          <Image source={require('../../icon/three-dot.png')} style={{width:35, height:35}}/>
        </Button>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.coverModal}>
            {/* Title Modal*/}
            <Text style={styles.titleModal} >Action Menu</Text>
            {/* Title Modal*/}

            {/* Menu List */}
            <View>
              <TouchableOpacity >
                <Text style={styles.menuText}>Asset List</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={styles.menuText}>Category List</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={styles.menuText}>Location List</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={styles.menuText}>Status List</Text>
              </TouchableOpacity>
            </View>
            {/* Menu List */}
          </View>

        </Modal>
      </View>
    )
  }
}
