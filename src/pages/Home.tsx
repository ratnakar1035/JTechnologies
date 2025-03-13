import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import { FaShieldAlt, FaVideo, FaTools, FaClock } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ElementType;
  delay: number;
}

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);

function Feature({ title, text, icon, delay }: FeatureProps) {
  return (
    <MotionVStack
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'} textAlign="center">{text}</Text>
    </MotionVStack>
  );
}

export default function Home() {
  return (
    <Box as="section">
      {/* Hero Section */}
      <MotionBox
        bg={useColorModeValue('blue.50', 'blue.900')}
        color={useColorModeValue('gray.700', 'white')}
        py={20}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container maxW={'5xl'}>
          <MotionVStack
            spacing={6}
            textAlign="center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionHeading
              fontWeight={800}
              fontSize={{ base: '3xl', sm: '5xl', md: '7xl' }}
              lineHeight={'110%'}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Text as={'span'} color={'blue.500'}>J</Text>
              {' Technologies'}
            </MotionHeading>
            <MotionHeading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Securing Your Space{' '}
              <Text as={'span'} color={'blue.500'}>
                With Advanced Technology
              </Text>
            </MotionHeading>
            <MotionBox
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Text color={'gray.500'} maxW={'3xl'}>
                We provide state-of-the-art CCTV and fire safety solutions to protect what matters most.
                Our expert team ensures professional installation and 24/7 support for your security needs.
              </Text>
            </MotionBox>
            <MotionBox
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                as={Link}
                to="contact"
                smooth={true}
                duration={500}
                offset={-64}
                colorScheme={'blue'}
                rounded={'full'}
                px={6}
                size="lg"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'all 0.2s',
                  boxShadow: 'lg'
                }}
              >
                Get Started
              </Button>
            </MotionBox>
          </MotionVStack>
        </Container>
      </MotionBox>

      {/* Features Section */}
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          <Feature
            icon={FaShieldAlt}
            title={'Advanced Security'}
            text={'State-of-the-art CCTV systems with HD quality surveillance'}
            delay={0.2}
          />
          <Feature
            icon={FaVideo}
            title={'24/7 Monitoring'}
            text={'Round-the-clock surveillance and recording capabilities'}
            delay={0.4}
          />
          <Feature
            icon={FaTools}
            title={'Professional Installation'}
            text={'Expert installation by certified technicians'}
            delay={0.6}
          />
          <Feature
            icon={FaClock}
            title={'Quick Response'}
            text={'Immediate support and maintenance services'}
            delay={0.8}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
} 