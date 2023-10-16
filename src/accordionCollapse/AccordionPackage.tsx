
import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Thumbnail, List, ListItem, Separator } from 'native-base';

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

function DropdownList(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#eee' : '#52ad80',
    };

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
                <Collapse>
                    <CollapseHeader>
                        <Separator bordered>
                        <Text>FORWARD</Text>
                        </Separator>
                    </CollapseHeader>
                    <CollapseBody>
                        <ListItem >
                        <Text>Aaron Bennet</Text>
                        </ListItem>
                        <ListItem>
                        <Text>Claire Barclay</Text>
                        </ListItem>
                        <ListItem last>
                        <Text>Kelso Brittany</Text>
                        </ListItem>
                    </CollapseBody>
                    </Collapse>
                    <Collapse>
                    <CollapseHeader>
                        <Separator bordered>
                        <Text>FORWARD</Text>
                        </Separator>
                    </CollapseHeader>
                    <CollapseBody>
                        <ListItem >
                        <Text>Aaron Bennet</Text>
                        </ListItem>
                        <ListItem>
                        <Text>Claire Barclay</Text>
                        </ListItem>
                        <ListItem last>
                        <Text>Kelso Brittany</Text>
                        </ListItem>
                    </CollapseBody>
                </Collapse>
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
})