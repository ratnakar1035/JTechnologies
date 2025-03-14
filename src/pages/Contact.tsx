import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  details: string;
  link?: string;
  delay: number;
}

export default function Contact() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Replace these with your actual values
  const EMAIL_SERVICE_ID = 'service_769gfmt';
  const EMAIL_TEMPLATE_ID = 'template_w50flb4';
  const EMAIL_PUBLIC_KEY = 'mNZMSZf0yMn8SeoVm';
  const WHATSAPP_NUMBER = '9966754777'; // Replace with your WhatsApp number
  const EMAIL_ID = 'ratnakar9010@gmail.com'; // Replace with your email

  const contactInfo: ContactInfo[] = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+91-9966754777',
      link: 'tel:+919966754777',
      delay: 0.2,
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'contact@jtechnologies.com',
      link: 'mailto:contact@jtechnologies.com',
      delay: 0.4,
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: 'Poranki Center, Andhra Pradesh, India',
      delay: 0.6,
    },
  ];

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your name',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!validatePhoneNumber(formData.phone)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid Indian phone number',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!formData.subject.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a subject',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your message',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
    //   Send email using EmailJS
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_mail: formData.email,
          phone_number: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        EMAIL_PUBLIC_KEY
      );

      // Send WhatsApp message
    //   const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    //   const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    //   window.open(whatsappUrl, '_blank');

      toast({
        title: 'Success',
        description: 'Your message has been sent successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box as="section" py={20}>
      <Container maxW="6xl">
        <MotionVStack
          spacing={12}
          align="stretch"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionVStack spacing={4} align="center">
            <Heading textAlign="center">Contact Us</Heading>
            <Text color="gray.600" textAlign="center" maxW="2xl">
              Get in touch with us for any inquiries about our security solutions.
              We're here to help protect what matters most to you.
            </Text>
          </MotionVStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {contactInfo.map((info, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="xl"
                boxShadow="lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: info.delay }}
                viewport={{ once: true }}
              >
                <VStack spacing={4} align="center">
                  <Icon as={info.icon} w={8} h={8} color="blue.500" />
                  <Text fontWeight="bold">{info.title}</Text>
                  {info.link ? (
                    <Text
                      as="a"
                      href={info.link}
                      color="blue.500"
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {info.details}
                    </Text>
                  ) : (
                    <Text>{info.details}</Text>
                  )}
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          <MotionBox
            as="form"
            onSubmit={handleSubmit}
            bg={useColorModeValue('white', 'gray.800')}
            p={8}
            rounded="xl"
            boxShadow="lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="98765 43210"
                  pattern="[6-9][0-9]{9}"
                />
                <Text fontSize="sm" color="gray.500" mt={1}>
                  Enter a valid Indian mobile number
                </Text>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this about?"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={4}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                width="full"
                isLoading={isLoading}
                loadingText="Sending..."
              >
                Send Message
              </Button>
            </VStack>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  );
} 