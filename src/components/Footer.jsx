import { Box, Text, Stack, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100" py={10}>
      <Stack spacing={4} align="center">
        <Text>Logga in</Text>
        <Text>kontakt@tenfast.se</Text>
        <Text>08-199 552</Text>
        <Text>Sankt Eriksgatan 114, 113 32 Stockholm</Text>
        <Text>© TenFAST AB 2024</Text>
      </Stack>
    </Box>
  );
};

export default Footer;