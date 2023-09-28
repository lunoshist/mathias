import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

class TextClickable extends React.Component {
  handleTextClick = () => {
    // Action à exécuter lorsque le texte est cliqué
    alert('Texte cliqué !');
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleTextClick}>
        <Text style={{ textDecorationLine: 'underline' }}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TextClickable;