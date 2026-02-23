import { GlobalStyles } from '@/constants/styles';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Button({
  children,
  onPress,
  mode,
  style,
}: {
  children: string;
  onPress: () => void;
  mode?: string;
  style?: any;
}) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 8,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
