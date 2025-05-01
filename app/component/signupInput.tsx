import { SafeAreaView, StyleSheet, TextInput } from "react-native";

interface Props{
    value?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText?: (text: string) => void;
}

export default function CustomInput({value, placeholder, onChangeText, secureTextEntry}: Props) {
    return (
        <SafeAreaView>
            <TextInput
            value={value}
            placeholder={placeholder}
            style={styles.inputFields}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#000"
            onChangeText={onChangeText}
             />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    inputFields: {
        width: "100%",
        height:60,
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderColor: "#000056",
        borderRadius: 18,
        paddingHorizontal: 20,
        marginBottom: 20
    }
})