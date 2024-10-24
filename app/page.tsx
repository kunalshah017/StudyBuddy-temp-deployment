import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  BookOpen,
  CalendarCheck,
  CheckSquare,
  Trophy,
  Calculator,
  Brain,
  Gift,
  Building2,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';

const features = [
  {
    name: 'Library Reminder',
    description: 'Never miss a book return date with smart reminders',
    icon: BookOpen,
    href: '/library',
    image:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Attendance Manager',
    description: 'Track and manage your attendance across all subjects',
    icon: CalendarCheck,
    href: '/attendance',
    image:
      'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Smart TO-DO',
    description:
      'Manage both teacher assignments and personal tasks in one place',
    icon: CheckSquare,
    href: '/tasks',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Leaderboards',
    description:
      'Compete with peers and earn points for completing assignments',
    icon: Trophy,
    href: '/leaderboard',
    image:
      'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'CGPA Calculator',
    description: 'Calculate and track your academic performance',
    icon: Calculator,
    href: '/calculator',
    image:
      'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'AI Study Buddy',
    description: 'Get instant help with your academic questions',
    icon: Brain,
    href: '/ai-buddy',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Reward Store',
    description: 'Redeem your earned points for exclusive partner coupons',
    icon: Gift,
    href: '/rewards',
    image:
      'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&auto=format&fit=crop&q=60',
  },
];

const partners = [
  {
    name: 'Leading Universities',
    description:
      'Partnering with top universities worldwide to enhance the academic experience',
    icon: GraduationCap,
    image:
      'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Tech Giants',
    description:
      'Collaborating with Google and Microsoft for seamless integration with existing education platforms',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=60"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container px-4 z-10">
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-gradient">
              Study<span className="text-primary">Buddy</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground animate-fade-in">
              Your all-in-one academic companion that makes student life easier
              and more rewarding.
            </p>
            <div className="flex justify-center gap-4 animate-bounce-slow">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/tasks">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-muted/50 flex justify-center items-center"
      >
        <div className="container px-4 w-full ">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.name} href={feature.href}>
                  <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {feature.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Collaborations Section */}
      <div className="py-20 w-full  flex justify-center">
        <div className="container px-4 w-full flex flex-col  jutify-center items-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Future Collaborations</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              We're working towards partnerships with leading institutions and
              tech companies to provide an even better learning experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <Card key={partner.name} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{partner.name}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {partner.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
