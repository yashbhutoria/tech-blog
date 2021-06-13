import { ChakraProvider } from "@chakra-ui/react"
import Blog from "./components/Blog"
import React from "react"

function MyApp() {
    return (
        <ChakraProvider>
            <Blog></Blog>
        </ChakraProvider>
    )
}

export default MyApp