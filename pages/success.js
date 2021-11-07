import React from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"

const Success = () => {
  return (
    <Wrapper>
      <ConfirmButtonContainer>
        <Link href="/">
        <ConfirmButton>Back to home</ConfirmButton>
        </Link>
      </ConfirmButtonContainer>
    </Wrapper>
  )
}

export default Success

const Wrapper = tw.div``

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