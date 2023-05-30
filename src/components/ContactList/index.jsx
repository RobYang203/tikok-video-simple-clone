import React from "react";
import { array, element } from "prop-types";
import { Box, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import TableHeader from "components/TableHeader";

const headers = [
  {
    name: "Name",
  },
  {
    name: "Email",
  },
  {
    name: "Telegram",
  },
];

const styles = {
  root: {
    border: "1px solid",
    borderColor: "secondary.500",
    borderRadius: "10px",
    px: "16px",
  },
  table: {
    maxH: "369px",
    overflow: "auto",
  },
  row: {
    "&>*": {
      py: "8px",
    },
  },
  footer: {
    padding: ["32px", "16px"],
  },
  restButton: {
    w: "92px",
  },
};

function ContactList({ list, footer }) {
  return (
    <Box sx={styles.root}>
      <TableContainer sx={styles.table}>
        <Table>
          <TableHeader headers={headers} />
          <Tbody>
            {list.map(({ Name, Email, Telegram }, index) => {
              return (
                <Tr sx={styles.row} key={index} textStyle="body1">
                  <Td>{Name}</Td>
                  <Td>{Email}</Td>
                  <Td>{Telegram}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {footer}
    </Box>
  );
}

ContactList.propTypes = {
  list: array.isRequired,
  footer: element.isRequired,
};

export default ContactList;
