import { Box, Container, Heading, Text, SimpleGrid, Image, Stack, Button } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay: number;
}

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

function ServiceCard({ title, description, image, delay }: ServiceCardProps) {
  return (
    <MotionBox
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ transform: 'scale(1.02)', transition: 'all 0.2s' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Image src={image} alt={title} height="200px" width="100%" objectFit="cover" />
      <Box p={6}>
        <Heading size="md" mb={2}>{title}</Heading>
        <Text color="gray.600" mb={4}>{description}</Text>
        <Button
          as={Link}
          to="contact"
          smooth={true}
          duration={500}
          offset={-64}
          rightIcon={<FaArrowRight />}
          colorScheme="blue"
          variant="outline"
          cursor="pointer"
        >
          Learn More
        </Button>
      </Box>
    </MotionBox>
  );
}

export default function Services() {
  const services = [
    {
      title: 'CCTV Installation',
      description: 'State-of-the-art surveillance systems with HD cameras, night vision, and remote monitoring capabilities.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
      delay: 0.2
    },
    {
      title: 'Fire Alarm Systems',
      description: 'Advanced fire detection and alarm systems to protect your property and ensure safety compliance.',
      image: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?auto=format&fit=crop&w=800&q=80',
      delay: 0.4
    },
    {
      title: 'Access Control',
      description: 'Secure entry systems with key cards, biometric readers, and integrated security management.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      delay: 0.6
    },
    {
      title: 'Maintenance & Support',
      description: '24/7 technical support and regular maintenance to ensure your security systems operate at peak performance.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80',
      delay: 0.8
    }
  ];

  return (
    <Box as="section" py={10}>
      <Container maxW="6xl">
        <MotionStack
          spacing={8}
          align="center"
          mb={12}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading textAlign="center">Our Services</Heading>
          <Text color="gray.600" textAlign="center" maxW="2xl">
            We provide comprehensive security solutions to protect your property and ensure peace of mind.
            Our expert team delivers professional installation and ongoing support for all your security needs.
          </Text>
        </MotionStack>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 