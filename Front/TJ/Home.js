import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function Home() {
    const [test, setTest] = useState('');
    const hometest = () => {
        fetch("http://localhost:8080/home")
        .then(response => response.json())
        .then(data => setTest(data.message))
        console.log(test)
        
    }
    return(
        <View style={styles.container}>
            <Text>"Hello world"</Text>
            <Button
                title={"눌러봐"}
                style={styles.input}
                onPress={() => hometest()}
            />
            <Text>{test}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});