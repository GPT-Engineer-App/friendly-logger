import { Box, Flex, Text, Button, Stack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="white" px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="xl" fontWeight="bold">TenFAST</Text>
        </Box>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Link href="#fastighetssystem">Fastighetssystem</Link>
            <Link href="#om-oss">Om oss</Link>
            <Link href="#pris">Pris</Link>
            <Link href="#support">Support</Link>
            <Button variant="outline">Logga in</Button>
            <Button colorScheme="blue">Kom igång</Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;