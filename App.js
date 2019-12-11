import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import { HomeScreen, PatientScreen, AddPatientScreen, AddAppointmentScreen, PatientsScreen } from './screens';

import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();



const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Patient: {
    screen: PatientScreen
  },
  AddPatient: {
    screen: AddPatientScreen
  },
  AddAppointment: {
    screen: AddAppointmentScreen
  },
   Patients: {
      screen: PatientsScreen
    }
});
// {
//   initialRouteName: 'Patients'
// }
// );

const TabNavigator = createBottomTabNavigator({


	Home: {
		screen: AppNavigator,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="ios-home" size={22} color={tintColor} />)
		}
	},
	Patients: {
		screen: PatientsScreen,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="ios-contacts" size={22} color={tintColor} />)
		}
	},
}, {
	tabBarOptions: {
		showLabel: false,
		activeTintColor: '#f8f8f8',
		inactiveTintColor: '#586589',
		style: {
			backgroundColor: '#171f33'
		}
	},
	initialRouteName: 'Home'
});


const ModalStack = createStackNavigator({
	Tabs: {
		screen: TabNavigator
	}
},{
	mode: 'modal',
	headerMode: 'none'
});



export default createAppContainer(ModalStack);