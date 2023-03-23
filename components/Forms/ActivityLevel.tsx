import CalculateCalsFormType from '@/types/Form';
import { Group, Radio } from '@mantine/core';

interface Props {
  form: CalculateCalsFormType;
}

export default function ActivityLevel({ form }: Props) {
  return (
    <Radio.Group
      name="activitylevel"
      label="Select your daily activity level"
      description="This is the activities you made during the day"
      mt="md"
      mb="xl"
      withAsterisk
      {...form}
    >
      <Group mt="xs" mb="xs">
        <Radio value="level_1" label="Office Worker" />
        <Radio value="level_2" label="Little Activities" />
        <Radio value="level_3" label="Many Activities" />
        <Radio value="level_4" label="Bodybuilder" />
      </Group>
    </Radio.Group>
  );
}
