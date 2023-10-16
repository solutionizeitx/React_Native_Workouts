
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  LayoutAnimation,
  FlatList,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Define a TypeScript type for the car object
type Car = {
    name: string;
    make: string;
    modal: string;
    year: number;
    description: string;
};

// Define a TypeScript type for the array of car objects
type CarArray = Car[];

type DropdownState = boolean;

  function DropdownList(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const [ShowDropdown, setShowDropdown] = useState<DropdownState>(false);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#eee' : '#52ad80',
    };

    const toggleOpen = () => {
        setShowDropdown(!ShowDropdown)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }

      const [Cars, setCars] = useState<CarArray>([
        {
            "name": "Car 1",
            "make": "Toyota",
            "modal": "Camry",
            "year": 2022,
            "description": "The Toyota Camry is a reliable midsize sedan known for its comfort and fuel efficiency."
        },
        {
            "name": "Car 2",
            "make": "Honda",
            "modal": "Civic",
            "year": 2023,
            "description": "The Honda Civic is a compact car with a reputation for its practicality and excellent resale value."
        },
        {
            "name": "Car 3",
            "make": "Ford",
            "modal": "F-150",
            "year": 2021,
            "description": "The Ford F-150 is a popular full-sizepickup truck, known for its ruggedness and versatility."
        },
        {
            "name": "Car 4",
            "make": "Chevrolet",
            "modal": "Malibu",
            "year": 2022,
            "description": "The Chevrolet Malibu is a midsize sedan offering a comfortable ride and modern technology features."
        },
        {
            "name": "Car 5",
            "make": "Tesla",
            "modal": "Model 3",
            "year": 2023,
            "description": "The Tesla Model 3 is an electric sedan known for its cutting-edge technology and impressive acceleration."
        },
    ]);

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={styles.mainContainer}>
                <TouchableOpacity activeOpacity={0.6} style={styles.topic_button} onPress={() => toggleOpen()}>
                    <View style={styles.topic}>
                        <Text style={styles.topic_text}>Cars</Text>
                        {/* <Text style={styles.arrowIcon}>{!ShowDropdown? `>` : `v`}</Text> */}
                        <Icon name="right" size={16} color={'#000'}/>
                    </View>
                </TouchableOpacity>
                {ShowDropdown &&
                    <FlatList
                        horizontal={false}
                        data={Cars}
                        contentContainerStyle={{}}
                        renderItem={({item}) => 

                        <View style={styles.list}>
                            <Text style={styles.list_text}>{item.name}</Text>
                            <Text style={styles.list_text}>{item.make}</Text>
                            <Text style={styles.list_text}>{item.modal}</Text>
                            <Text style={styles.list_text}>{item.year}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        }
                    />}
                
            </View>
        </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 30,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff'
    },
    textContainer: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'blue',
        lineHeight: 30,
    },
    topic_button: {
        backgroundColor: '#a1f8cc',
        height: 60,
        width: windowWidth/1.1,
        justifyContent: 'center',
        borderRadius: 10
    },
    topic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    topic_text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    arrowIcon: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    list: {
        backgroundColor: '#d6f6e6',
        width: windowWidth/1.1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingVertical: 15,
    },
    list_text: {
        paddingBottom: 5,
    }
    
});

export default DropdownList;