import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import styles from '@/styles/sections/RestaurantMenu.module.scss';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function RestaurantMenu() {
  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <h3>Menu</h3>
      <Tabs size='md' variant='enclosed' colorScheme='orange'>
        <TabList>
          <Tab>Snack</Tab>
          <Tab>Appetizer</Tab>
          <Tab>Main Course</Tab>
          <Tab>Dessert</Tab>
          <Tab>Beverage</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
}
