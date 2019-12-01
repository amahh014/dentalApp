import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import {
  GrayText,
  Button,
  Badge
} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';

const PatientScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <PatientDetails>
      <PatientFullname>{navigation.getParam('patient', {}).fullname}</PatientFullname>
      <GrayText>{navigation.getParam('patient', {}).phone}</GrayText>

      <PatientButtons>
        <FormulaButtonView>
      <Button>Формула зубов</Button>
        </FormulaButtonView>
      <PhoneButtonView>
        <Button color="#84D269">
          <Icon name="md-call" size={22} color="white" />
        </Button>
      </PhoneButtonView>
      </PatientButtons>
    </PatientDetails>

    <PatientAppointments>
      <Container>
        <AppointmentCard>
          <MoreButton>
            <Icon name="md-more" size={24} color="rgba(0, 0, 0, 0.4)" />
          </MoreButton>
          <AppointmentCardRow>
            <Icon name="md-medical" size={16} color="#A3A3A3" />
            <AppointmentCardLabel>Зуб: <Text style={{ fontWeight: '600' }}>12</Text></AppointmentCardLabel>
          </AppointmentCardRow>
          <AppointmentCardRow>
            <Icon name="ios-list" size={16} color="#A3A3A3" />
            <AppointmentCardLabel>Диагноз: <Text style={{ fontWeight: '600' }}>пульпит</Text></AppointmentCardLabel>
          </AppointmentCardRow>

          <AppointmentCardRow>
            <Badge style={{ width: 150 }} avtive>11.10.2019 - 15:40</Badge>
            <Badge color="green">1500 GEL</Badge>
          </AppointmentCardRow>

        </AppointmentCard>
      </Container>
    </PatientAppointments>
  </View>
);

const MoreButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 32px;
  width: 32px;
`;

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCard = styled.View`
  shadow-color: gray;
  elevation: 0.5;
  shadow-opacity: 0.4;
  shadow-radius: 10;
  padding: 20px 25px;
  border-radius: 10px;
  background: white;
  margin-bottom: 20px;
`;

const Container = styled.View`
  padding: 25px;
  flex: 1;
`;

const PatientDetails = styled(Container)`
  flex: 0.3;
`;

const PatientAppointments = styled.View`
  flex: 1;
  background: #f8fafd;
`;


const PhoneButtonView = styled.View`
  margin-left: 10px;
  width: 45px;
`;


const FormulaButtonView = styled.View`
  flex: 1;
`;

const PatientButtons = styled.View`
  margin-top: 20px;
  flex-direction: row;
  margin-top: 20px;
`;

const PatientFullname = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 3px;
`;

PatientScreen.navigationOptions = {
    title: 'Карта пациета',
        headerTintColor: '#2A86FF',
        headerStyle: {
          elevation: 0.8,
          shadowOpacity: 0.8
        },
};

export default PatientScreen;