import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Text,
  SimpleGrid,
  Loader,
  Modal,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { useState } from 'react';
import ActivityLevel from './ActivityLevel';
import GenderInput from './GenderInput';
import SliderInput from './SliderInput';
import { useDisclosure } from '@mantine/hooks';
import CaloriesGoals from '../Goals/CaloriesGoals';

type Plan = {
  'loss weight'?: string;
  'gain weight'?: string;
  calory: number;
};

export type CaloriesResponse = {
  BMR: number;
  goals: {
    'maintain weight': number;
    'Mild weight loss': Plan;
    'Weight loss': Plan;
    'Extreme weight loss': Plan;
    'Mild weight gain': Plan;
    'Weight gain': Plan;
    'Extreme weight gain': Plan;
  };
};

function CalculateCalsForm() {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      age: 18,
      weight: 65,
      height: 170,
      activitylevel: [],
      termsOfService: false,
      gender: '',
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid Email Address',
      name: (value) => (value.length > 0 ? null : 'You must enter your Name'),
      termsOfService: (value) =>
        value ? null : 'You must accept terms of service',
      activitylevel: (value) =>
        value.length > 0 ? null : 'You must choose your activity level',
      gender: (value) =>
        value.length > 0 ? null : 'You must select your gender',
    },
  });

  const [user, setUser] = useState<any>({
    name: 'The Monster',
  });
  const [calories, setCalories] = useState<any>();

  return (
    <Box my={25}>
      <form
        onSubmit={form.onSubmit((values) => {
          setLoading(true);
          axios
            .post('/api/calories', values)
            .then((res) => {
              setLoading(false);
              setUser(values);
              open();
              setCalories(res.data.data);
              form.reset();
            })
            .catch((err) => {
              setLoading(false);
              console.error(err);
            });
        })}
      >
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: 'md', cols: 2 },
            { maxWidth: 'sm', cols: 1 },
          ]}
        >
          <TextInput
            withAsterisk
            label="Name"
            placeholder="your name"
            {...form.getInputProps('name')}
          />

          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />
          <GenderInput form={form.getInputProps('gender')} />
          <SliderInput
            label="Age"
            max={90}
            min={16}
            showLabelTop={
              <Text>You have {form.getInputProps('age').value} years old.</Text>
            }
            form={{ ...form.getInputProps('age') }}
          />
          <SliderInput
            label="Weight"
            max={180}
            min={40}
            showLabelTop={
              <Text>
                Your weight is: {form.getInputProps('weight').value} kilogram.
              </Text>
            }
            sliderLabel="kg"
            form={{ ...form.getInputProps('weight') }}
          />
          <SliderInput
            label="Height"
            max={270}
            min={140}
            showLabelTop={
              <Text>
                Your height is: {form.getInputProps('height').value} cm.
              </Text>
            }
            sliderLabel="cm"
            form={{ ...form.getInputProps('height') }}
          />
        </SimpleGrid>

        <ActivityLevel form={{ ...form.getInputProps('activitylevel') }} />

        <Checkbox
          mt="md"
          label="I accept the terms of service"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="left" mt="lg">
          {loading ? (
            <Button disabled={true} type="submit">
              Loading <Loader color="white" size="sm" ml="sm" />
            </Button>
          ) : (
            <Button type="submit">Calculate</Button>
          )}
        </Group>
      </form>
      <Modal fullScreen opened={opened} onClose={close}>
        <Title order={2}>Welcome {user?.name}</Title>
        <Text>
          Your recommended calories are{' '}
          <Text
            weight="bold"
            size="md"
            variant="gradient"
            display="inline-block"
          >
            {calories?.BMR}
          </Text>{' '}
          calories
        </Text>
        <Box mt="xl">
          <Title order={3}>Your Goals: </Title>
          <CaloriesGoals calories={calories} />
        </Box>
      </Modal>
    </Box>
  );
}

export default CalculateCalsForm;
