import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {usersReducer, UsersReducerActionType} from './f1-reducers/usersReducer'

const rootReducer = combineReducers({
    users: usersReducer,

})
export const store = createStore(rootReducer, applyMiddleware(thunk))

//Типизация стора
export type AppRootStateType = ReturnType<typeof rootReducer>

//Типизация санок
export type AppActionType = UsersReducerActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

//Свой диспатч и селектор
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => {
    return useDispatch() as ThunkDispatch<AppRootStateType, unknown, AppActionType>
}

//@ts-ignore
window.store = store