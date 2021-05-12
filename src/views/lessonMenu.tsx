import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {User} from '../redux/types/users';
import {Button, Header, ThemeContext, Tile} from "react-native-elements";
import { useTranslation } from "react-i18next";
import {Lesson} from "../redux/types/lesson";
import { ListItem, Avatar } from 'react-native-elements'
import {getLessonsInCourse} from "../services/dbFirestoreService";

declare const global: {HermesInternal: null | {}};

const LessonMenu = ({route, navigation}:any) => {
  const { t } = useTranslation();
  let {course} = route.params

  const user = useSelector((state: any) => state.user as User);
  const allLessons = useSelector((state: any) => state.lessons.activeLessons as Lesson[]);
  const { theme } = useContext(ThemeContext);
  const [lessons, setLessons] = useState(allLessons as Lesson[])

  useEffect(() => {
    console.log(course.imageUrl)
    if (course && course.id) {
      getLessonsInCourse(10000, 0, course.id).then((lessons)=> {
        setLessons(lessons)
      })
    }
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {course && course.imageUrl &&
          <Tile
            imageSrc = {{uri: course.imageUrl}}
            title="Available Lections"
            featured
            caption="choose one"
            />
          }

          {!course || !course.imageUrl &&
          <Tile
              imageSrc={require('../static/images/class2.jpg')}
              title="Available Lections"
              featured
              caption="choose one"
          />
          }


          <View>
            {
              allLessons.map((l, i) => (
                  <ListItem key={i}
                            onPress={() => navigation.navigate('LessonEntry',{lesson:l})}
                            bottomDivider>
                    <Avatar rounded source={{ uri: l.imageUrl }} />
                    <ListItem.Content>
                      <ListItem.Title>{l.title}</ListItem.Title>
                      <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
              ))
            }
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    padding:10
  },
});

export default LessonMenu;
