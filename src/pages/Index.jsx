import { Container, VStack, Box, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" py={10} bg="brand.100">
          <Heading as="h1" size="2xl" mb={4} color="brand.800">Welcome to My Portfolio</Heading>
          <Text fontSize="xl" color="brand.700">Showcasing my work and projects</Text>
        </Box>

        {/* About Me Section */}
        <Box id="about" py={10} bg="brand.50">
          <Heading as="h2" size="xl" mb={4} color="brand.800">About Me</Heading>
          <Text fontSize="lg" color="brand.700">
            Hello! I'm a passionate web developer with experience in creating dynamic and responsive websites. I love coding and continuously learning new technologies to improve my skills.
          </Text>
        </Box>

        {/* Projects Section */}
        <Box id="projects" py={10} bg="brand.100">
          <Heading as="h2" size="xl" mb={4} color="brand.800">Projects</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} bg="white" boxShadow="md">
              <Heading as="h3" size="md" mb={2} color="brand.700">Project 1</Heading>
              <Text color="gray.600">Brief description of project 1.</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} bg="white" boxShadow="md">
              <Heading as="h3" size="md" mb={2} color="brand.700">Project 2</Heading>
              <Text color="gray.600">Brief description of project 2.</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} bg="white" boxShadow="md">
              <Heading as="h3" size="md" mb={2} color="brand.700">Project 3</Heading>
              <Text color="gray.600">Brief description of project 3.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Contact Section */}
        <Box id="contact" py={10} bg="brand.50">
          <Heading as="h2" size="xl" mb={4} color="brand.800">Contact</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
            <GridItem colSpan={1}>
              <FormControl id="name" mb={4}>
                <FormLabel color="brand.700">Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email" mb={4}>
                <FormLabel color="brand.700">Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="message" mb={4}>
                <FormLabel color="brand.700">Message</FormLabel>
                <Textarea />
              </FormControl>
              <Button colorScheme="brand" size="lg">Send Message</Button>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="lg" color="brand.700">
                Feel free to reach out to me for any inquiries or collaborations. I'm always open to discussing new projects and opportunities.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;