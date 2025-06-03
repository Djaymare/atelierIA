import { MessageSquare, Image, Music, Code, Video, BookOpen, ExternalLink, Star } from "lucide-react";
import { useState } from "react";

export function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const tools = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      name: "ChatGPT",
      category: "Conversation",
      description: "Un assistant IA pour poser des questions, obtenir des explications et avoir des conversations éducatives.",
      ageRange: "10+ ans",
      features: ["Questions-réponses", "Aide aux devoirs", "Explications simples"],
      safety: "Supervision parentale recommandée",
      color: "blue"
    },
    {
      icon: <Image className="h-8 w-8 text-purple-600" />,
      name: "DALL-E Kids",
      category: "Images",
      description: "Créer des images amusantes et créatives à partir de descriptions textuelles.",
      ageRange: "8+ ans",
      features: ["Création d'images", "Art numérique", "Illustrations"],
      safety: "Filtres de contenu activés",
      color: "purple"
    },
    {
      icon: <Music className="h-8 w-8 text-green-600" />,
      name: "Suno AI",
      category: "Musique",
      description: "Composer de la musique et des chansons avec l'aide de l'intelligence artificielle.",
      ageRange: "12+ ans",
      features: ["Composition musicale", "Paroles", "Différents styles"],
      safety: "Contenu familial uniquement",
      color: "green"
    },
    {
      icon: <Code className="h-8 w-8 text-orange-600" />,
      name: "Scratch for AI",
      category: "Programmation",
      description: "Apprendre la programmation et l'IA avec des blocs visuels adaptés aux enfants.",
      ageRange: "8+ ans",
      features: ["Programmation visuelle", "Projets IA", "Apprentissage ludique"],
      safety: "Environnement sécurisé",
      color: "orange"
    },
    {
      icon: <Video className="h-8 w-8 text-red-600" />,
      name: "Runway ML Kids",
      category: "Vidéo",
      description: "Créer et éditer des vidéos avec des effets d'intelligence artificielle.",
      ageRange: "12+ ans",
      features: ["Édition vidéo", "Effets spéciaux", "Animation"],
      safety: "Mode enfant disponible",
      color: "red"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      name: "Story AI",
      category: "Écriture",
      description: "Écrire des histoires créatives avec l'aide de l'IA pour stimuler l'imagination.",
      ageRange: "10+ ans",
      features: ["Création d'histoires", "Aide à l'écriture", "Inspiration"],
      safety: "Contenu adapté aux enfants",
      color: "indigo"
    }
  ];

  const categories = ["Tous", "Conversation", "Images", "Musique", "Programmation", "Vidéo", "Écriture"];

  // Filter tools based on selected category
  const filteredTools = selectedCategory === "Tous" 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Outils recommandés</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Découvre les
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> outils d'IA</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une sélection d'outils d'intelligence artificielle adaptés aux enfants et approuvés par des experts en éducation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              {/* Tool Header */}
              <div className={`p-6 bg-gradient-to-r ${
                tool.color === 'blue' ? 'from-blue-500 to-blue-600' :
                tool.color === 'purple' ? 'from-purple-500 to-purple-600' :
                tool.color === 'green' ? 'from-green-500 to-green-600' :
                tool.color === 'orange' ? 'from-orange-500 to-orange-600' :
                tool.color === 'red' ? 'from-red-500 to-red-600' :
                'from-indigo-500 to-indigo-600'
              } text-white`}>
                <div className="flex items-center justify-between mb-4">
                  {tool.icon}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {tool.ageRange}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-sm opacity-90">{tool.category}</p>
              </div>

              {/* Tool Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Fonctionnalités :
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Safety */}
                <div className="mb-6">
                  <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {tool.safety}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  En savoir plus
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Guidelines */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            🛡️ Conseils de sécurité
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                Supervision parentale
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Utilise toujours ces outils avec un adulte à proximité
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                Données privées
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Ne partage jamais d'informations personnelles
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                Temps d'écran
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Utilise ces outils avec modération
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
