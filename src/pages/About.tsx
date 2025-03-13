import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaShieldAlt, FaUserTie, FaClock, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';

interface ValueProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);

function Value({ icon, title, description, delay }: ValueProps) {
  return (
    <MotionHStack
      align="start"
      spacing={4}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Icon as={icon} boxSize={8} color="blue.500" />
      <VStack align="start" spacing={2}>
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
    </MotionHStack>
  );
}

export default function About() {
  const values = [
    {
      icon: FaShieldAlt,
      title: 'Trusted Security',
      description: 'We prioritize your safety with cutting-edge security solutions and reliable service.',
      delay: 0.2
    },
    {
      icon: FaUserTie,
      title: 'Professional Team',
      description: 'Our certified experts bring years of experience in security system installation.',
      delay: 0.4
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance ensures your security systems are always operational.',
      delay: 0.6
    },
    {
      icon: FaTools,
      title: 'Quality Installation',
      description: 'We use only the best equipment and follow industry-leading installation practices.',
      delay: 0.8
    }
  ];

  return (
    <Box as="section" py={10}>
      <Container maxW="6xl">
        {/* Company Introduction */}
        <MotionVStack
          spacing={8}
          align="center"
          mb={16}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading textAlign="center">About Our Company</Heading>
          <Text color="gray.600" textAlign="center" maxW="2xl">
            With over a decade of experience in security solutions, we've been protecting homes and businesses
            with state-of-the-art CCTV and fire safety systems. Our commitment to excellence and customer
            satisfaction has made us a trusted name in the industry.
          </Text>
        </MotionVStack>

        {/* Company Image */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80"
            alt="Company Office"
            width="100%"
            height="400px"
            objectFit="cover"
            borderRadius="lg"
          />
        </MotionBox>

        {/* Our Values */}
        <MotionVStack
          spacing={12}
          align="stretch"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionVStack spacing={4} align="center">
            <Heading size="lg">Our Values</Heading>
            <Text color="gray.600" textAlign="center" maxW="2xl">
              We believe in providing top-notch security solutions while maintaining the highest standards
              of professionalism and customer service.
            </Text>
          </MotionVStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {values.map((value, index) => (
              <Value key={index} {...value} />
            ))}
          </SimpleGrid>
        </MotionVStack>

        {/* Testimonials Section */}
        <Testimonials />
      </Container>
    </Box>
  );
} 