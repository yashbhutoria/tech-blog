import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"
import { Box, VStack, StackDivider } from "@chakra-ui/react"

export default function Blog() {
    return (
        <Box bg="#EDF2F7" height="100%" width="100%">
            <VStack
                divider={<StackDivider/>}
                spacing={10}
                align="strech"
            >
                <Box><Header></Header></Box>
                <Box><Body></Body></Box>
                <Box><Footer></Footer></Box>
            </VStack>
        </Box>
    )
}