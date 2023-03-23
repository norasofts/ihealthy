import { createStyles, rem } from '@mantine/core';

export const HEADER_HEIGHT = rem(60);

export const useNavbarStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  desktopGoogleHandler: {
    button: {
      marginTop: 0,
    },

    div: {
      marginTop: 0,
    },

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    padding: `${rem(12)} ${rem(14)}`,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    cursor: 'pointer',
    display: 'block',
    lineHeight: 1.5,
    padding: `${rem(10)} ${rem(14)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },

  collapse: {
    marginLeft: rem(5),
  },
}));
