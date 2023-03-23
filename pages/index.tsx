import CalculateCalsForm from '@/components/Forms/CalculateCalsForm';
import Page from '@/theme/Page';
import { Container, Title } from '@mantine/core';

export default function Home() {
  return (
    <Page>
      <Container size="xl">
        <Title>Calculate Your Daily Calories</Title>
        <CalculateCalsForm />
      </Container>
    </Page>
  );
}
