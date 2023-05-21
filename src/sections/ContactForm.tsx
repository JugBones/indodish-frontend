import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Card,
  CardBody,
  Spinner,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Playfair_Display } from 'next/font/google';
import styles from '@/styles/pages/ContactForm.module.scss';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm } from '@/features/contactFormSlice';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, ok } = useSelector(
    (state: RootState) => state.contactForm
  );
  const toast = useToast();

  const handleSubmit = () => {
    dispatch(submitContactForm({ name, email, phoneNumber, message }));
    setName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  useEffect(() => {
    if (ok) {
      toast({
        title: 'Message Sent',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }

    if (error) {
      toast({
        title: 'Error, please try again',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, ok]);

  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <Card>
        <CardBody>
          <h2>Contact Form</h2>
          <FormControl>
            <FormLabel mt={4} fontSize={'1.25rem'} fontWeight={'600'}>
              Name
            </FormLabel>
            <Input
              mt={2}
              size='lg'
              type='text'
              variant='outline'
              value={name}
              onChange={(e) => setName(e.target.value)}
              focusBorderColor='#e37300'
              placeholder='Name'
            />
            <FormLabel mt={4} fontSize={'1.25rem'} fontWeight={'600'}>
              Email
            </FormLabel>
            <Input
              size='lg'
              type='email'
              variant='outline'
              focusBorderColor='#e37300'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            <FormLabel mt={4} fontSize={'1.25rem'} fontWeight={'600'}>
              Phone Number
            </FormLabel>
            <Input
              size='lg'
              type='text'
              variant='outline'
              focusBorderColor='#e37300'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder='Phone Number'
            />{' '}
            <FormLabel mt={4} fontSize={'1.25rem'} fontWeight={'600'}>
              Message
            </FormLabel>
            <Textarea
              size='lg'
              variant='outline'
              focusBorderColor='#e37300'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Message'
            />
            <Button
              mt={12}
              type='submit'
              width={'100%'}
              colorScheme='orange'
              onClick={handleSubmit}
            >
              {isLoading ? <Spinner /> : 'Submit'}
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </section>
  );
}
