export const revalidate = 0;
/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Container,
  Heading,
  LindkedlnFooter,
  NewLetter,
  Section,
} from "@/components";
import { getAboutpage } from "@/sanity/queries/page";
import { AboutUsType } from "@/sanity/schemaTypes/aboutUs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = async () => {
  const data: AboutUsType = await getAboutpage();

  const { ourExperts, ourPhilosophy, promotion, hero } = data;

  return (
    <React.Fragment>
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
            <Heading as="h1" className="text-hero">
              {hero.heading}
            </Heading>
            <div>
              <p className="mb-4">{hero.tagline}</p>
              <Button variant="secondary">
                <Link href={promotion.link}>{promotion.title}</Link>
              </Button>
            </div>
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src={hero.heroImage}
              alt="About us 1"
              width={450}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="text-section leading-none capitalize mb-24"
          >
            {ourPhilosophy.heading}
          </Heading>
          <div className="grid gap-4 sticky">
                <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                  <div>
                    <span>Culture</span>
                    <Heading as="h4" className="text-title leading-none">
                      Curiosity & Creativity
                    </Heading>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum numquam laboriosam fugit sequi blanditiis deserunt at illum veniam vero impedit, non quia nisi, repellendus voluptatum? Nobis at omnis eos temporibus.</p>
                </div>
                <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                  <div>
                    <span>Culture</span>
                    <Heading as="h4" className="text-title leading-none">
                      Empathy & Hard-work
                    </Heading>
                  </div>
                  <p>We understand that success stems from both empathy and hard work. Our team thrives in a supportive environment where mutual respect and understanding are essential. By working together with determination and compassion, we aim to create sustainable solutions that not only meet client needs but also uplift the communities we serve. We know that the best results come from putting in the effort while maintaining a sense of care for those around us.</p>
                </div>
                <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                  <div>
                    <span>Culture</span>
                    <Heading as="h4" className="text-title leading-none">
                      Sustainability & Innovation
                    </Heading>
                  </div>
                  <p>At the heart of our mission is a commitment to sustainability and innovation. We strive to design solutions that reduce environmental impact while embracing the latest technological advances. Sustainability is not just a goal; it is a core value that guides our decision-making process every day. By blending innovation with environmental responsibility, we are shaping a future that is both forward-thinking and eco-conscious.</p>
                </div>
                <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                  <div>
                    <span>Culture</span>
                    <Heading as="h4" className="text-title leading-none">
                      Collaboration & Growth
                    </Heading>
                  </div>
                  <p>We believe that collaboration is the foundation of success. Our diverse team brings together a variety of perspectives, making it possible to solve challenges more effectively and generate unique ideas. We foster a growth mindset, where each team member is encouraged to develop professionally and personally, ensuring that both individuals and the company continue to evolve together.</p>
                </div>
                <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                  <div>
                    <span>Culture</span>
                    <Heading as="h4" className="text-title leading-none">
                      Integrity & Transparency
                    </Heading>
                  </div>
                  <p>Integrity is at the core of everything we do. We build trust by being honest, transparent, and accountable in our interactions with clients, partners, and each other. This commitment to integrity ensures that we consistently meet our promises and maintain strong, long-lasting relationships based on mutual respect.</p>
                </div>
                <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                  <div>
                    <span>Culture</span>
                    <Heading as="h4" className="text-title leading-none">
                      Excellence & Leadership
                    </Heading>
                  </div>
                  <p>We aim for excellence in all aspects of our work. Our culture encourages each individual to strive for their personal best, pushing boundaries and setting new standards of quality. We also believe in the importance of leadership—not just at the top, but throughout the entire organization. Each team member is empowered to take initiative and lead with confidence, driving us to new heights of success.</p>
                </div>
          </div>
        </Container>
      </Section>
      <div className="p-2 sm:p-4 bg-secondary-950">
        <NewLetter />
      </div>
      <Section className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="text-section leading-none capitalize mb-24"
          >
            A Team of Energy Experts
          </Heading>

          <div className="grid md:grid-cols-3 gap-4">
                <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/alysson1.jpg"
                    alt="Member"
                    width={320}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                    <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                      <div className="flex justify-between items-center">
                        <Heading
                          as="h4"
                          className="text-label font-semibold leading-none"
                        >
                          Alysson Carvalho
                        </Heading>
                        <span>CTO</span>
                        <Link href="/">
                          <LindkedlnFooter />
                        </Link>
                      </div>
                      <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                        <li className="text-sub-title"></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/alysson2.jpg"
                    alt="Member"
                    width={320}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                    <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                      <div className="flex justify-between items-center">
                        <Heading
                          as="h4"
                          className="text-label font-semibold leading-none"
                        >
                          Alysson Carvalho
                        </Heading>
                        <span>CTO</span>
                        <Link href="/">
                          <LindkedlnFooter />
                        </Link>
                      </div>
                      <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                        <li className="text-sub-title"></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/alysson3.jpg"
                    alt="Member"
                    width={320}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                    <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                      <div className="flex justify-between items-center">
                        <Heading
                          as="h4"
                          className="text-label font-semibold leading-none"
                        >
                          Alysson Carvalho
                        </Heading>
                        <span>CTO</span>
                        <Link href="/">
                          <LindkedlnFooter />
                        </Link>
                      </div>
                      <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                        <li className="text-sub-title"></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/alysson4.jpg"
                    alt="Member"
                    width={320}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                    <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                      <div className="flex justify-between items-center">
                        <Heading
                          as="h4"
                          className="text-label font-semibold leading-none"
                        >
                          Alysson Carvalho
                        </Heading>
                        <span>CTO</span>
                        <Link href="/">
                          <LindkedlnFooter />
                        </Link>
                      </div>
                      <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                        <li className="text-sub-title"></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/alysson5.jpg"
                    alt="Member"
                    width={320}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                    <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                      <div className="flex justify-between items-center">
                        <Heading
                          as="h4"
                          className="text-label font-semibold leading-none"
                        >
                          Alysson Carvalho
                        </Heading>
                        <span>CTO</span>
                        <Link href="/">
                          <LindkedlnFooter />
                        </Link>
                      </div>
                      <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                        <li className="text-sub-title"></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/alysson6.jpg"
                    alt="Member"
                    width={320}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                    <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                      <div className="flex justify-between items-center">
                        <Heading
                          as="h4"
                          className="text-label font-semibold leading-none"
                        >
                          Alysson Carvalho
                        </Heading>
                        <span>CTO</span>
                        <Link href="/">
                          <LindkedlnFooter />
                        </Link>
                      </div>
                      <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                        <li className="text-sub-title"></li>
                      </ul>
                    </div>
                  </div>
                </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default AboutUs;
