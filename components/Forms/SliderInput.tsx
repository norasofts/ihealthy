import { FC, useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

type SliderProps = {
  label: string;
  max: number;
  min: number;
  showLabelTop?: any;
  sliderLabel?: string;
  form: any;
};

const SliderInput: FC<SliderProps> = ({
  label,
  min,
  max,
  showLabelTop,
  sliderLabel = '',
  form,
}) => {
  return (
    <Box mt="md">
      <Text size="sm" weight={500}>
        {label}
      </Text>
      {showLabelTop && <Text size="sm">{showLabelTop}</Text>}
      <Slider
        mt="xs"
        max={max}
        min={min}
        size="lg"
        label={`${form.value} ${sliderLabel}`}
        {...form}
      />
    </Box>
  );
};

export default SliderInput;
