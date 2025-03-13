import { Box, Container, Heading, Text, Flex, Avatar, Icon, VStack, useColorModeValue } from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  isHovered: boolean;
}

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

function TestimonialCard({ quote, author, role, company, image, isHovered }: TestimonialProps) {
  return (
    <MotionFlex
      direction="column"
      bg={useColorModeValue('white', 'gray.800')}
      p={6}
      rounded="xl"
      boxShadow="lg"
      position="relative"
      overflow="hidden"
      minW="350px"
      mx={2}
      animate={{
        x: isHovered ? 0 : [0, -1000],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "xl",
        transition: { duration: 0.2 }
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        bg: 'blue.500',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease-in-out'
      }}
      _hover={{
        _before: {
          transform: 'scaleX(1)'
        }
      }}
    >
      <Icon as={FaQuoteLeft} w={8} h={8} color="blue.500" mb={4} />
      <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.300')} mb={6}>
        "{quote}"
      </Text>
      <Flex align="center" mt="auto">
        <Avatar size="md" name={author} src={image} mr={4} />
        <Box>
          <Text fontWeight="bold" color={useColorModeValue('gray.900', 'white')}>
            {author}
          </Text>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            {role} at {company}
          </Text>
        </Box>
      </Flex>
    </MotionFlex>
  );
}

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      quote: "J Technologies transformed our security infrastructure. Their CCTV systems are cutting-edge and the installation was seamless.",
      author: "Sarah Johnson",
      role: "Security Director",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "The fire safety systems they installed exceeded our expectations. Their team's expertise and professionalism are unmatched.",
      author: "Michael Chen",
      role: "Facility Manager",
      company: "Global Enterprises",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "24/7 support and quick response times make J Technologies our trusted security partner. Their solutions are reliable and effective.",
      author: "Emily Rodriguez",
      role: "Operations Director",
      company: "Secure Solutions Ltd",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "The integration of their security systems with our existing infrastructure was flawless. Their technical expertise is outstanding.",
      author: "David Kim",
      role: "IT Director",
      company: "Innovate Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "Their attention to detail and customer service is exceptional. They truly understand our security needs and deliver beyond expectations.",
      author: "Lisa Thompson",
      role: "Property Manager",
      company: "Premier Estates",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <Box py={20}>
      <VStack spacing={16} align="stretch">
        <MotionVStack
          spacing={8}
          align="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading
            textAlign="center"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
          >
            What Our Clients Say
          </Heading>
          <Text
            color={useColorModeValue('gray.600', 'gray.400')}
            textAlign="center"
            maxW="2xl"
            fontSize="lg"
          >
            Discover why businesses trust J Technologies for their security needs.
            Our commitment to excellence has earned us the trust of clients worldwide.
          </Text>
        </MotionVStack>

        <Box
          overflowX="hidden"
          position="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Flex
            gap={4}
            py={4}
            style={{
              width: 'fit-content'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} isHovered={isHovered} />
            ))}
            {/* Duplicate testimonials for seamless scrolling */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`duplicate-${index}`} {...testimonial} isHovered={isHovered} />
            ))}
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
} 