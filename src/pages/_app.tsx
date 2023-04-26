import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/globals.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
