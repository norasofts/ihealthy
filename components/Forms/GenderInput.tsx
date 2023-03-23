import CalculateCalsFormType from '@/types/Form';
import { Group, Radio } from '@mantine/core';
import React from 'react';

interface GenderProps {
  form: CalculateCalsFormType;
}

const GenderInput = ({ form }: GenderProps) => {
  return (
    <Radio.Group
      defaultValue="male"
      name="gender"
      label="Select Your Gender"
      withAsterisk
      mt="md"
      {...form}
    >
      <Group mt="xs" mb="xs">
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
      </Group>
    </Radio.Group>
  );
};

export default GenderInput;
