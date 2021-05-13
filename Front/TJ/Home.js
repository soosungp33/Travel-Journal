import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function Home() {
    const [list, setList] = useState([]);
    const [reload, setReload] = useState(false);
    
    useEffect(() => {
        fetch("http://localhost:8080/list")
        .then(response => response.json())
        .then(function(data) {
            let dataArr = [];
            let index=1
            while(data[index]) {
                dataArr.push(data[index])
                index++
            }
            setList(dataArr)
        })
    }, [])

    return(
        <View style={styles.container}>
            <View> 
                {list.map((obj, i) => {
                    console.log(obj)
                    return (<View style={styles.listView} key={i}>
                                <Text style={styles.listImage}> {obj.image} </Text>
                                <Text style={styles.listText}> {obj.name} </Text>
                            </View>)
                })}
            </View>
            {/* <Text>"Hello world"</Text>
            <Button
                title={"눌러봐"}
                style={styles.input}
                onPress={() => setReload(!reload)}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    listView: {
        flexDirection: 'row',
        marginBottom: 20,
        margin: 20,
        backgroundColor: 'red',
    },
    listImage: {
        width:200,
        height:200,
        margin: 10,
        backgroundColor: 'yellow',
    },
    listText: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    }
});