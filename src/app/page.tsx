import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Brain,
  Star,
  BarChart,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Unlock Your Potential with AI-Powered Learning
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
              Create custom learning paths, track your progress, and achieve
              your goals with personalized AI recommendations.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors animate-fade-in-up animation-delay-400"
            >
              Get Started for Free
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Discover the Power of LearnAI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="text-blue-500" size={32} />,
                title: "Custom Learning Modules",
                description:
                  "Create personalized learning paths by organizing resources from various platforms.",
              },
              {
                icon: <Brain className="text-purple-500" size={32} />,
                title: "AI-Powered Recommendations",
                description:
                  "Receive tailored suggestions based on your learning style, goals, and progress.",
              },
              {
                icon: <Users className="text-green-500" size={32} />,
                title: "Collaborative Learning",
                description:
                  "Share modules, join study groups, and engage in community discussions.",
              },
              {
                icon: <Star className="text-yellow-500" size={32} />,
                title: "Module Rating System",
                description:
                  "Rate and review public modules to help others find the best content.",
              },
              {
                icon: <BarChart className="text-red-500" size={32} />,
                title: "Progress Tracking",
                description:
                  "Monitor your learning journey with detailed analytics and insights.",
              },
              {
                icon: <Zap className="text-indigo-500" size={32} />,
                title: "Career Roadmap",
                description:
                  "Get guidance on your career progression based on your learning achievements.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How LearnAI Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {[
                {
                  title: "Sign Up & Set Goals",
                  description:
                    "Create your account and define your learning objectives.",
                },
                {
                  title: "Create or Explore Modules",
                  description:
                    "Build your own learning modules or discover public ones.",
                },
                {
                  title: "AI-Powered Recommendations",
                  description:
                    "Receive personalized suggestions based on your profile.",
                },
                {
                  title: "Track Your Progress",
                  description:
                    "Monitor your learning journey with detailed analytics.",
                },
                {
                  title: "Collaborate & Share",
                  description:
                    "Engage with the community and share your knowledge.",
                },
              ].map((step, index) => (
                <div key={index} className="flex mb-8 items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-full p-3 text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8">
            Join LearnAI today and unlock your full potential with personalized
            learning paths.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started for Free
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
