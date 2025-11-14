import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

interface Feature {
  title: string;
  description: string;
  iconPath: string;
}

interface IconProps {
  path: string;
  className?: string;
}

/**
 * Renders an inline SVG icon.
 */
const Icon: React.FC<IconProps> = ({ path, className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={path}
    />
  </svg>
);

// --- Feature Data ---

const features: Feature[] = [
  {
    title: "Automatic Routine Generation",
    description:
      "Intelligently schedule classes, exams, and study blocks to optimize learning efficiency. Say goodbye to manual timetable conflicts.",
    iconPath:
      "M9 12h6m-3-6v6m3 6H9m-3 3h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Real-Time Attendance System",
    description:
      "Capture and monitor student attendance instantly. Generate detailed reports and track trends to manage class participation effectively.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Integrated Grade Management",
    description:
      "Effortlessly record, calculate, and publish grades. Secure student portals allow instant access to performance metrics and feedback.",
    iconPath: "M7 12l5 5L18 8m-3 0a7 7 0 10-14 0h14z",
  },
  {
    title: "Resource & Document Hub",
    description:
      "A centralized location for all learning materials, notes, and handouts, accessible anytime, anywhere, on any device.",
    iconPath:
      "M19 11H5m14 0v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9m14 0a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h14z",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-inter text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon
              path="M12 14l9-5-9-5-9 5 9 5z"
              className="w-8 h-8 text-primary"
            />
            <span className="text-2xl font-bold text-foreground tracking-tight">
              AcademiaOS
            </span>
          </div>
          <nav className="hidden md:flex space-x-6 text-muted-foreground text-sm font-medium">
            <a
              href="#features"
              className="hover:text-primary transition duration-150"
            >
              Features
            </a>
            <a
              href="#about"
              className="hover:text-primary transition duration-150"
            >
              About
            </a>
            <a
              href="#pricing"
              className="hover:text-primary transition duration-150"
            >
              Pricing
            </a>
          </nav>
          <Button variant="default" className="hidden md:block">
            Get Started Free
          </Button>
          <button className="md:hidden text-muted-foreground hover:text-primary">
            <Icon path="M4 6h16M4 12h16M4 18h16" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-28 text-center bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            The Future of Academic Management
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 text-foreground leading-tight">
            Seamlessly Manage Your Entire{" "}
            <span className="text-primary">Academic Life</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground mb-8">
            AcademiaOS brings together routine generation, attendance tracking,
            and grading into one unified, intelligent platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="default" className="text-lg">
              Start 14-Day Free Trial
            </Button>
            <Button variant="outline" className="text-lg text-primary">
              <Icon
                path="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.26a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                className="w-5 h-5 mr-2 inline"
              />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Core Capabilities
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground">
              Tools Designed for Academic Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <div className="p-3 inline-flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Icon
                    path={feature.iconPath}
                    className="w-7 h-7 text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* End Features Section */}

      {/* Mid-Section CTA / Focus */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-primary-foreground text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Stop Planning, Start Learning.
          </h2>
          <p className="text-xl opacity-80 mb-8">
            Automate the mundane so you can focus on what truly matters:
            education.
          </p>
          <Button
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg"
          >
            Book a Personalized Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/90 text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-border/50 pb-8 mb-8">
            <div className="space-y-3 col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2">
                <Icon
                  path="M12 14l9-5-9-5-9 5 9 5z"
                  className="w-6 h-6 text-primary"
                />
                <span className="text-xl font-bold tracking-tight">
                  AcademiaOS
                </span>
              </div>
              <p className="text-sm text-muted-foreground/80">
                Simplifying education management for institutions and students
                worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary mb-4 uppercase">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-150"
                  >
                    Attendance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-150"
                  >
                    Routine Builder
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-150"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary mb-4 uppercase">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-150"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-150"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-150"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary mb-4 uppercase">
                Support
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-150"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-150"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-150"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground/50">
            &copy; {new Date().getFullYear()} AcademiaOS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
