import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const NewPostPopup = ({ isVisible, onClose, onCreatePost }) => {
  const [theme, setTheme] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleCreatePost = () => {
    if (theme.trim() === '' || title.trim() === '' || text.trim() === '') {
    } else {
      const newPost = {
        theme,
        title,
        text,
      };

      onCreatePost(newPost);
      setTheme('');
      setTitle('');
      setText('');
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Créez un nouveau post</Text>
          <TextInput
            style={styles.input}
            placeholder="Theme"
            value={theme}
            onChangeText={(text) => setTheme(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Titre"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Texte"
            multiline={true}
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity
            style={styles.createButton}
            onPress={handleCreatePost}
          >
            <Text style={styles.buttonText}>Créér le Post</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: '#353D65',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '#FBDBB1',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NewPostPopup;