import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getUserData } from "./src/store/actions"

const Wrapper = ({ children, getUserData }) => {
  useEffect(() => {
    getUserData()
  }, [getUserData])
  return (
    <>
      {children}
    </>
  )
}
export default connect(
  (state) => ({
    themeType: state.app.themeType
  }),
  (dispatch) => ({
    getUserData: () => dispatch(getUserData()),
  }),
)(Wrapper)
