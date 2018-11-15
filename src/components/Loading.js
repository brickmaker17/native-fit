// @flow
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default class Loading extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color='#373944' />
            </View>
        );
    }
}
