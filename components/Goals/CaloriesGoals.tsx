import { Tabs } from '@mantine/core';
import { IoFitnessSharp } from 'react-icons/io5';
import { FiTrendingDown } from 'react-icons/fi';
import { BiRun } from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';
import { GiMuscleUp } from 'react-icons/gi';
import { CircleProgress } from '../CircleProgress';
import { CaloriesResponse } from '../Forms/CalculateCalsForm';

export default function CaloriesGoals({
  calories,
}: {
  calories: CaloriesResponse;
}) {
  return (
    <Tabs defaultValue="maintain" mt="sm">
      <Tabs.List>
        <Tabs.Tab value="maintain" icon={<IoFitnessSharp size="0.8rem" />}>
          Maintain Weight
        </Tabs.Tab>
        <Tabs.Tab value="loss" icon={<FiTrendingDown size="0.8rem" />}>
          Weight loss
        </Tabs.Tab>
        <Tabs.Tab value="extremeloss" icon={<BiRun size="0.8rem" />}>
          Extreme weight loss
        </Tabs.Tab>
        <Tabs.Tab value="gain" icon={<CgGym size="0.8rem" />}>
          Weight gain
        </Tabs.Tab>
        <Tabs.Tab value="extremegain" icon={<GiMuscleUp size="0.8rem" />}>
          Extreme weight gain
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="maintain" pt="xs">
        <CircleProgress
          data={[
            {
              label: 'Calories',
              stats: calories?.goals['maintain weight'].toString(),
              progress: 100,
              color: 'blue',
              icon: 'up',
            },
          ]}
        />
      </Tabs.Panel>

      <Tabs.Panel value="loss" pt="xs">
        <CircleProgress
          data={[
            {
              label: 'Calories',
              stats: calories?.goals['Weight loss'].calory.toString(),
              progress: 80,
              color: 'orange',
              icon: 'down',
            },
          ]}
        />
      </Tabs.Panel>

      <Tabs.Panel value="extremeloss" pt="xs">
        <CircleProgress
          data={[
            {
              label: 'Calories',
              stats: calories?.goals['Extreme weight loss'].calory.toString(),
              progress: 50,
              color: 'red',
              icon: 'down',
            },
          ]}
        />
      </Tabs.Panel>

      <Tabs.Panel value="gain" pt="xs">
        <CircleProgress
          data={[
            {
              label: 'Calories',
              stats: calories?.goals['Weight gain'].calory.toString(),
              progress: 140,
              color: 'blue',
              icon: 'up',
            },
          ]}
        />
      </Tabs.Panel>

      <Tabs.Panel value="extremegain" pt="xs">
        <CircleProgress
          data={[
            {
              label: 'Calories',
              stats: calories?.goals['Extreme weight gain'].calory.toString(),
              progress: 180,
              color: 'green',
              icon: 'up',
            },
          ]}
        />{' '}
      </Tabs.Panel>
    </Tabs>
  );
}
