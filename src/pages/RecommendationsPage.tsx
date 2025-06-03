import { CheckCircle, AlertCircle, Users, Clock, Shield, Lightbulb, Star, Heart } from "lucide-react";

export function RecommendationsPage() {
  const goodPractices = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Demande toujours la permission",
      description: "Avant d'utiliser un nouvel outil d'IA, demande l'autorisation à tes parents ou enseignants."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Vérifie les informations",
      description: "L'IA peut parfois se tromper. Vérifie toujours les faits importants avec d'autres sources."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Reste créatif",
      description: "Utilise l'IA comme aide, mais garde tes propres idées et ta créativité personnelle."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Sois respectueux",
      description: "Utilise un langage poli et respectueux, même quand tu parles avec une IA."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Apprends en t'amusant",
      description: "Utilise l'IA pour découvrir de nouvelles choses et développer tes connaissances."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Partage tes découvertes",
      description: "Montre tes créations à ta famille et tes amis pour partager ton apprentissage."
    }
  ];

  const warnings = [
    {
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      title: "Ne partage pas d'infos personnelles",
      description: "Nom, adresse, école, numéro de téléphone : garde ces informations secrètes."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      title: "N'utilise pas l'IA pour tricher",
      description: "Pour tes devoirs, utilise l'IA comme aide mais fais le travail toi-même."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      title: "Attention aux fausses informations",
      description: "L'IA peut parfois inventer des faits. Vérifie toujours les informations importantes."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      title: "Évite les contenus inappropriés",
      description: "Ne demande pas à l'IA de créer du contenu violent, effrayant ou inapproprié."
    }
  ];

  const ageGroups = [
    {
      age: "6-8 ans",
      icon: "🧸",
      recommendations: [
        "Utilisation uniquement avec un adulte",
        "Outils visuels et simples",
        "Sessions courtes (15-20 minutes)",
        "Focus sur la créativité et le jeu"
      ]
    },
    {
      age: "9-12 ans",
      icon: "🎨",
      recommendations: [
        "Supervision parentale recommandée",
        "Projets créatifs et éducatifs",
        "Sessions de 30-45 minutes",
        "Apprentissage des bases de l'éthique"
      ]
    },
    {
      age: "13+ ans",
      icon: "🚀",
      recommendations: [
        "Plus d'autonomie avec guidance",
        "Projets plus complexes",
        "Apprentissage approfondi de l'éthique",
        "Préparation aux enjeux futurs"
      ]
    }
  ];

  const tips = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "En famille",
      description: "Explorez l'IA ensemble en famille pour créer des moments de partage et d'apprentissage.",
      actions: ["Créez des histoires ensemble", "Organisez des défis créatifs", "Discutez des découvertes"]
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Gestion du temps",
      description: "Établissez des limites de temps pour maintenir un équilibre sain avec les autres activités.",
      actions: ["Définir des créneaux horaires", "Alterner avec d'autres activités", "Faire des pauses régulières"]
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Sécurité d'abord",
      description: "La sécurité en ligne est primordiale lors de l'utilisation d'outils d'IA.",
      actions: ["Vérifier les paramètres de confidentialité", "Utiliser des comptes supervisés", "Signaler tout problème"]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
      title: "Apprentissage continu",
      description: "L'IA évolue rapidement, continuez à apprendre et à vous adapter ensemble.",
      actions: ["Suivre les nouveautés", "Participer à des ateliers", "Échanger avec d'autres familles"]
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Bonnes pratiques</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Nos
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> recommandations</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Des conseils pratiques pour utiliser l'intelligence artificielle de manière sûre, éthique et enrichissante.
          </p>
        </div>

        {/* Good Practices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            ✅ Les bonnes pratiques
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goodPractices.map((practice, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {practice.icon}
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {practice.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warnings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            ⚠️ Points d'attention
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {warnings.map((warning, index) => (
              <div
                key={index}
                className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl"
              >
                <div className="flex items-start space-x-4">
                  {warning.icon}
                  <div>
                    <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">
                      {warning.title}
                    </h3>
                    <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                      {warning.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Age Groups */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            👶 Recommandations par âge
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{group.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {group.age}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {group.recommendations.map((rec, recIndex) => (
                    <li key={recIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Parents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            👨‍👩‍👧‍👦 Conseils pour les parents
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  {tip.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 ml-4">
                    {tip.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {tip.description}
                </p>
                
                <div className="space-y-2">
                  {tip.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <Heart className="h-4 w-4 text-pink-500 mr-2" />
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            🌟 L'aventure ne fait que commencer !
          </h2>
          <p className="text-xl mb-6 opacity-90">
            L'IA est un outil formidable qui peut t'aider à apprendre, créer et découvrir. 
            Utilise-la avec sagesse et curiosité !
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">🤖 Explore</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🎨 Crée</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">📚 Apprends</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🤝 Partage</span>
          </div>
        </div>
      </div>
    </div>
  );
}
