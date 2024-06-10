import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Highlight,
  SimpleGrid,
  Table,
  Text,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import generatePDF, { Margin } from "react-to-pdf";

export default function RelatorioCompletoPlanilha() {
  const recuperarConteudoParaPDF = () => document.getElementById("conteudo");
  const personalizacao = {
    // Baixar/Salvar = save / Abrir no navegador = open
    method: "open",
    page: {
      // Definir a margem: SMALL ou MEDIUM
      margin: Margin.MEDIUM,
      // Formato da página: A4 ou letter
      format: "A4",
      // Orientação do arquivo: portrait ou landscape
      orientation: "portrait",
    },
  };
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQyMSpohCQ8qcELCIBY5Wl6yKCuF1K4D1MbwUduQ4G-reanv6EQQfTEJHYNiMO-kUMCJs7w3ObnW41t/pub?gid=0&single=true&output=csv";

  const [data, setData] = useState([]);
  useEffect(() => {
    const response = fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true });
        setData(parsedData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text>Planilha Completa</Text>
        <Button
          bg="#0000FF"
          color="#fff"
          mr="20px"
          _hover={{
            bg: "blue.200",
            color: "white",
          }}
          onClick={() => generatePDF(recuperarConteudoParaPDF, personalizacao)}
        >
          Gerar PDF
        </Button>
      </Box>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="blue">
          <TableCaption>Relatorio Completo da Planilha</TableCaption>
          <Thead>
            <Tr>
              <Th>Estação</Th>
              <Th>Status</Th>
              <Th>Ação</Th>
              <Th>OBS</Th>
            </Tr>
          </Thead>
          <Tbody id="conteudo">
            {data.map((status, index) => (
              <Tr key={index}>
                <Td>{status.Estação}</Td>
                <Td>
                  <Highlight
                    query="Fora do Ar"
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "red.500",
                    }}
                  >
                    {status.Status}
                  </Highlight>
                </Td>
                <Td>{status.Ação === "" ? "" : status.Ação}</Td>
                <Td>
                  {status.Descrição_Problema_Observações === ""
                    ? "----------"
                    : status.Descrição_Problema_Observações}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
