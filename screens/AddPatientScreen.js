import React, { useState } from 'react';
import { View, Text } from 'react-native';

const AddPatientScreen = ({ navigation }) => (
    <View style={{ flex: 1 }}>
      <Text>Salam Aga</Text>
    </View>

)

AddPatientScreen.navigationOptions = {
    title: 'Добавить пациента',
    headerTintColor: '#2A86FF',
    headerStyle: {
      elevation: 0.8,
      shadowOpacity: 0.8,
    },
  };
  
  export default AddPatientScreen;