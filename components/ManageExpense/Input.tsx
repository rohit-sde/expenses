import { Text, TextInput, View } from 'react-native';

export default function Input({
  label,
  textInputConfig,
}: {
  label: string;
  textInputConfig: any;
}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}
