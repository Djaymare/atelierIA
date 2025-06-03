import { Shield, Eye, Heart, Users, AlertTriangle, CheckCircle } from "lucide-react";

export function EthicsPage() {
  const ethicsTopics = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Respect de la vie privée",
      description: "L'IA peut collecter beaucoup d'informations sur nous. Il est important de protéger nos données personnelles.",
      tips: [
        "Ne partage jamais d'informations personnelles avec une IA",
        "Demande toujours à tes parents avant d'utiliser un nouvel outil",
        "Lis les conditions d'utilisation avec un adulte"
      ]
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      title: "Transparence et vérité",
      description: "L'IA peut parfois donner des informations incorrectes. Il faut toujours vérifier ce qu'elle dit.",
      tips: [
        "Vérifie les informations avec plusieurs sources",
        "Demande à un adulte si tu n'es pas sûr",
        "N'utilise pas l'IA pour tes devoirs sans permission"
      ]
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Bienveillance et respect",
      description: "Même si l'IA n'a pas de sentiments, nous devons rester polis et respectueux dans nos interactions.",
      tips: [
        "Utilise un langage poli avec l'IA",
        "Ne demande pas à l'IA de créer du contenu méchant",
        "Respecte les autres utilisateurs"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Équité et inclusion",
      description: "L'IA doit être juste pour tout le monde, peu importe qui nous sommes.",
      tips: [
        "Signale si l'IA semble injuste envers certaines personnes",
        "Utilise l'IA pour aider, pas pour exclure",
        "Respecte la diversité dans tes créations"
      ]
    }
  ];

  const warnings = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      title: "Attention aux fausses informations",
      description: "L'IA peut parfois inventer des faits. Vérifie toujours les informations importantes."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      title: "Protection des données",
      description: "Ne partage jamais ton nom, adresse, école ou numéro de téléphone avec une IA."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-purple-500" />,
      title: "Créativité authentique",
      description: "Utilise l'IA comme aide, mais garde ta propre créativité et originalité."
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            <span>Éthique & Responsabilité</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Utiliser l'IA de manière
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> responsable</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            L'intelligence artificielle est un outil puissant qui peut nous aider dans de nombreuses tâches. 
            Mais comme tout outil puissant, il faut apprendre à l'utiliser correctement et de manière éthique.
          </p>
        </div>

        {/* Ethics Topics */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {ethicsTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                {topic.icon}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 ml-4">
                  {topic.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {topic.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Bonnes pratiques :
                </h4>
                <ul className="space-y-2">
                  {topic.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Warnings Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            ⚠️ Points d'attention importants
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {warnings.map((warning, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-orange-500"
              >
                <div className="flex items-center mb-4">
                  {warning.icon}
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 ml-3">
                    {warning.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {warning.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Principles */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            🌟 Les principes fondamentaux
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Respect</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Traite l'IA et les autres avec respect</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Vérification</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Vérifie toujours les informations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Protection</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Protège tes données personnelles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Créativité</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Garde ta propre créativité</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
