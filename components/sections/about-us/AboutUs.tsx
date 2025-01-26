import { Check, Container, Heading, Section, SubTitle } from "@/components";
import AboutUsCarousel from "./AboutUsCarousel";

export const AboutUs = async () => {

  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="about us" />
        <div className="grid xl:grid-cols-2 gap-12 md:gap-36">
          <div className="flex justify-center flex-col gap-6">
            <Heading as="h2" className="text-section leading-none text-white">
            Committed to a sustainable future
            </Heading>
            <p className="text-white">As a pioneering force in the green energy sector, we ve been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.</p>
            <ul className="mt-4 grid grid-cols-2 xl:grid-cols-1 gap-4">
              <li className="flex items-center gap-3 text-white">
                <Check />
                Developing cutting-edge renewable energy technologies
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Driving innovation in solar, wind, and hydroelectric power
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Partnering with communities to promote sustainable solutions
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Reducing global carbon emissions for future generations
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <AboutUsCarousel
              images={[
                {
                  url: "/images/alysson1.jpg",
                },
                {
                  url: "/images/alysson2.jpg",
                },
                {
                  url: "/images/alysson3.jpg",
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
