import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {User} from '../redux/types/users';
import {useTranslation} from "react-i18next";
import {Button, Card, Divider, Icon, ListItem, Text} from 'react-native-elements'
import {Lesson, Part} from "../redux/types/lesson";
import {updateStoredActiveLesson} from "../redux/actions/activeLesson.actions";
import {Progress} from "../redux/types/progress";
import {updateProgressStartLesson} from "../services/progressLocalDbService";
import {updateStoredProgress} from "../redux/actions/progress.actions";
import HTML from "react-native-render-html";

const LessonPart = ({route, navigation}: any) => {
    const {t} = useTranslation();
    const dispatch = useDispatch()
    let {lesson} = route.params
    let {partIndex} = route.params
    lesson = lesson as Lesson
    partIndex = partIndex as number
    const part = lesson.parts[partIndex] as Part

    const user = useSelector((state: any) => state.user as User);
    const progress = useSelector((state: any) => state.progress as Progress);

    useEffect(() => {
        console.log(lesson.parts.length)
        updateProgress(progress, lesson)
    }, [lesson]);

    const updateProgress = async (progress: Progress, lesson: Lesson) => {
        await updateProgressStartLesson(progress, lesson)
        dispatch(updateStoredProgress(progress))
    }
    const navigationCard = () => {
        return <Card>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button type="outline"
                            disabled={partIndex==0}
                            onPress={() => navigation.navigate('LessonPart', {lesson: lesson, partIndex:partIndex -1})}
                            title={t('back')}/>
                </View>
                <View style={styles.buttonContainer}>

                    <Text style={{textAlign: "center"}}>{partIndex +1}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button type="outline"
                            disabled={partIndex >lesson.parts.length-2}
                            onPress={() => navigation.navigate('LessonPart', {lesson: lesson, partIndex:partIndex +1})}
                            title={t('next')}/>
                </View>
            </View>
        </Card>
    }

    const partCard = () => {
        return <Card>
            <Card.Image source={{uri: part.headImageUrl}}/>
            <Card.Title>{part.title}</Card.Title>
            <Text style={{textAlign: "center"}}>
                {part.subtitle}
            </Text>
        </Card>
    }

    const contentCard = () => {
        return <Card>
            <HTML source={{ html: part.content }} contentWidth={300} />
        </Card>
    }


    return (
        <>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    {lesson && part && <View>
                        {navigationCard()}
                        {partCard()}
                        {contentCard()}
                        {navigationCard()}

                    </View>
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    );


};
const styles = StyleSheet.create({
    scrollView: {},
    body: {
        padding: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    }
});

export default LessonPart;
