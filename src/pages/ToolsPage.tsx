import { MessageSquare, Music, Code, Video, BookOpen, ExternalLink, Star, Brain, Sparkles, Search, Clapperboard, Palette, Mic } from "lucide-react";
import { useState } from "react";

export function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const tools = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      name: "ChatGPT",
      categories: ["Conversation", "Créativité", "Écriture", "Images", "Programmation", "Recherche"],
      description: "Un assistant d'OpenAI pour poser des questions, obtenir des explications, avoir des conversations et créer des images.",
      ageRange: "13+ ans",
      features: ["Chat", "Création d'images", "Code"],
      safety: "Supervision parentale recommandée",
      color: "blue",
      url: "https://chat.openai.com"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      name: "Google Gemini",
      categories: ["Conversation", "Créativité", "Écriture", "Images", "Programmation", "Recherche"],
      description: "Assistant IA de Google pour répondre aux questions, aider aux devoirs et explorer des sujets éducatifs.",
      ageRange: "13+ ans",
      features: ["Questions-réponses", "Recherche d'informations", "Explications détaillées"],
      safety: "Contrôles parentaux disponibles",
      color: "blue",
      url: "https://gemini.google.com"
    },
    {
      icon: <Brain className="h-8 w-8 text-orange-600" />,
      name: "Claude",
      categories: ["Conversation", "Écriture", "Programmation", "Recherche"],
      description: "Assistant IA d'Anthropic conçu pour être utile, inoffensif et honnête dans les interactions éducatives.",
      ageRange: "13+ ans",
      features: ["Conversations éducatives", "Aide à l'écriture", "Analyse de texte", "Explications claires"],
      safety: "Conçu avec des principes de sécurité IA",
      color: "orange",
      url: "https://claude.ai"
    },
    {
      icon: <Search className="h-8 w-8 text-purple-600" />,
      name: "Perplexity",
      categories: ["Conversation", "Éducation", "Recherche"],
      description: "Moteur de recherche IA qui fournit des réponses précises avec des sources vérifiées pour l'apprentissage.",
      ageRange: "13+ ans",
      features: ["Recherche avec sources", "Réponses documentées", "Exploration de sujets", "Vérification des faits"],
      safety: "Utilisation responsable recommandée",
      color: "purple",
      url: "https://www.perplexity.ai"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      name: "Gamma",
      categories: ["Éducation", "Présentation"],
      description: "Créer des présentations interactives et éducatives avec des modèles IA.",
      ageRange: "8+ ans",
      features: ["Création de présentations"],
      safety: "Environnement sécurisé",
      color: "blue",
      url: "https://gamma.app"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-pink-600" />,
      name: "Napkin",
      categories: ["Éducation", "Présentation"],
      description: "Créer des présentations texte en intégrant des visuels automatiquement.",
      ageRange: "8+ ans",
      features: ["Création de présentations"],
      safety: "Environnement sécurisé",
      color: "pink",
      url: "https://napkin.ai"
    },
    {
      icon: <Code className="h-8 w-8 text-orange-600" />,
      name: "Scratch",
      categories: ["Éducation", "Programmation"],
      description: "Apprendre la programmation et l'IA avec des blocs visuels adaptés aux enfants.",
      ageRange: "8+ ans",
      features: ["Programmation visuelle", "Projets IA", "Apprentissage ludique"],
      safety: "Environnement sécurisé",
      color: "orange",
      url: "https://scratch.mit.edu"
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      name: "Vittascience",
      categories: ["Éducation", "Programmation", "Robotique"],
      description: "Plateforme éducative française pour apprendre la programmation, la robotique et l'IA de manière ludique.",
      ageRange: "8+ ans",
      features: ["Programmation par blocs", "Robotique éducative", "Projets IA", "Interface adaptée aux enfants"],
      safety: "Conçu spécifiquement pour l'éducation",
      color: "green",
      url: "https://www.vittascience.com"
    },
    {
      icon: <Music className="h-8 w-8 text-purple-600" />,
      name: "Suno AI",
      categories: ["Créativité", "Musique"],
      description: "Composer de la musique et des chansons avec l'aide de l'intelligence artificielle.",
      ageRange: "8+ ans",
      features: ["Composition musicale", "Paroles", "Différents styles"],
      safety: "À superviser",
      color: "purple",
      url: "https://suno.com"
    },
    {
      icon: <Mic className="h-8 w-8 text-orange-600" />,
      name: "Udio",
      categories: ["Créativité", "Musique"],
      description: "Générateur de musique IA pour composer des chansons et explorer la créativité musicale.",
      ageRange: "13+ ans",
      features: ["Génération musicale", "Composition de chansons", "Styles variés", "Créativité sonore"],
      safety: "À superviser",
      color: "orange",
      url: "https://www.udio.com"
    },
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      name: "Pixverse",
      categories: ["Créativité", "Vidéo"],
      description: "Plateforme de génération de vidéos IA accessible pour créer des contenus visuels créatifs.",
      ageRange: "13+ ans",
      features: ["Génération de vidéos", "Créativité visuelle", "Partage de contenus"],
      safety: "À superviser",
      color: "blue",
      url: "https://pixverse.ai"
    },
    {
      icon: <Palette className="h-8 w-8 text-pink-600" />,
      name: "Midjourney",
      categories: ["Créativité", "Images"],
      description: "Générateur d'images IA avancé pour créer des œuvres d'art et illustrations créatives.",
      ageRange: "13+ ans",
      features: ["Génération d'images", "Art numérique", "Styles artistiques", "Créativité illimitée"],
      safety: "À superviser",
      color: "pink",
      url: "https://www.midjourney.com"
    },
    {
      icon: <Video className="h-8 w-8 text-red-600" />,
      name: "Runway ML",
      categories: ["Créativité", "Vidéo"],
      description: "Créer et éditer des vidéos avec des effets d'intelligence artificielle.",
      ageRange: "13+ ans",
      features: ["Édition vidéo", "Effets spéciaux", "Animation"],
      safety: "À superviser",
      color: "red",
      url: "https://runwayml.com"
    },
    {
      icon: <Clapperboard className="h-8 w-8 text-gray-600" />,
      name: "Sora",
      categories: ["Créativité", "Vidéo"],
      description: "Générateur de vidéos IA d'OpenAI pour créer des contenus visuels créatifs et éducatifs.",
      ageRange: "13+ ans",
      features: ["Génération de vidéos", "Création visuelle", "Storytelling", "Effets cinématographiques"],
      safety: "Filtres de sécurité intégrés",
      color: "gray",
      url: "https://sora.com"
    }
  ];

  // Generate categories dynamically from tools
  const allCategories = Array.from(new Set(tools.flatMap(tool => tool.categories)));
  const categories = ["Tous", ...allCategories.sort()];

  // Filter tools based on selected category
  const filteredTools = selectedCategory === "Tous"
    ? tools
    : tools.filter(tool => tool.categories.includes(selectedCategory));

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
                tool.color === 'teal' ? 'from-teal-500 to-teal-600' :
                tool.color === 'slate' ? 'from-slate-500 to-slate-600' :
                tool.color === 'pink' ? 'from-pink-500 to-pink-600' :
                'from-indigo-500 to-indigo-600'
              } text-white`}>
                <div className="flex items-center justify-between mb-4">
                  {tool.icon}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {tool.ageRange}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <div className="flex flex-wrap gap-1">
                  {tool.categories.map((category, categoryIndex) => (
                    <span
                      key={categoryIndex}
                      className="text-xs bg-white/20 px-2 py-1 rounded-full opacity-90"
                    >
                      {category}
                    </span>
                  ))}
                </div>
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
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 no-underline"
                >
                  Découvrir l'outil
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
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
