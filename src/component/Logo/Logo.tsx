import {Image, useBreakpointValue } from "@chakra-ui/react"

const Logo = ()=>{

  const imgSrc = useBreakpointValue({
    base: '/mobile-logo.svg',
    md: '/logo.svg'
  })

  return <Image src={imgSrc} alt="Tigerhall logo"/>

}

export default Logo;