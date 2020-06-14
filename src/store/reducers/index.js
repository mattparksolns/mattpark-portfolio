import { combineReducers } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserData = createAsyncThunk('app/getUserData', async () => {
    const ipv4 = await axios.get('https://api.ipify.org?format=json')
    const ipv6 = await axios.get('https://api6.ipify.org?format=json')
    const geoData = await axios.get(
        'https://geolocation-db.com/json/6db070f0-7c27-11ea-8264-e974339fc182'
    )
    return {
        ipv4: ipv4.data,
        ipv6: ipv6.data,
        geoData: geoData.data,
    }
})

const app = createSlice({
    name: 'app',
    initialState: {
        themeType: '',
        userData: {
            ipv4: '',
            ipv6: '',
            geoData: {},
        },
    },
    reducers: {
        setThemeType(state, action) {
            state.themeType = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.userData = action.payload
        })
    },
})
export const { setThemeType } = app.actions
export default combineReducers({ app: app.reducer })
