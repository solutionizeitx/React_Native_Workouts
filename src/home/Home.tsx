
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

type SectionProps = PropsWithChildren<{
    title: string;
  }>;
  
  function Home({children, title}: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#eee' : '#fff',
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={styles.mainContainer}>
                <Text style={styles.textContainer}>Welcome to {'\n'} Custom Modules</Text>
            </View>
        </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#eee'
    },
    textContainer: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'blue',
        lineHeight: 30,
    }
    
});

export default Home;