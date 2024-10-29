import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react'
const Login = () => {
  return (
    <div>
      <SignedOut >
        <SignInButton className="px-3 py-1 text-white bg-orange-400 rounded-lg hover:bg-orange-500 font-light transition duration-300" >
            Sign in
        </SignInButton >
      </SignedOut>
      <SignedIn >
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default Login
