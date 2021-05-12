import React, {useContext, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {User} from '../redux/types/users';
import {Button, Header, ThemeContext, Tile} from "react-native-elements";
import { useTranslation } from "react-i18next";
import {Lesson} from "../redux/types/lesson";
import { ListItem, Avatar } from 'react-native-elements'
import {Course} from "../redux/types/Course";

declare const global: {HermesInternal: null | {}};

const CoursesMenu = ({navigation}:any) => {
  const { t } = useTranslation();

  const courses = useSelector((state: any) => state.courses.activeCourses as Course[]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Tile
              imageSrc={require('../static/images/class2.jpg')}
              title={t("Available Courses")}
              featured
              caption={t("choose one")}
          />

          <View>
            {
              courses && courses.map((l, i) => (
                  <ListItem key={i}
                            onPress={() => navigation.navigate('LessonMenu',{course:l})}
                            bottomDivider>
                    <Avatar source= {{uri: l.imageUrl}} />
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

export default CoursesMenu;
