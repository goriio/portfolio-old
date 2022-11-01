import {
  Contact,
  Container,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from '@/components';

export default function Index() {
  return (
    <Container>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}
