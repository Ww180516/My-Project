import React from "react"
import { Text, TextInput, View, Button } from 'react-native'
import styles from "./style"

export default function Form () {

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Exercico</Text>
                <TextInput
                style={styles.input}
                placeholder="Ex:20:00"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Descanso</Text>
                <TextInput
                style={styles.input}
                placeholder="Ex:20:00"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Repetições</Text>
                <TextInput
                style={styles.input}
                placeholder="Ex:12"
                keyboardType="numeric"
                />
                <Button title="Começar"/>
            </View>
        </View>
    );
    
}