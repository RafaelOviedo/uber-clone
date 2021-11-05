import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import { useEffect } from 'react'
import Map from "./components/Map"
import Link from "next/link"

export default function Home() {

  return (
    <Wrapper >
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="data:image/png;base64,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" />
          <Profile>
            <Name>
              Name name
            </Name>
            <UserImage  src="https://media-exp1.licdn.com/dms/image/C4E03AQGdYhue0Z59MQ/profile-displayphoto-shrink_800_800/0/1610410918761?e=1641427200&v=beta&t=DSn78a_4zL-WAWAD0O1xyznriYQXmrxuJa7dKchYEUQ"/>
          </Profile>
        </Header>
        <ActionButtons>

          <Link href="/search">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          </Link>
          <Link href="/search">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          </Link>
          <Link href="/search">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
          </Link>

        </ActionButtons>
          <InputButton>
            Where to?
          </InputButton>

      </ActionItems>
    </Wrapper>
  )
}

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
  h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButtons = tw.div`
  flex
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