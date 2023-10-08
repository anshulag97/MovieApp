import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const DropdownMenu = ({ data, onChange }) => {
  const [value, setValue] = useState('popular');
  const [isFocus, setIsFocus] = useState(false);

  const categoryChange = (newValue) => {
    setValue(newValue);
    setIsFocus(false);
    onChange(newValue);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        data={data}
        maxHeight={250}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={categoryChange}
      />
    </View>
  );
};

export default DropdownMenu;

const styles = StyleSheet.create({
  container: {
    width: '60%',
    marginBottom: 10,
    alignSelf: 'center',
  },
  icon: {
    marginRight: 5,
  },
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.8,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 50,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 45,
    fontSize: 16,
  },
});