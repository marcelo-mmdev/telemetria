"use client";

import { Input } from "@chakra-ui/react";

export default function SearchInput() {


  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }

  return (
    <>
      <Input
        // as={DebounceInput}
        minLength={4}
        mr="20px"
        // debounceTimeout={900}
        type="text"
        borderRadius="10px"
        h="30px"
        w="20%"
        bg="#FFFFFF"
        color="#000"
        border="1px"
        borderColor="blue.400"
        placeholder="Pesquisar"
        onChange={handleChange}
      />
    </>
  );
}
