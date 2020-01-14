import React, { useState } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Item, Input, Label, Picker } from 'native-base';
import styled from 'styled-components';
import DatePicker from 'react-native-datepicker';
import axios from "axios";


import { Button, Container } from '../components';

const AddAppointmentScreen = ({ navigation }) => {
    const [values, setValues] = useState({
      diagnosis: 'пульпит',
      dentNumber: '',
      price: '',
      date: null,
      time: null,
      patient: navigation.getParam('patientId')
    });

    const fieldsName = {
        diagnosis: 'დიაგნოზი',
        dentNumber: 'კბილისი ნომერი',
        price: 'ფასი',
        date: 'თარიღი',
        time: 'დრო'
      };

    const setFieldValue = (name, value) => {
        setValues({
          ...values,
          [name]: value
        });
      };
    

      const handleInputChange = (name, e) => {
        const text = e.nativeEvent.text;
        setFieldValue(name, text);
      };
      
      const onSubmit = () => {
        axios.post('https://dent-app-back.herokuapp.com/appointments', values)
          .then(() => {
            navigation.navigate('Home', { lastUpdate: new Date() });
          })
          .catch(e => {
            if (e.response.data && e.response.data.message) {
              e.response.data.message.forEach(err => {
                const fieldName = err.param;
                alert(`Ошибка! Поле "${fieldsName[fieldName]}" указано неверно.`);
              });
            }
          });
      };
      
      return (
        <Container>
          <Item style={{ marginLeft: 0 }} floatingLabel>
            <Label>კბილის ნომერი</Label>
            <Input
              onChange={handleInputChange.bind(this, 'dentNumber')}
              value={values.fullname}
              style={{ marginTop: 12 }}
              keyboardType="numeric"
              autoFocus
            />
          </Item>
          <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
            <Label>ფასი</Label>
            <Input
              onChange={handleInputChange.bind(this, 'price')}
              value={values.phone}
              keyboardType="numeric"
              style={{ marginTop: 12 }}
            />
          </Item>
          <Item style={{ marginTop: 20, marginLeft: 0 }}>
            <Picker
              mode="dropdown"
              placeholder="აირჩიე დიაგნოზი"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              style={{ width: '100%' }}
              onValueChange={setFieldValue.bind(this, 'diagnosis')}
              selectedValue={values.diagnosis}
            >
              <Picker.Item label="თერაპია" value="თერაპია" />
              <Picker.Item label="კონსულტაცია" value="კონსულტაცია" />
              <Picker.Item label="კოფერდამი/ოპტრაგეითსი" value="კოფერდამი/ოპტრაგეითსი" />
              <Picker.Item label="კარიესის მკურნალობა" value="კკარიესის მკურნალობა" />
              <Picker.Item label="ფრონტალური კბილების რესტავრაცია" value="ფრონტალური კბილების რესტავრაცია" />
              <Picker.Item label="საღეჭი კბილების რესტავრაცია	" value="საღეჭი კბილების რესტავრაცია	" />
              <Picker.Item label="შინირება ერთი კბილის არეში" value="შინირება ერთი კბილის არეში" />
              <Picker.Item label="მერილენდის ხიდი" value="მერილენდის ხიდი" />
              <Picker.Item label="სამკურნალო სარჩული" value="სამკურნალო სარჩული" />
            </Picker>
          </Item>
          <Item style={{ marginTop: 20, marginLeft: 0 }}>
            <TimeRow>
              <View style={{ flex: 1 }}>
                <DatePicker
                  date={new Date()}
                  mode="date"
                  placeholder="თარიღი"
                  format="YYYY-MM-DD"
                  minDate={new Date()}
                  confirmBtnText="შენახვა"
                  cancelBtnText="გაუქება"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      borderWidth: 0
                    },
                    dateText: {
                      fontSize: 18
                    }
                  }}
                  date={values.date}
                  onDateChange={setFieldValue.bind(this, 'date')}
                />
              </View>
              <View style={{ flex: 1 }}>
                <DatePicker
                  mode="time"
                  placeholder="დრო"
                  format="HH:mm"
                  minDate={new Date()}
                  confirmBtnText="შენახვა"
                  cancelBtnText="გაუქება"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      borderWidth: 0
                    },
                    dateText: {
                      fontSize: 18
                    }
                  }}
                  date={values.time}
                  onDateChange={setFieldValue.bind(this, 'time')}
                />
              </View>
            </TimeRow>
          </Item>
          <ButtonView>
            <Button onPress={onSubmit} color="#87CC6F">
              {/* <Icon name="ios-add" size={24} color="white" /> */}
              <Text>დამატება</Text>
            </Button>
          </ButtonView>
        </Container>
      );
    };
    
    const ButtonView = styled.View`
      flex: 1;
      margin-top: 30px;
    `;
    
    const TimeRow = styled.View`
      flex-direction: row;
    `;
    
    AddAppointmentScreen.navigationOptions = {
      title: 'მიღების დამატება',
      headerTintColor: '#2A86FF',
      headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8
      }
    };
    
    export default AddAppointmentScreen;