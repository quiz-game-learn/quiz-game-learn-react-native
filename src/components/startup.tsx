import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from "react-i18next";
import {fetchProcessData} from "../redux/actions/progress.actions";
import {fetchLessonsData} from "../redux/actions/lections.actions";
import {fetchCoursesData} from "../redux/actions/courses.actions";

const Startup = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProcessData)
        dispatch(fetchLessonsData)
        dispatch(fetchCoursesData)
    }, []);

    return (
        <>
        </>
    );
};


export default Startup;
