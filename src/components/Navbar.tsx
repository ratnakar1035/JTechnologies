import { Box, Flex, Image, Button, useColorModeValue, Stack, useColorMode, IconButton, useDisclosure, useBreakpointValue, Collapse } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';
import { motion, Variants } from 'framer-motion';
import { getImagePath } from '../utils/paths';

const navVariants: Variants = {
  hidden: { y: -100 },
  visible: { 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const MotionBox = motion(Box);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-64}
      spy={true}
      activeClass="active"
      className="nav-link"
      onClick={onToggle}
    >
      <Box
        px={2}
        py={1}
        rounded="md"
        cursor="pointer"
        _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
      >
        {children}
      </Box>
    </Link>
  );

  return (
    <MotionBox 
      bg={useColorModeValue('white', 'gray.900')} 
      px={4} 
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={1000}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link to="home" smooth={true} duration={500} offset={-64}>
          <Flex alignItems="center" cursor="pointer">
            <Image
              src={getImagePath('/logo.png')}
              alt="J Technologies Logo"
              height="40px"
              objectFit="contain"
            />
          </Flex>
        </Link>

        {/* Desktop Navigation */}
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={7}>
            <NavLink to="home">Home</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>

        {/* Mobile menu button */}
        <Flex display={{ base: 'flex', md: 'none' }} alignItems="center">
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
      </Flex>

      {/* Mobile Navigation */}
      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={useColorModeValue('white', 'gray.900')}
          p={4}
          display={{ md: 'none' }}
          spacing={4}
        >
          <NavLink to="home">Home</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <Button onClick={toggleColorMode} width="full">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Collapse>
    </MotionBox>
  );
} 