import React, { useState, useEffect } from 'react'
import { SectionList, Alert, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import Swipeable from 'react-native-swipeable-row';
import axios from "axios";

import { Appointment, SectionTitle } from '../components';



const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAppointments = () => {
    setIsLoading(true);
    axios.get('https://dent-app-back.herokuapp.com/appointments')
    
    .then(({ data }) => {
      setData(data.data);
      setIsLoading(false);
    });
  }
  
  useEffect(fetchAppointments, []);
  useEffect(fetchAppointments, [navigation.state.params]);


  const removeAppointment = id => {
    Alert.alert(
      'მიღების გაუქმება',
      'ნამდვილად გნებავთ მიღების გაუქმება?',
      [
        {
          text: 'არა',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'კი',
          onPress: () => {
            setIsLoading(true);
            axios.delete('https://dent-app-back.herokuapp.com/appointments/' + id)
              .then(() => {
                fetchAppointments();
              })
              .catch(() => {
                setIsLoading(false);
              });
          }
        }
      ],
      { cancelable: false }
    );
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#2A86FF" />
  } else {
  return (
    <Container>
     {data && ( <SectionList
          sections={data}
          keyExtractor={item => item._id}
          onRefresh={fetchAppointments}
          refreshing={isLoading}
          renderItem={({ item }) => (
            <Swipeable
              rightButtons={[
                <SwipeViewButton style={{ backgroundColor: '#B4C1CB' }}>
                  <Icon name="md-create" size={28} color="white" />
                </SwipeViewButton>,
                <SwipeViewButton
                  onPress={removeAppointment.bind(this, item._id)}
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
    </Container>
)}};

HomeScreen.navigationOptions = {
    title: 'მიღების ჟურნალი',
    headerTintColor: '#2A86FF',
    headerStyle: {
      elevation: 0.8,
      shadowOpacity: 0.8
    },
}

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