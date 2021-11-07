import React from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"

const Success = () => {
  return (
    <Wrapper>
      <CongratsContainer>
        <CongratsMessage>
          Your ride has been succesfully submitted!
        </CongratsMessage>
        <CheckImage src="https://www.pngall.com/wp-content/uploads/5/Green-Checklist.png" />
      </CongratsContainer>
      <ConfirmButtonContainer>
        <Link href="/">
        <ConfirmButton>Back to home</ConfirmButton>
        </Link>
      </ConfirmButtonContainer>
    </Wrapper>
  )
}

export default Success

const Wrapper = tw.div`
flex flex-col h-screen
`

const CongratsContainer = tw.div`
flex-1 
flex 
flex-col 
h-1/2
`

const CongratsMessage = tw.div`
bg-gray-200
flex-1 
flex 
flex-col 
h-1/2
text-center
text-3xl
my-4
mx-4
py-64
font-bold
`

const ConfirmButton = tw.div`
bg-black 
text-white
my-4
mx-4
py-4
text-center
text-xl
cursor-pointer
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const CheckImage = tw.img`
object-contain
w-full
rounded-full
w-20
h-20
`