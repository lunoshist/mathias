import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomImageComponent from '../../components/Profile/CustomImageComponent.js';
import CustomComponent1 from '../../components/Profile/Custom1.js';
import CustomComponent2 from '../../components/Profile/Custom2.js';
import CustomComponent3 from '../../components/Profile/Custum3.js';
import CustomComponent4 from '../../components/Profile/Custum4.js';

export default function ProfilScreen({navigation}) {

  const [isModalVisible, setModalVisible] = useState(false);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleProfileEdit = () => {
    toggleModal();
  };

  const handleSaveProfile = () => {
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <CustomImageComponent />

      <TouchableOpacity
        style={styles.editButton}
        onPress={handleProfileEdit}
      >
        <Icon name="pencil" size={16} color="white" style={styles.editButtonIcon} />
        <Text style={styles.editButtonText}>Modifier le Profil</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Modifier le profil</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nom"
                value={nom}
                onChangeText={text => setNom(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Prénom"
                value={prenom}
                onChangeText={text => setPrenom(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Adresse Email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveProfile}
            >
              <Icon name="save" size={16} color="white" style={styles.saveButtonIcon} />
              <Text style={styles.saveButtonText}>Enregistrer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={toggleModal}
            >
              <Icon name="close" size={16} color="#FF5733" style={styles.closeButtonIcon} />
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.centeredCustomComponents}>
        <CustomComponent1 />
        <CustomComponent2 />
        <CustomComponent3 />
        <CustomComponent4 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginTop: 20,
  },
  centeredCustomComponents: {
    flex: 1,
    justifyContent: 'right',
    flexDirection: 'column', 
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#353D65',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 16,
  },
  editButtonIcon: {
    marginRight: 8,
  },
  editButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#353D65',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 8,
  },
  saveButtonIcon: {
    marginRight: 8,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  closeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5733',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 8,
  },
  closeButtonIcon: {
    marginRight: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
