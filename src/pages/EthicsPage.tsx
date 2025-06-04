import { Shield, Eye, Heart, Users, AlertTriangle, CheckCircle, Brain, Leaf, Copyright, FileText, Briefcase, Search, MessageSquareWarning, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function EthicsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const ethicsTopics = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Respect de la vie privée",
      description: "L'IA peut collecter beaucoup d'informations sur nous. Il est important de protéger nos données personnelles et celles des autres.",
      tips: [
        "Ne partage jamais d'informations personnelles (nom, adresse, école, secrets) avec une IA.",
        "Sois prudent avec ce que tu écris dans les prompts (consignes), ces informations peuvent être enregistrées.",
        "Demande toujours à tes parents avant d'utiliser un nouvel outil d'IA.",
        "Lis les conditions d'utilisation avec un adulte pour comprendre comment tes données sont utilisées."
      ]
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      title: "Transparence et vérité (Lutte contre la désinformation)",
      description: "L'IA peut parfois donner des informations incorrectes, incomplètes ou inventer des choses (on appelle ça des \"hallucinations\"). Elle peut aussi être utilisée pour créer de fausses informations très réalistes (deepfakes).",
      tips: [
        "Vérifie toujours les informations importantes avec plusieurs sources fiables.",
        "Développe ton esprit critique : ce n'est pas parce que l'IA le dit que c'est vrai.",
        "Demande à un adulte si tu as un doute sur une information ou une image.",
        "Méfie-toi des images ou vidéos trop surprenantes (ex: la fausse photo du Pape en doudoune). Elles pourraient être des deepfakes."
      ]
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Bienveillance et respect dans les interactions",
      description: "Même si l'IA n'a pas de sentiments, nous devons rester polis et responsables dans nos demandes. L'intention derrière notre prompt est importante.",
      tips: [
        "Utilise un langage poli avec l'IA.",
        "Ne demande pas à l'IA de créer du contenu méchant, haineux, discriminatoire ou illégal.",
        "N'utilise pas l'IA pour tricher ou pour nuire à quelqu'un.",
        "Si l'IA génère un contenu qui te met mal à l'aise, parles-en à un adulte."
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Équité et inclusion (Lutte contre les biais)",
      description: "L'IA apprend à partir des données qu'on lui donne. Si ces données contiennent des stéréotypes ou des préjugés, l'IA risque de les reproduire. Elle doit être juste pour tout le monde.",
      tips: [
        "Sois conscient que l'IA peut avoir des biais (ex: représenter certains métiers avec toujours le même genre de personne).",
        "Signale si une IA semble injuste ou discriminatoire.",
        "Utilise l'IA pour aider et inclure, pas pour exclure ou se moquer.",
        "Cherche à obtenir des IA entraînées sur des données diversifiées et représentatives."
      ]
    },
    {
      icon: <Copyright className="h-8 w-8 text-yellow-600" />,
      title: "Droit d'auteur et création originale",
      description: "Les IA génératives sont entraînées sur d'énormes quantités de textes et d'images, parfois sans l'accord des créateurs. Il est important de respecter le travail des artistes et auteurs.",
      tips: [
        "L'IA est un outil d'aide à la créativité, pas une machine à copier. Garde ton style unique !",
        "Si tu utilises du contenu généré par IA, vérifie qu'il ne s'agit pas de plagiat ou d'une copie d'une œuvre existante.",
        "Sois transparent : si tu utilises beaucoup l'IA pour un travail, mentionne-le (surtout à l'école).",
        "Respecte les artistes : ne demande pas à l'IA de copier le style d'un artiste sans réfléchir aux conséquences."
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
      title: "Impact sur l'emploi et les métiers",
      description: "L'IA peut faire des tâches qui étaient avant faites par des humains. Cela soulève des questions sur l'avenir de certains métiers.",
      tips: [
        "L'IA peut être un outil qui aide les professionnels, pas seulement qui les remplace.",
        "De nouveaux métiers vont apparaître grâce à l'IA (ex: spécialiste en éthique de l'IA).",
        "Il est important de réfléchir à comment la société peut s'adapter à ces changements.",
        "Apprends à utiliser l'IA comme une compétence supplémentaire pour ton avenir."
      ]
    },
    {
      icon: <Leaf className="h-8 w-8 text-lime-600" />,
      title: "Impact environnemental",
      description: "Entraîner et faire fonctionner les IA génératives consomme beaucoup d'énergie, ce qui a un impact sur l'environnement (émissions de CO2).",
      tips: [
        "Sois conscient que chaque requête à une IA a un coût énergétique.",
        "Soutiens les initiatives pour des IA plus économes en énergie et utilisant des sources renouvelables.",
        "Utilise l'IA de manière réfléchie, évite les usages superflus.",
        "L'innovation doit aussi chercher à réduire l'empreinte écologique de la technologie."
      ]
    }
  ];

  const warnings = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      title: "Attention aux \"hallucinations\" de l'IA",
      description: "L'IA peut inventer des faits ou donner des informations erronées avec beaucoup d'assurance. Vérifie toujours !"
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: "Protection de tes données",
      description: "Ne partage jamais ton nom complet, adresse, école, mots de passe ou secrets avec une IA."
    },
    {
      icon: <MessageSquareWarning className="h-6 w-6 text-purple-500" />,
      title: "Prompts et intentions",
      description: "Réfléchis bien à ce que tu demandes. N'essaie pas de contourner les sécurités de l'IA pour obtenir du contenu inapproprié ou dangereux."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: "Créativité authentique vs. Plagiat",
      description: "Utilise l'IA comme une source d'inspiration, mais garde ta propre créativité. Ne présente pas le travail de l'IA comme étant le tien à 100% sans le dire."
    }
  ];

  // Fonctions de navigation du carousel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ethicsTopics.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ethicsTopics.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Constantes pour le swipe
  const minSwipeDistance = 50;

  // Fonctions pour le support tactile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Fonctions pour l'auto-play
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isAutoPlayPaused) {
        nextSlide();
      }
    }, 8000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    setIsAutoPlayPaused(true);
  };

  const handleMouseLeave = () => {
    setIsAutoPlayPaused(false);
  };

  // Effect pour l'auto-play
  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [currentIndex, isAutoPlayPaused]);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            <span>Éthique & IA Générative</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Utiliser l'IA de manière
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> responsable</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            L'intelligence artificielle (IA) est un outil puissant. Apprenons ensemble à l'utiliser correctement et avec sagesse.
          </p>
        </div>

        {/* What is Ethics and IAG? */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">🤔 Qu'est-ce que l'éthique ?</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                L’éthique, c’est réfléchir à ce qui est bien ou mal, et à la bonne manière d’agir. C’est comme une boussole qui nous aide à prendre de bonnes décisions, en respectant des valeurs importantes comme l'honnêteté, le respect et la justice. Par exemple, se demander si c'est bien de tricher à un jeu, c'est faire de l'éthique !
                </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">🤖 Qu'est-ce que l'IA Générative (IAG) ?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                L'IA Générative est un type d'intelligence artificielle capable de créer du contenu nouveau (textes, images, sons) à partir de ce qu'elle a appris.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Imagine un perroquet très savant : tu lui parles, et il te répond en inventant quelque chose de nouveau, basé sur des milliards de phrases qu'il a entendues. ChatGPT (texte) ou Midjourney (images) sont des exemples d'IAG. On peut leur demander d'écrire une histoire de dragon ou de dessiner un chat astronaute !
                </p>
            </div>
        </div>
        
        {/* Ethics Topics Intro */}
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Les grands enjeux éthiques de l'IA</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
                Que ce soit lors de sa création ou de son utilisation, l'IA soulève des questions importantes.
            </p>
        </div>

        {/* Ethics Topics Carousel */}
        <div
          className="relative mb-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {ethicsTopics.map((topic, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col h-full max-w-2xl mx-auto">
                    <div className="flex items-center mb-6">
                      {topic.icon}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 ml-4">
                        {topic.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                      {topic.description}
                    </p>

                    <div className="space-y-3 mt-auto">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        Bonnes pratiques :
                      </h4>
                      <ul className="space-y-2">
                        {topic.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Slide suivant"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {ethicsTopics.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {currentIndex + 1} / {ethicsTopics.length}
            </span>
          </div>
        </div>

        {/* Warnings Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            ⚠️ Points d'attention importants
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warnings.map((warning, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-orange-500"
              >
                <div className="flex items-center mb-4">
                  {warning.icon}
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 ml-3 text-md">
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

        {/* Key Principles / Golden Rules */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            🌟 Nos Engagements : Les Règles d'Or
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Respect</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Traite l'IA et les autres avec respect et bienveillance.</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Vérification</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Vérifie toujours les informations données par l'IA.</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Protection</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Protège tes données personnelles et celles des autres.</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Créativité</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Utilise l'IA pour t'inspirer, mais garde ton originalité.</p>
            </div>

            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg col-span-2 md:col-span-1 lg:col-span-1">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Transparence</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sois honnête sur ton utilisation de l'IA quand c'est nécessaire.</p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
                L'IA est un voyage passionnant. Explorons-le ensemble avec curiosité et responsabilité !
            </p>
        </footer>

      </div>
    </div>
  );
}