import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import { useEffect, useState } from 'react'
import Map from "./components/Map"
import Link from "next/link"
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/router"

export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoUrl,
        }) 
      } else {
          setUser(null)
          router.push("/login")
        }
    })
  })

  return (
    <Wrapper >
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl}/>
            <LogOut onClick={() => signOut(auth)}>Log out</LogOut>
          </Profile>
        </Header>
        <ActionButtons>

          <Link href="/search">
          <ActionButton1>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton1>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>

        </ActionButtons>
          <InputButton>
            Where to?
          </InputButton>

      </ActionItems>
    </Wrapper>
  )
}

const LogOut = tw.div`
cursor-pointer
text-sm
underline
`

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
 flex justify-between items-center
`

const UberLogo = tw.img`
  h-28 
`

const Profile = tw.div`
 flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
  h-12 
  w-12 
  rounded-full 
  border 
  border-gray-200 
  p-px 
`

const ActionButtons = tw.div`
  flex
`

const ActionButton1 = tw.div`
  flex 
  bg-gray-200 
  flex-1 
  m-1 
  h-32 
  items-center 
  flex-col 
  justify-center 
  rounded-lg 
  transform hover:scale-105
  transition
  text-xl
  cursor-pointer
`

const ActionButton = tw.div`
  flex 
  bg-gray-200 
  flex-1 
  m-1 
  h-32 
  items-center 
  flex-col 
  justify-center 
  rounded-lg 
  transform hover:scale-105
  transition
  text-xl
  opacity-50
`

const ActionButtonImage = tw.img`
  h-3/5 
`

const InputButton = tw.div`
  h-20
  bg-gray-200
  text-2xl
  p-4
  flex items-center 
  mt-8
`