import React, { useState } from 'react'

import { withFirebase } from '../Firebase'

const PasswordChangeForm = ({ firebase }) => {
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [error, setError] = useState(null)

  function cleanUp() {
    setPasswordOne('')
    setPasswordTwo('')
  }

  function onSubmit(event) {
    firebase
      .doPasswordUpdate(passwordOne)
      .then(() => cleanUp())
      .catch((error) => setError(error))

    event.preventDefault()
  }

  function isInvalid() {
    if (passwordOne !== passwordTwo || passwordOne === '') return true
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={(e) => setPasswordOne(e.target.value)}
        type="password"
        placeholder="New Password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={(e) => setPasswordTwo(e.target.value)}
        type="password"
        placeholder="Confirm New Password"
      />
      <button disabled={isInvalid()} type="submit">
        Reset My Password
      </button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

export default withFirebase(PasswordChangeForm)
