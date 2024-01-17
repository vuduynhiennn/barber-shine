// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAtfdHRzhii7_rbLTw8alrEYpBWSuLDx8M',
  authDomain: 'zuka-salon.firebaseapp.com',
  projectId: 'zuka-salon',
  storageBucket: 'zuka-salon.appspot.com',
  messagingSenderId: '622416301120',
  appId: '1:622416301120:web:e075c0b0cd55b5737f63a5',
  measurementId: 'G-W9YTZ2P0VT',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const window_: any = window

export function signInByPhone(phoneNumber: string, code?: string) {
  const auth = getAuth()

  window_.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
    size: 'invisible',
    callback: async (response: any) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      auth.languageCode = 'vi'
      console.log({ response })
    },
  })

  const appVerifier = window_.recaptchaVerifier

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      console.log({ confirmationResult })
      // window_.confirmationResult = confirmationResult
    })
    .catch((error: any) => {
      console.log({ error })
      // Error; SMS not sent
      // ...
    })

  appVerifier.clear()
}
