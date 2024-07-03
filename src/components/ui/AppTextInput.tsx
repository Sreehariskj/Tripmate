import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import React from 'react';

interface CustomProps {
  style: StyleProp<TextStyle>;
  isPassword?: boolean;
  error?: string;
}
type Props = CustomProps & TextInputProps;
export const AppTextInput = ({
  style,
  error,
  isPassword = false,
  ...rest
}: Props) => {
  return (
    <>
      <TextInput
        {...rest}
        secureTextEntry={isPassword}
        style={[styles.input, style]}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 2,
  },
  error: {
    marginTop: 5,
    color: 'red',
  },
});
