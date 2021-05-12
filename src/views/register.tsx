import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import {Avatar} from "react-native-elements";
import {auth} from "../services/firebase";
import {useDispatch} from "react-redux";
import {updateStoredUser} from "../redux/actions/user.actions";
import {useTranslation} from "react-i18next";

export default function Register ({navigation}: any) {
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {t} = useTranslation();


    const login = async () => {
        try {
            const data = await auth().createUserWithEmailAndPassword(email, password)
            console.log(data)
            dispatch(updateStoredUser(data.user._user))
            navigation.push('Home')
        } catch (e) {
            console.log(e)
            setError(e.message)
        }
    }

    return (
        <View style={styles.container}>
            <Avatar rounded style={styles.image} source={require('../static/images/learning.jpg')}/>

            <StatusBar style="auto"/>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={t('Choose email')}
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={t('Choose passowrd')}
                    placeholderTextColor="#003f5c"
                    secureTextEntry={false}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={t('Repeat passowrd')}
                    placeholderTextColor="#003f5c"
                    secureTextEntry={false}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <Text  style={styles.error}>{error}</Text>



            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={login} style={styles.loginBtn}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: 100,
        height: 100,
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    error:{
        color: "red",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
});