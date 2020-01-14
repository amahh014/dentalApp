import React, { useState } from 'react';
import { Text } from 'react-native';
import { Item, Input, Label } from 'native-base';
import styled from 'styled-components';
// import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios";

import { Button, Container } from '../components';


const AddPatientScreen = ({ navigation }) => {
  const [values, setValues] = useState({});

  const handleChange = (name, e) => {
    const text = e.nativeEvent.text;
    setValues({
      ...values,
      [name]: text,
    });
  };

  const onSubmit = () => {
    axios.post('https://dent-app-back.herokuapp.com/patients', values)
      .then(() => {
        navigation.navigate('Patients');
      })
      .catch(e => {
        alert('BAD');
      });
  };

    return ( 
    <Container>
      <Item style={{ marginLeft: 0 }} floatingLabel>
        <Label>სახელი, გვარი</Label>
        <Input
          onChange={handleChange.bind(this, 'fullname')}
          value={values.fullname}
          style={{ marginTop: 12 }}
          autoFocus
        />
      </Item>

      <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
        <Label>მობილური ნომერი</Label>
        <Input
          onChange={handleChange.bind(this, 'phone')}
          value={values.phone}
          keyboardType="numeric"
          dataDetectorTypes="phoneNumber"
          style={{ marginTop: 12 }}
        />
      </Item>

      <ButtonView>
        <Button onPress={onSubmit} color="#87CC6F">
          {/* <Icon name="ios-add" size={24} color="white" /> */}
          <Text>პაციენტის დამატება</Text>
        </Button>
      </ButtonView>
    </Container>
    );
};

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

AddPatientScreen.navigationOptions = {
    title: 'პაციენტის დამატება',
    headerTintColor: '#2A86FF',
    headerStyle: {
      elevation: 0.8,
      shadowOpacity: 0.8,
    },
  };
  
  export default AddPatientScreen;