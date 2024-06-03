import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet",
    price: "$499",
    image: "/images/tablet.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">Contact</Link>
          <FaShoppingCart />
        </HStack>
      </Flex>

      <Box as="main" mt={8}>
        <Heading as="h1" size="2xl" mb={8} textAlign="center">Welcome to ElectroShop</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>{product.name}</Heading>
                <Text fontSize="md" mb={4}>{product.description}</Text>
                <Text fontSize="xl" fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;