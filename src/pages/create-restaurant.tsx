import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useCallback, Dispatch } from 'react';
import {
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Spinner,
  Box,
} from '@chakra-ui/react';
import BatikBackground from '../../public/batik-background.webp';
import styles from '@/styles/pages/CreateRestaurant.module.scss';
import IndODishLogo from '@/components/IndODishLogo';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { Playfair_Display } from 'next/font/google';
import { useDropzone } from 'react-dropzone';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { createRestaurant } from '@/features/createRestaurantSlice';

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const MapWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false,
});

function MyDropzone({ image, setImage }: any) {
  const [imageFile, setImageFile] = useState('');
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setImage(binaryStr);
      };
      setImageFile(file.path);
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({
        className: styles.image_zone,
      })}
    >
      <input {...getInputProps()} />
      {imageFile.length == 0 ? (
        <p>Drag 'n' drop some files here, or click to select files</p>
      ) : (
        <p>{imageFile}</p>
      )}
    </div>
  );
}

export default function CreateRestaurant() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState<ArrayBuffer | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, ok, latitude, longitude } = useSelector(
    (state: RootState) => state.createRestaurant
  );

  const handleCreateRestaurant = () => {
    dispatch(
      createRestaurant({
        name: name,
        description: description,
        phone_number: phoneNumber,
        latitude: latitude,
        longitude: longitude,
        image: image as ArrayBuffer,
      })
    );
  };

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>IndODish - Create Restaurant</title>
      </Head>
      <main className={`${styles.container} ${playfairDisplay.className}`}>
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
            Images
          </FormLabel>
          <MyDropzone image={image} setImage={setImage} />
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
