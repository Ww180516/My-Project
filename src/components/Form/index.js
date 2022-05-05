import React from "react"
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import ResultTime from "./ResultTime"
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
                <TouchableOpacity style={styles.buttonInit}>
                    <Text style={styles.buttonPlay}>iniciar</Text>
                    </TouchableOpacity>
            </View>
            <ResultTime />
        </View>
    );
    
}