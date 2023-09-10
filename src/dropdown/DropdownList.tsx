
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';


type DropdownState = boolean;

  function DropdownList(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const [ShowDropdown, setShowDropdown] = useState<DropdownState>(false)

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#eee' : '#52ad80',
    };

    const toggleOpen = () => {
        setShowDropdown(!ShowDropdown)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={styles.mainContainer}>
                <TouchableOpacity activeOpacity={0.6} style={styles.topic_button} onPress={() => toggleOpen()}>
                    <View style={styles.topic}>
                        <Text style={styles.topic_text}>Apple</Text>
                        <Text style={styles.arrowIcon}>{!ShowDropdown? `>` : `v`}</Text>
                    </View>
                </TouchableOpacity>
                {ShowDropdown &&
                    <View style={styles.list}>
                        <Text style={styles.list_text}>Mac</Text>
                        <Text style={styles.list_text}>iPad</Text>
                        <Text>iPhone</Text>
                    </View>
                }
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
        width: '90%',
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
        width: '90%',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingVertical: 15,
        borderRadius: 5
    },
    list_text: {
        paddingBottom: 5
    }
    
});

export default DropdownList;