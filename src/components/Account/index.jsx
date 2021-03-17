import React from 'react'

import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'

const AccountPage = () => {
  return (
    <div>
      <h2>Account</h2>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </div>
  )
}

export default AccountPage
