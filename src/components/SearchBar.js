import React from "react"
import { Input, IconButton, Flex } from "@chakra-ui/react"
import { FaSearch } from 'react-icons/fa';
function SearchBar() {
    return (
        <Flex>
            <Input type="text"></Input>
            <IconButton aria-label="Search Blog" icon={<FaSearch />} />
        </Flex>
    )
}

export default SearchBar