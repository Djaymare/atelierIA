import { ArrowRight, Sparkles, Users, Shield, Lightbulb } from "lucide-react";

type Page = 'landing' | 'ethics' | 'tools' | 'recommendations';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Éthique & Sécurité",
      description: "Comprendre les enjeux éthiques de l'IA pour un usage responsable",
      page: 'ethics' as Page
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: "Outils d'IA",
      description: "Découvrir les principaux outils d'IA générative adaptés aux enfants",
      page: 'tools' as Page
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-600" />,
      title: "Bonnes Pratiques",
      description: "Conseils et recommandations pour bien utiliser l'IA",
      page: 'recommendations' as Page
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Découvrir l'IA en famille</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                L'Intelligence Artificielle
              </span>
              <br />
              <span className="text-gray-900 dark:text-gray-100">
                expliquée aux enfants
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Un guide complet pour comprendre l'IA générative, ses enjeux éthiques et apprendre à l'utiliser de manière responsable. 
              Conçu pour les enfants et leurs parents.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => onNavigate('ethics')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Commencer l'exploration
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={() => onNavigate('tools')}
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-semibold rounded-xl transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Voir les outils
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Que vas-tu apprendre ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore les différentes facettes de l'intelligence artificielle à travers nos modules interactifs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => onNavigate(feature.page)}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Prêt à découvrir l'IA ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Commence ton voyage dans le monde fascinant de l'intelligence artificielle
            </p>
            <button
              onClick={() => onNavigate('ethics')}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
