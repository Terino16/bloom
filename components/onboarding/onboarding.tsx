"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ChevronLeft, ChevronRight, User, MapPin, Phone, CheckCheck } from "lucide-react"

type Step = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export function OnboardingForm({ className, ...props }: React.ComponentProps<"div">) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Form data state
  const [formData, setFormData] = useState({
    // Personal info
    fullName: "",
    displayName: "",
    bio: "",

    // Address
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    // Contact
    phoneNumber: "",
    alternateEmail: "",
    emergencyContact: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const steps: Step[] = [
    {
      id: "personal",
      title: "Personal Information",
      description: "Tell us a bit about yourself",
      icon: <User className="h-5 w-5" />,
    },
    {
      id: "address",
      title: "Address",
      description: "Where can we reach you?",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      id: "contact",
      title: "Contact Details",
      description: "How can we contact you?",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      id: "complete",
      title: "Complete",
      description: "Your profile is ready!",
      icon: <CheckCheck className="h-5 w-5" />,
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      nextStep()
    }, 1500)
  }

  const handleComplete = () => {
    router.push("/")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden border border-[#8cc08433] py-0" style={{ backgroundColor: "#ffffff" }}>
        <CardContent className="grid p-0 md:grid-cols-5">
          {/* Sidebar */}
          <div className="col-span-2 p-6" style={{ backgroundColor: "#8cc08410" }}>
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-semibold" style={{ color: "#4a7c59" }}>
                  Onboarding
                </h2>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Complete your profile
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={cn(
                      "flex items-center gap-3 rounded-md p-2",
                      currentStep === index ? "bg-[#8cc08420]" : currentStep > index ? "" : "",
                    )}
                    style={{
                      color: currentStep === index ? "#4a7c59" : currentStep > index ? "#4a7c59" : "#6b7280",
                    }}
                  >
                    <div
                      className={cn("flex h-8 w-8 items-center justify-center rounded-full border")}
                      style={{
                        borderColor: currentStep === index ? "#8cc084" : currentStep > index ? "#4a7c59" : "#d1d5db",
                        backgroundColor:
                          currentStep === index ? "#8cc08420" : currentStep > index ? "#8cc08420" : "transparent",
                      }}
                    >
                      {currentStep > index ? (
                        <CheckCircle2 className="h-5 w-5" style={{ color: "#4a7c59" }} />
                      ) : (
                        step.icon
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-xs" style={{ color: "#6b7280" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-3 p-6 md:p-8" style={{ backgroundColor: "#f8f5e6" }}>
            {currentStep === 0 && (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: "#4a7c59" }}>
                      Personal Information
                    </h3>
                    <p className="text-sm" style={{ color: "#6b7280" }}>
                      Tell us a bit about yourself
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" style={{ color: "#4a7c59" }}>
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                        style={{ backgroundColor: "#ffffff" }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="displayName" style={{ color: "#4a7c59" }}>
                        Display Name
                      </Label>
                      <Input
                        id="displayName"
                        name="displayName"
                        value={formData.displayName}
                        onChange={handleChange}
                        placeholder="johndoe"
                        required
                        className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                        style={{ backgroundColor: "#ffffff" }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" style={{ color: "#4a7c59" }}>
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Tell us about yourself"
                        className="min-h-[100px] border-[#8cc08433] focus-visible:ring-[#8cc084]"
                        style={{ backgroundColor: "#ffffff" }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="hover:bg-[#4a7c59] bg-emerald-700"

                      disabled={isLoading}
                    >
                      {isLoading ? "Saving..." : "Continue"}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {currentStep === 1 && (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: "#4a7c59" }}>
                      Address
                    </h3>
                    <p className="text-sm" style={{ color: "#6b7280" }}>
                      Where can we reach you?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="streetAddress" style={{ color: "#4a7c59" }}>
                        Street Address
                      </Label>
                      <Input
                        id="streetAddress"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        placeholder="123 Main St"
                        required
                        className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                        style={{ backgroundColor: "#ffffff" }}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" style={{ color: "#4a7c59" }}>
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="San Francisco"
                          required
                          className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                          style={{ backgroundColor: "#ffffff" }}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state" style={{ color: "#4a7c59" }}>
                          State/Province
                        </Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="California"
                          required
                          className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                          style={{ backgroundColor: "#ffffff" }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="zipCode" style={{ color: "#4a7c59" }}>
                          Zip/Postal Code
                        </Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          placeholder="94103"
                          required
                          className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                          style={{ backgroundColor: "#ffffff" }}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country" style={{ color: "#4a7c59" }}>
                          Country
                        </Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="United States"
                          required
                          className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                          style={{ backgroundColor: "#ffffff" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="border-[#8cc08433] hover:bg-[#8cc08410]"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="hover:bg-[#4a7c59] bg-emerald-700"

                      disabled={isLoading}
                    >
                      {isLoading ? "Saving..." : "Continue"}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {currentStep === 2 && (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: "#4a7c59" }}>
                      Contact Details
                    </h3>
                    <p className="text-sm" style={{ color: "#6b7280" }}>
                      How can we contact you?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" style={{ color: "#4a7c59" }}>
                        Phone Number
                      </Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        required
                        className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                        style={{ backgroundColor: "#ffffff" }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alternateEmail" style={{ color: "#4a7c59" }}>
                        Alternate Email (Optional)
                      </Label>
                      <Input
                        id="alternateEmail"
                        name="alternateEmail"
                        type="email"
                        value={formData.alternateEmail}
                        onChange={handleChange}
                        placeholder="alternate@example.com"
                        className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                        style={{ backgroundColor: "#ffffff" }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact" style={{ color: "#4a7c59" }}>
                        Emergency Contact (Optional)
                      </Label>
                      <Input
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        placeholder="Name: (555) 123-4567"
                        className="border-[#8cc08433] focus-visible:ring-[#8cc084]"
                        style={{ backgroundColor: "#ffffff" }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="border-[#8cc08433] hover:bg-[#8cc08410]"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="hover:bg-[#4a7c59] bg-emerald-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Saving..." : "Complete"}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {currentStep === 3 && (
              <div className="flex flex-col items-center justify-center gap-6 py-10">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#8cc08420" }}
                >
                  <CheckCircle2 className="h-10 w-10" style={{ color: "#8cc084" }} />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-semibold" style={{ color: "#4a7c59" }}>
                    All Done!
                  </h3>
                  <p className="mt-2" style={{ color: "#6b7280" }}>
                    Your profile has been successfully set up. You're ready to start using our platform.
                  </p>
                </div>

                <Button
                  onClick={handleComplete}
                  className="mt-4 hover:bg-[#4a7c59] bg-emerald-700"

                >
                  Go to Dashboard
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

