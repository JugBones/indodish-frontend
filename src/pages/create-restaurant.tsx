import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import {
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Spinner,
  Box,
} from '@chakra-ui/react';
import BatikBackground from '../../public/batik-background.webp';
import styles from '@/styles/pages/CreateRestaurant.module.scss';
import IndODishLogo from '@/components/IndODishLogo';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false,
});

export default function CreateRestaurant() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateRestaurant = () => {};
  return (
    <>
      <Head>
        <title>IndODish - Create Restaurant</title>
      </Head>
      <main className={styles.container}>
        <IndODishLogo color={'#ffffff'} />
        <FormControl>
          <FormLabel mt={4} style={{ color: '#ffffff' }}>
            Restaurant Name
          </FormLabel>
          <Input
            mt={2}
            size='lg'
            type='text'
            variant='filled'
            value={name}
            onChange={(e) => setName(e.target.value)}
            focusBorderColor='#e37300'
            placeholder='Restaurant Name'
            _focus={{
              backgroundColor: '#ffffff',
            }}
          />
          <FormLabel mt={4} style={{ color: '#ffffff' }}>
            Phone Number
          </FormLabel>
          <Input
            mt={2}
            size='lg'
            type='text'
            variant='filled'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            focusBorderColor='#e37300'
            placeholder='Restaurant Name'
            _focus={{
              backgroundColor: '#ffffff',
            }}
          />
          <FormLabel mt={4} style={{ color: '#ffffff' }}>
            Description
          </FormLabel>
          <Textarea
            mt={2}
            size='lg'
            variant='filled'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            focusBorderColor='#e37300'
            placeholder='Restaurant description...'
            _focus={{
              backgroundColor: '#ffffff',
            }}
          />
          <FormLabel mt={4} style={{ color: '#ffffff' }}>
            Address
          </FormLabel>
          <Box width={'100%'} height={'500px'}>
            <MapWithNoSSR />
          </Box>
          <Button
            mt={12}
            mb={12}
            type='submit'
            width={'100%'}
            colorScheme='orange'
            onClick={handleCreateRestaurant}
          >
            {isLoading ? <Spinner /> : 'Create Restaurant'}
          </Button>
        </FormControl>
        <Image
          className={styles.batik_background}
          src={BatikBackground}
          alt='Batik Background'
          fill
        />
      </main>
    </>
  );
}
