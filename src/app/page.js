import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutUs from "@/components/home/AboutUs";
import Projects from "@/components/home/Projects";
import AnimatedCounter from "@/components/home/AnimatedCounter";
import ContactForm from "@/components/home/ContactForm";
import Location from "@/components/home/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutUs />
      <Projects />
      <AnimatedCounter />
      <ContactForm />
      <Location />
    </>
  );
}
