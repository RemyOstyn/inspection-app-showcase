"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import { 
  Smartphone, 
  Palette, 
  CheckCircle, 
  Camera, 
  CloudOff, 
  BarChart3, 
  Users, 
  Settings,
  Monitor,
  RefreshCw,
  Shield
} from 'lucide-react'

const mobileFeatures = [
  {
    icon: CloudOff,
    title: "Offline-First Operation",
    description: "Complete inspections without internet connectivity. All data stored locally until sync."
  },
  {
    icon: Camera,
    title: "Rich Media Capture",
    description: "Take photos, record videos, and add annotations directly within inspection forms."
  },
  {
    icon: CheckCircle,
    title: "Dynamic Forms",
    description: "Custom inspection forms adapt to your workflow with conditional logic and validation."
  },
  {
    icon: RefreshCw,
    title: "Smart Sync",
    description: "Intelligent synchronization ensures data integrity and conflict resolution."
  }
]

const adminFeatures = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Comprehensive dashboards with inspection metrics, trends, and performance insights."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Assign inspections, track progress, and manage user permissions across your organization."
  },
  {
    icon: Settings,
    title: "Form Builder",
    description: "Drag-and-drop form creation with 15+ field types and advanced logic rules."
  },
  {
    icon: Shield,
    title: "Audit Trail",
    description: "Complete inspection history with timestamps, user tracking, and change logs."
  }
]

const customizationOptions = [
  {
    title: "Brand Identity",
    description: "Logo, colors, typography",
    features: ["Custom logo placement", "Brand color schemes", "Typography selection", "Icon customization"]
  },
  {
    title: "User Interface",
    description: "Layout, navigation, workflows",
    features: ["Custom navigation menus", "Dashboard layouts", "Workflow automation", "User role definitions"]
  },
  {
    title: "Forms & Fields",
    description: "Custom inspection templates",
    features: ["Industry-specific forms", "Custom field types", "Validation rules", "Conditional logic"]
  },
  {
    title: "Integrations",
    description: "Connect with your systems",
    features: ["API endpoints", "Webhook configurations", "Third-party integrations", "Data export formats"]
  }
]

const mobileScreenshots = [
  {
    title: "Dashboard Overview",
    description: "Real-time inspection status and team performance metrics",
    src: "/images/mobile/mobile_dashboard-portrait.png",
    alt: "Mobile dashboard showing inspection overview, quick actions, and recent activity"
  },
  {
    title: "Form Progress",
    description: "Visual progress tracking with sectioned completion status",
    src: "/images/mobile/mobile_form_progress-portrait.png",
    alt: "Mobile form progress screen showing section completion and progress bars"
  },
  {
    title: "Dynamic Forms",
    description: "Custom inspection forms with media capture capabilities",
    src: "/images/mobile/mobile_form-portrait.png",
    alt: "Mobile form interface showing field inputs and media capture"
  },
  {
    title: "Media Comments",
    description: "Rich media annotation and commenting system",
    src: "/images/mobile/mobile_media_comment-portrait.png",
    alt: "Mobile media comment interface for adding notes to captured images"
  },
  {
    title: "Inspection Categories",
    description: "Organized inspection workflows by category",
    src: "/images/mobile/mobile_form_groups-portrait.png",
    alt: "Mobile inspection categories screen showing biosecurity inspection options"
  }
]

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('mobile')

  return (
    <section id="product-showcase" className="relative py-24 from-muted/20 to-muted/40">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            See Our Platform{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore how our inspection platform works across mobile devices, admin dashboards, 
            and custom configurations. Experience the power of offline-first design.
          </p>
        </div>

        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:mx-auto mb-12">
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">Mobile App</span>
              <span className="sm:hidden">Mobile</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              <span className="hidden sm:inline">Admin Dashboard</span>
              <span className="sm:hidden">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="customization" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Customization</span>
              <span className="sm:hidden">Custom</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mobile" className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    Field Operations
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Built for the Field
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Our mobile app is designed for real-world conditions. Work offline, 
                    capture rich media, and sync seamlessly when connectivity returns.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {mobileFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative">
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent>
                    {mobileScreenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <Card className="border-0 shadow-xl">
                          <CardContent className="p-6">
                            <div className="aspect-[3/5] bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                              <Image
                                src={screenshot.src}
                                alt={screenshot.alt}
                                width={300}
                                height={500}
                                className="w-full h-full object-contain"
                                priority={index === 0}
                              />
                            </div>
                            <h4 className="font-semibold text-center mb-2">{screenshot.title}</h4>
                            <p className="text-sm text-muted-foreground text-center">
                              {screenshot.description}
                            </p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dashboard" className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Card className="shadow-xl border-0">
                  <CardContent className="p-4">
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/images/web_dashboard.png"
                        alt="Admin dashboard showing inspection overview, navigation menu, and recent inspection activity"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover rounded-lg"
                        priority
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-lg mb-2">Admin Dashboard</h4>
                      <p className="text-sm text-muted-foreground">
                        Complete overview of inspection activities, team performance, and system status
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    Command Center
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Complete Visibility & Control
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Manage your entire inspection operation from a centralized dashboard. 
                    Create forms, assign tasks, and monitor performance in real-time.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {adminFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-foreground">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customization" className="space-y-12">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                White-Label Ready
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Make It Yours
              </h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Transform our platform into your branded solution. Complete customization 
                capabilities let you deliver a seamless experience under your brand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {customizationOptions.map((option, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {option.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}