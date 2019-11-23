import React, { Component } from 'react'
import { Text, View, SectionList } from 'react-native'
import Icon from 'react-native-ionicons'
import styled from 'styled-components/native';

import { Appointment, SectionTitle } from '../components';

const DATA = [
 {
   title: '21 November',
   data : [
     {
       time: '15:30',
       diagnosis: 'пульпит',
       user: {
         phone: '+995 (598) 00-58062',
         fullname: 'Nizam Mamedov',
         avatar:
          'https://sun9-39.userapi.com/c850416/v850416828/c608c/eJQDiZSkjTw.jpg?ava=1'
       }
     },
     {
      time: '15:30',
      diagnosis: 'пульпит',
      user: {
        phone: '+995 (598) 00-52062',
        fullname: 'Vazgen Mamedov',
        avatar:
         'https://sun9-39.userapi.com/c850416/v850416828/c608c/eJQDiZSkjTw.jpg?ava=1'
      }
    },{
      time: '15:30',
      diagnosis: 'пульпит',
      user: {
        phone: '+995 (598) 00-68062',
        fullname: 'Nizam Mamedov',
        avatar:
         'https://sun9-39.userapi.com/c850416/v850416828/c608c/eJQDiZSkjTw.jpg?ava=1'
      }
    },
    
   ]
 }
];

const HomeScreen = ({ navigation }) => (
    <Container>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Appointment navigate={navigation.navigate} item={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
        <PlusButton>
          <Icon name="ios-add" size={36} color="white" />
        </PlusButton>
    </Container>
);

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

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;