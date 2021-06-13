import React from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spacer,
    Heading,
    Box, Flex
} from "@chakra-ui/react"
import SearchBar from "./SearchBar"

function Header() {
    return (
        <Flex bg="#4A5568" w="100%" p={4} color="white" borderRadius="10px" >
            <Box>
                <Heading size="md">Tech Blog</Heading>
            </Box>
            <Spacer></Spacer>
            <Box>
                <SearchBar></SearchBar>
            </Box>
            <Spacer></Spacer>
            <Box>
                <Breadcrumb fontWeight="medium" fontSize="sm">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">YouTube</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Twitter</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </Flex>
    )
}


export default Header;

