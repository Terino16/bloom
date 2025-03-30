import { OnboardingForm } from "@/components/onboarding/onboarding"

export default function OnboardingPage() {
  return (
    <div className="relative min-h-svh">
      {/* Background image with blur overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/images/vegetables.png" alt="Fresh vegetables" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(248, 245, 230, 0.7)" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-4xl">
          <OnboardingForm />
        </div>
      </div>
    </div>
  )
}

