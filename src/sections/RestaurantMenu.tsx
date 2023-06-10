import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import styles from '@/styles/sections/RestaurantMenu.module.scss';
import { Playfair_Display } from 'next/font/google';
import MenuItem from '@/components/MenuItem';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

interface RestaurantMenuProps {
  menu: [
    {
      id: string;
      name: string;
      description: string;
      price: string;
      category: string;
      rating_sum: number;
      number_of_voters: number;
    }
  ];
}

export default function RestaurantMenu({ menu }: RestaurantMenuProps) {
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
        {menu && (
          <TabPanels>
            <TabPanel>
              {menu.filter((m) => m.category === 'snack').length > 0 ? (
                menu
                  .filter((m) => m.category === 'snack')
                  .map((m) => (
                    <MenuItem
                      id={m.id}
                      name={m.name}
                      description={m.description}
                      price={m.price}
                    />
                  ))
              ) : (
                <p>No Menu Available</p>
              )}
            </TabPanel>
            <TabPanel>
              {menu
                .filter((m) => m.category === 'appetizer')
                .map((m) => (
                  <MenuItem
                    id={m.id}
                    name={m.name}
                    description={m.description}
                    price={m.price}
                  />
                ))}
            </TabPanel>
            <TabPanel>
              {menu
                .filter((m) => m.category === 'main_course')
                .map((m) => (
                  <MenuItem
                    id={m.id}
                    name={m.name}
                    description={m.description}
                    price={m.price}
                  />
                ))}
            </TabPanel>
            <TabPanel>
              {menu
                .filter((m) => m.category === 'dessert')
                .map((m) => (
                  <MenuItem
                    id={m.id}
                    name={m.name}
                    description={m.description}
                    price={m.price}
                  />
                ))}
            </TabPanel>
            <TabPanel>
              {menu
                .filter((m) => m.category === 'beverage')
                .map((m) => (
                  <MenuItem
                    id={m.id}
                    name={m.name}
                    description={m.description}
                    price={m.price}
                  />
                ))}
            </TabPanel>
          </TabPanels>
        )}
      </Tabs>
    </section>
  );
}
