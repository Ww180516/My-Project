import React from "react"
import { View, Text } from 'react-native'

import styles from "./style"

export default function  ResultTime () {
    
    return (
        <View style={styles.form}>
            <Text style={styles.formLabel}>00:45:00</Text>
            <Text style={styles.formLabel}>03/12</Text>
        </View>
    );
    
}