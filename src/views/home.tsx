import React, {useEffect} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    SafeAreaView, TouchableOpacity,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {User} from '../redux/types/users';
import {updateStoredUser} from '../redux/actions/user.actions';
import {Avatar, Button, Card, ListItem} from 'react-native-elements';
import {Divider} from 'react-native-elements';
import {Tile} from 'react-native-elements';
import {useTranslation} from "react-i18next";

declare const global: { HermesInternal: null | {} };

const Home = ({navigation}: any) => {
    const {t} = useTranslation();

    const user = useSelector((state: any) => state.user as User);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateStoredUser({}));
        console.log(user.email);
        console.log(user.uid);
    }, []);

    return (
        <>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <Divider style={{backgroundColor: 'blue'}}/>
                        <Tile
                            imageSrc={require('../static/images/learning.jpg')}
                            title={t("Courses")}
                            featured
                            caption={t("Continue with your progress or discover new ones")}
                            onPress={() => navigation.push('CoursesMenu')}
                        />
                        <Button
                            title="go!"
                            raised
                            onPress={() => navigation.push('CoursesMenu')}
                        />
                    </View>
                    <Divider style={{backgroundColor: 'blue'}}/>

                    {user && user.email &&
                    <Card containerStyle={styles.details}>
                        <Card.Title>{t('User')}</Card.Title>
                        <Card.Image source={require('../static/images/users.png')}></Card.Image>
                        <ListItem
                            bottomDivider>
                            <Avatar rounded source={require('../static/images/users.png')}/>
                            <ListItem.Content>
                                <ListItem.Title>{user.email}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>

                        <TouchableOpacity onPress={() => navigation.push('Login')}
                                          style={styles.loginBtn}>
                            <Text>{t('Login with another user')}</Text>
                        </TouchableOpacity>

                      <TouchableOpacity onPress={() => navigation.push('Register')}
                                        style={styles.register}>
                        <Text>{t('Register')}</Text>
                      </TouchableOpacity>
                    </Card>
                    }
                  {(!user || !user.email) &&
                  <TouchableOpacity onPress={() => navigation.push('Login')}
                                    style={styles.loginBtn}>
                    <Text>{t('Login')}</Text>
                  </TouchableOpacity>
                  }


                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    container: {
        flex: 1,
      marginTop: 30,
      marginBottom: 100,

        alignItems: "center",
        justifyContent: "center",
    },
    body: {
        backgroundColor: Colors.white,
    },
    details: {
        borderRadius: 10,
        borderWidth: 2
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 40,
    },
  register:{
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
    loginBtn: {
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF1493",
    },

});

export default Home;
