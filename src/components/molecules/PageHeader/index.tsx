import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon';
import {Button} from '../../atoms';

const PageHeader = ({label, backButton, onPress, Type}) => {
  if (Type === 'Home') {
    return (
      <View style={styles.containerHome}>
        <Text style={styles.labelHome}>Money Tracker</Text>
        <Text style={styles.labelHome2}>Money Tracker</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="back-button" onSubmit={onPress} />
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 24,
  },
  containerHome: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingRight: 173,
    paddingTop: 30,
    paddingBottom: 24,
  },
  labelHome: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    flexDirection: 'row',
  },
  labelHome2: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#8D92A3',
    flexDirection: 'row',
  },
});
