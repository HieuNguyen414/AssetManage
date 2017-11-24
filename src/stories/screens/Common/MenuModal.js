import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Button } from 'native-base'
import Modal from 'react-native-modal'

//import styles
import styles from './styles';

export default class MenuModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    }
  }

  _showModal() {
    this.setState({ isModalVisible: true })
  }

  _hideModal(){
    this.setState({ isModalVisible: false })
  }
  goPage(route) {
    this._hideModal();
    this.props.navigation.navigate(route);
  }
  render () {
    const {topNav} = this.props;
    return (
      <View>
        <Button transparent onPress={ () => this._showModal()}>
          <Image source={require('../../icon/three-dot.png')} style={{width:35, height:35}}/>
        </Button>
        <Modal   isVisible={this.state.isModalVisible}>

          {/* Hide Modal */}
          <TouchableOpacity
            style ={{  flex:1 }}
            onPress={ () => this._hideModal() }>
          </TouchableOpacity>
          {/* Hide Modal */}

          <View style={styles.coverModal}>
            {/* Title Modal*/}
            <Text style={styles.titleModal} >Action Menu</Text>
            {/* Title Modal*/}

            {/* Menu List */}
            <View>
              {
                topNav
                ?
                topNav.map( (item,index) => {
                  return(
                    <TouchableOpacity key={index} onPress = { () => this.goPage(item.route) } >
                      <Text style={styles.menuText}>{ item.caption }</Text>
                    </TouchableOpacity>
                  );
                })
                : null
              }
            </View>
            {/* Menu List */}
          </View>

        </Modal>
      </View>
    )
  }
}
