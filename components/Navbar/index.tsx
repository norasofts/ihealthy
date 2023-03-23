import {
  Header,
  Container,
  Group,
  Burger,
  Center,
  Menu,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons-react';
import { HEADER_HEIGHT, useNavbarStyles } from './NavbarStyles';
import NavbarMobile from './NavbarMobile';

type LinkType = { link: string; label: string };

export interface NavbarProps {
  links: { label: string; link: string; links?: LinkType[] }[];
}

export function Navbar({ links }: NavbarProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, theme } = useNavbarStyles();

  const itemsDesktop = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link key={item.link} href={item.link}>
        <Menu.Item>{item.label}</Menu.Item>
      </Link>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });
  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <Link href="/">
            <Title>iHealthy</Title>
          </Link>
          <Group spacing={5} className={classes.links}>
            {itemsDesktop}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />

          <NavbarMobile links={links} opened={opened} />
        </div>
      </Container>
    </Header>
  );
}
