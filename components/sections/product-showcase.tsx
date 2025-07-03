"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { 
  Smartphone, 
  LayoutDashboard, 
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

const screenshots = [
  {
    title: "Dashboard Overview",
    description: "Real-time inspection status and team performance metrics",
    type: "dashboard"
  },
  {
    title: "Form Builder",
    description: "Drag-and-drop interface for creating custom inspection forms",
    type: "form-builder"
  },
  {
    title: "Mobile App",
    description: "Offline-first mobile interface for field inspections",
    type: "mobile"
  },
  {
    title: "Analytics View",
    description: "Comprehensive reporting and data visualization tools",
    type: "analytics"
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
                    {screenshots.filter(s => s.type === 'mobile' || s.type === 'dashboard').map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <Card className="border-0 shadow-xl">
                          <CardContent className="p-6">
                            <div className="aspect-[9/16] bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                              <div className="text-center space-y-2">
                                <Smartphone className="h-12 w-12 text-primary mx-auto" />
                                <p className="text-sm font-medium text-primary">
                                  {screenshot.title}
                                </p>
                              </div>
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
                  <CardContent className="p-8">
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg flex items-center justify-center mb-6">
                      <div className="text-center space-y-2">
                        <LayoutDashboard className="h-16 w-16 text-primary mx-auto" />
                        <p className="text-lg font-medium text-primary">
                          Admin Dashboard
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">12</div>
                        <div className="text-sm text-muted-foreground">Demo Forms</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">100%</div>
                        <div className="text-sm text-muted-foreground">Offline Ready</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">3</div>
                        <div className="text-sm text-muted-foreground">Test Users</div>
                      </div>
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

            <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Before & After Transformation
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    See how our platform adapts to different brands and industries. 
                    From equipment rental to healthcare facilities, every deployment 
                    feels native to your business.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Custom Branding</Badge>
                    <Badge variant="outline">Industry Templates</Badge>
                    <Badge variant="outline">Workflow Automation</Badge>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/30 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Palette className="h-12 w-12 text-primary mx-auto" />
                    <p className="text-sm font-medium text-primary">
                      Customization Preview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}