import {
  UnstyledButton,
  Center,
  Box,
  Collapse,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import { NavbarProps } from '.';
import { useNavbarStyles } from './NavbarStyles';

interface MobileProps {
  opened: boolean;
}

const NavbarMobile = ({ links, opened }: NavbarProps & MobileProps) => {
  const { classes, theme } = useNavbarStyles();
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const itemsMobile = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link href={item.link} key={item.label} className={classes.link}>
        {item.label}
      </Link>
    ));

    if (menuItems) {
      return (
        <div key={link.label}>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                {link.label}
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened} className={classes.collapse}>
            {menuItems}
          </Collapse>
        </div>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });
  return (
    <Transition transition="pop-top-right" duration={200} mounted={opened}>
      {(styles) => (
        <Paper className={classes.dropdown} withBorder style={styles}>
          {itemsMobile}
        </Paper>
      )}
    </Transition>
  );
};

export default NavbarMobile;
