import React from 'react'
import ComponentTitle from '../../../components/componentTitle/ComponentTitle'
import Inputs from '../../../components/Inputs/Inputs'
import SubNav from '../../../components/subNav/SubNav'
import UserTabs from '../../../components/UserTabs/UserTabs'

export default function Users() {
  return (
    <>
    <SubNav currentComponent="User & Teams" />
    <ComponentTitle currentList="User & Teams"/>
    <Inputs/>
    <UserTabs/>
    </>
  )
}
