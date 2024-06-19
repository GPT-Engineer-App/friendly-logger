import { Box, Container, Text, VStack, Heading, Button, SimpleGrid, Flex, Icon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Box bg="blue.900" color="white" py={20}>
        <Container maxW="container.lg">
          <VStack spacing={6} textAlign="center">
            <Heading as="h1" size="2xl">Ett modernt fastighetssystem</Heading>
            <Text fontSize="lg">TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</Text>
            <Text>kontakt@tenfast.se</Text>
            <Text>08-199 552</Text>
            <Button colorScheme="whiteAlpha" size="lg">Kom igång</Button>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={20}>
        <VStack spacing={10}>
          <Heading as="h2" size="xl">Fastighetssystemet för din verksamhet</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Text fontSize="lg">Program för fastighetsägare, förvaltningsbolag och kommuner mm.</Text>
              <Text fontSize="lg">Webbaserat</Text>
              <Text>TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd dator eller mobilen!</Text>
              <Text fontSize="lg">Enkel prissättning</Text>
              <Text>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.</Text>
              <Text fontSize="lg">Automatisera din verksamhet</Text>
              <Text>Automatisk avisering via e-post eller traditionell post. Bankkoppling för inbetalningar, bokföring, mm.</Text>
              <Text fontSize="lg">Allt i ett</Text>
              <Text>Få all relevant data till din verksamhet samlat i ett system och få stenkoll på aviseringar.</Text>
            </Box>
            <Box>
              <Text fontSize="lg">Avtalskapare med mallar</Text>
              <Text>Välj bland färdiga mallar eller skapa egna. Signera digitalt med BankID eller med penna och papper.</Text>
              <Text fontSize="lg">Hyresgäst inloggning</Text>
              <Text>Hyresgästen får enkel inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.</Text>
              <Text fontSize="lg">Bostadskö</Text>
              <Text>Bostadskö för hyresgäster. Länka till ett formulär från er hemsida eller integrera med vårt API.</Text>
              <Text fontSize="lg">Bokföring</Text>
              <Text>Automatisk integration mot bokföringssystemet Fortnox, en helhetslösning till SE-fil. Hantera och moms och periodisering.</Text>
              <Text fontSize="lg">Statistik</Text>
              <Text>Få en översikt av hyresintäkterna och vilka hyresgäster som är problematiska.</Text>
              <Text fontSize="lg">Felanmälan</Text>
              <Text>Samla felanmälan från hyresgäster och sätt upp flöden för åtgärda med relevanta dokument.</Text>
              <Text fontSize="lg">Automatiska inbetalningar</Text>
              <Text>Ta emot betalningar via Bankgiro, Banköverföring, Autogiro eller Swish.</Text>
              <Text fontSize="lg">Öppet API</Text>
              <Text>Öppet API för att integrera med andra system.</Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>

      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <VStack spacing={10}>
            <Heading as="h2" size="xl">Passar stora och små</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box bg="white" p={10} boxShadow="md">
                <Heading as="h3" size="lg">Free</Heading>
                <Text>0 kr</Text>
                <Text>För privatpersoner och små företag med upp till 5 hyresobjekt.</Text>
                <Button colorScheme="blue" mt={4}>Kom igång</Button>
              </Box>
              <Box bg="white" p={10} boxShadow="md">
                <Heading as="h3" size="lg">Pro</Heading>
                <Text>10 kr / hyresobjekt / månad</Text>
                <Text>För privata fastighetsägare upp till 100 hyresobjekt.</Text>
                <Button colorScheme="blue" mt={4}>Kom igång</Button>
              </Box>
              <Box bg="black" color="white" p={10} boxShadow="md">
                <Heading as="h3" size="lg">Enterprise</Heading>
                <Text>Offert</Text>
                <Text>För fastighetsbolag eller förvaltare från 101 till tusentals hyresobjekt.</Text>
                <Button colorScheme="whiteAlpha" mt={4}>Kontakta oss</Button>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={20}>
        <VStack spacing={10}>
          <Heading as="h2" size="xl">Vanliga frågor</Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Vad är TenFAST fastighetssystem?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Är TenFAST webbaserat?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Ja, TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd dator eller mobilen!</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Vad kostar systemet?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Funkar fastighetssystemet på mobilen?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Ja, TenFAST fungerar på både dator och mobil.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Hur kan fastighetssystemet vara så billigt?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Varför kan jag använda det gratis?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>TenFAST är gratis för mindre hyresvärdar med upp till 5 hyresobjekt.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Vad räknas som ett hyresobjekt?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Ett hyresobjekt är en enhet som hyrs ut, till exempel en lägenhet eller ett kontor.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Vilka funktioner finns i fastighetsprogrammet?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>TenFAST erbjuder en mängd funktioner inklusive avtalskapare, hyresgäst inloggning, bokföring, statistik, och mycket mer.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Kan jag skapa hyresavtal och signera digitalt?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Ja, du kan skapa hyresavtal och signera digitalt med BankID eller med penna och papper.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Kan hyresgästen använda det?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Ja, hyresgästen får enkel inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Indexjustering av hyra</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>TenFAST stödjer indexjustering av hyra.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Hur gör jag med mina befintliga hyresavtal?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Du kan importera dina befintliga hyresavtal till TenFAST.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Kan jag få hjälp att komma i gång?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Ja, vi erbjuder support och utbildning för att hjälpa dig komma igång.</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default Index;