import React, { useState, useEffect } from 'react'
import { View, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import Swipeable from 'react-native-swipeable-row';
import axios from "axios";

import { Appointment, SectionTitle } from '../components';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   axios.get('http://localhost:6666/appointments').then(({ data }) => {
  //     setData(data.data);
  //     setIsLoading(false);
  //   });
  // }, []);

  const fetchAppointments = () => {
    setIsLoading(true);
    axios.get('http://localhost:6666/appointments').then(({ data }) => {
      setData(data.data);
      setIsLoading(false);
    });
  }

  useEffect(fetchAppointments, []);

  return (
    <Container>
     {data && ( <SectionList
          sections={data}
          keyExtractor={(item, index) => index}
          onRefresh={fetchAppointments}
          refreshing={isLoading}
          renderItem={({ item }) => (
            <Swipeable
              rightButtons={[
                <SwipeViewButton style={{ backgroundColor: '#B4C1CB' }}>
                  <Icon name="md-create" size={28} color="white" />
                </SwipeViewButton>,
                <SwipeViewButton
                  style={{ backgroundColor: '#F85A5A' }}
                >
                  <Icon name="ios-close" size={48} color="white" />
                </SwipeViewButton>
              ]}
            >
                <Appointment navigate={navigation.navigate} item={item} />
            </Swipeable>
            
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        />)}
        <PlusButton onPress={navigation.navigate.bind(this, 'AddPatient')}>
          <Icon name="ios-add" size={36} color="white" />
        </PlusButton>
    </Container>
)};

HomeScreen.navigationOptions = {
    title: 'Журнал приёмов',
    headerTintColor: '#2A86FF',
    headerStyle: {
      elevation: 0.8,
      shadowOpacity: 0.8
    },
}

const PlusButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: #2a86ff;
    position: absolute;
    right: 25px;
    bottom: 25px;
    shadow-color: #2a86ff;
    elevation: 4;
    shadow-opacity: 0.4;
    shadow-radius: 3.5;
`;

const SwipeViewButton = styled.TouchableOpacity`
  width: 75px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;