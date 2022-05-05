import React from "react"
import { Text, TextInput, View, Button } from "react-native"
import styles from "./style"

export default function Form () {

    return (
        <View style={styles.formContext}>
            <View>
                <Text>Exercico</Text>
                <TextInput
                placeholder="Ex:20:00"
                keyboardType="numeric"
                />
                <Text>Descanso</Text>
                <TextInput
                placeholder="Ex:20:00"
                keyboardType="numeric"
                />
                <Text>Repetições</Text>
                <TextInput
                placeholder="Ex:12"
                keyboardType="numeric"
                />
                <Button title="Começar" />
            </View>
        </View>
    );
    
}