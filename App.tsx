import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/views/home';
import {store} from './src/redux/store';
import LessonMenu from './src/views/lessonMenu';
import {ThemeProvider} from 'react-native-elements';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';

import {I18nextProvider} from 'react-i18next';
import {i18n} from "./i18n";
import Lesson from "./src/views/lessonEntry";
import Startup from "./src/components/startup";
import LessonEntry from "./src/views/lessonEntry";
import QuizEntry from "./src/views/quizEntry";
import LessonPart from "./src/views/lessonParts";
import QuizSolutionResults from "./src/views/quizResults";
import CoursesMenu from "./src/views/coursesMenu";
import Login from "./src/views/login";
import Register from "./src/views/register";

const Stack = createStackNavigator();

const App = () => {
    let colorScheme = useColorScheme();

    return (
        <I18nextProvider i18n={i18n}>
            <SafeAreaProvider>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <PaperProvider>
                            <StatusBar barStyle="dark-content"/>
                            <Startup/>
                            <AppearanceProvider>
                                <NavigationContainer>
                                    <StackMenu/>
                                </NavigationContainer>
                            </AppearanceProvider>
                        </PaperProvider>
                    </ThemeProvider>
                </Provider>
            </SafeAreaProvider>
        </I18nextProvider>
    );
};

const theme = {
    Button: {
        titleStyle: {
            //color: 'red',
        },
    },
};

const StackMenu = () => {
    return <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
        <Stack.Screen
            name="Home"
            options={{title: 'Home'}}
            component={Home}/>
        <Stack.Screen
            name="LessonMenu"
            options={{title: 'Lectures and quizzes'}}
            component={LessonMenu}/>
        <Stack.Screen
            name="CoursesMenu"
            options={{title: 'Courses'}}
            component={CoursesMenu}/>
        <Stack.Screen
            name="LessonEntry"
            options={{title: 'Lesson'}}
            component={LessonEntry}/>
        <Stack.Screen
            name="QuizEntry"
            options={{title: 'Quiz'}}
            component={QuizEntry}/>
        <Stack.Screen
            name="QuizResults"
            options={{title: 'Results'}}
            component={QuizSolutionResults}/>
        <Stack.Screen
            name="LessonPart"
            options={{title: 'Lesson Part'}}
            component={LessonPart}/>
        <Stack.Screen
            name="Login"
            options={{title: 'Login'}}
            component={Login}/>
        <Stack.Screen
            name="Register"
            options={{title: 'Register'}}
            component={Register}/>
    </Stack.Navigator>
}

export default App;
