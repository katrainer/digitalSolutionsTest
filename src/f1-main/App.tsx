import React, {useEffect} from 'react';
import s from './App.module.scss'
import {Header} from './f1-ui/f2-common/f1-header/Header';
import {Navigate, Route, Routes} from 'react-router-dom';
import {routesPath} from './f1-ui/f1-routes/routesPath';
import {UsersPage} from '../f2-features/f1-usersPage/UsersPage';
import {useAppDispatch} from './f2-store/store';
import {setUsersTC} from './f2-store/f1-reducers/usersReducer';
import {UserPage} from '../f2-features/f2-userPage/UserPage';
import {PostsPage} from '../f2-features/f3-postsPage/PostsPage';
import {PostPage} from '../f2-features/f4-postPage/PostPage';

export const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUsersTC())
    }, [])

    return <div className={s.mainContainer}>
        <Header/>
        <div className={s.contentContainer}>
            <Routes>
                <Route path={'/'} element={<Navigate to={routesPath.users}/>}></Route>
                <Route path={routesPath.users} element={<UsersPage/>}></Route>
                <Route path={routesPath.user} element={<UserPage/>}></Route>
                <Route path={routesPath.userPosts} element={<PostsPage/>}></Route>
                <Route path={routesPath.userPost} element={<PostPage/>}></Route>
            </Routes></div>
    </div>
}