import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Highlight,
  Text,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import ModulePDB from "../modules/modulePDB";

export default function CardTelemetria() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQyMSpohCQ8qcELCIBY5Wl6yKCuF1K4D1MbwUduQ4G-reanv6EQQfTEJHYNiMO-kUMCJs7w3ObnW41t/pub?gid=0&single=true&output=csv";

  const [data, setData] = useState([]);
  useEffect(() => {
    const response = fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true });
        console.log("HHHHHHHHHH", parsedData);
        setData(parsedData.data);
        console.log("PPPPPPPPPPPPPPPPPPPPPPP", parsedData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((status, index) => (
        <Flex
          key={index}
          p="10px"
          display={"inline-list-item"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card w="290px" h="400px">
            <CardHeader>
              <Heading size="md">{status.Estação}</Heading>
            </CardHeader>
            <Divider bg={"#000"} h="2px" />
            <CardBody>
              <Box
                display={"inline-list-item"}
                alignItems={"center"}
                justifyItems={"center"}
              >
                <Text fontSize={"18px"}>Status: &nbsp;</Text>
                <Highlight
                  query="Fora do Ar"
                  styles={{ px: "2", py: "1", rounded: "full", bg: "red.500" }}
                >
                  {status.Status}
                </Highlight>
              </Box>
              <Divider mt="2px" />
              <Box
                display={"inline-list-item"}
                alignItems={"center"}
                justifyItems={"center"}
              >
                <Text fontSize={"18px"}>Ação: &nbsp;</Text>
                <Text fontSize={"14px"}>
                  {status.Ação === "" ? "" : status.Ação}
                </Text>
              </Box>
              <Divider />
              <Box alignItems={"center"} justifyItems={"center"}>
                <Text fontSize={"20px"}>Descrição &nbsp;</Text>
                <Text fontSize={"14px"}>
                  {status.Descrição_Problema_Observações === ""
                    ? ""
                    : status.Descrição_Problema_Observações}
                </Text>
              </Box>
            </CardBody>
            <Divider bg={"#000"} h="2px" />
            <CardFooter>
              <ModulePDB />
            </CardFooter>
          </Card>
        </Flex>
      ))}
    </>
  );
}
