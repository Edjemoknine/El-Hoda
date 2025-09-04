import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Heart,
  Star,
  Play,
  ArrowRight,
  Globe,
  MessageCircle,
  Users,
  Download,
  Smartphone,
} from "lucide-react";

export default function MoratilLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                Moratil
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-sm font-medium hover:text-emerald-600 transition-colors"
              >
                About Islam
              </a>
              <a
                href="#stories"
                className="text-sm font-medium hover:text-emerald-600 transition-colors"
              >
                Stories
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium hover:text-emerald-600 transition-colors"
              >
                How it Works
              </a>
              <a
                href="#learn"
                className="text-sm font-medium hover:text-emerald-600 transition-colors"
              >
                Learn
              </a>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-background to-background py-8 md:py-32 md:pt-4">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="text-center lg:text-left">
              <Badge
                variant="secondary"
                className="mb-8 bg-emerald-100 text-emerald-700 border-emerald-200"
              >
                <Globe className="w-4 h-4 mr-2" />
                For Truth Seekers Worldwide
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-8 leading-tight">
                Discover & Learn
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                  Islam
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty leading-relaxed">
                Turn your curiosity into knowledge. A digital platform to learn
                about Islamic teachings through authentic sources, educational
                content, and inspiring stories from real people who found their
                path to Islam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 bg-emerald-600 hover:bg-emerald-700 shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Free
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-6 border-2 hover:bg-emerald-50 bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Stories
                </Button>
              </div>
            </div>

            {/* Right Column - Masonry Image Layout */}
            <div className="relative">
              {/* Fade overlay at top */}
              <div className="absolute -top-4 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
              {/* Fade overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

              <div className="grid -mt-20 grid-cols-2 gap-4 h-[700px] overflow-hidden">
                {/* Left column of masonry */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-6 h-40 flex items-center justify-center shadow-lg opacity-60">
                    <img
                      src="/friday.webp"
                      alt="Islamic Architecture"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 h-56 flex items-center justify-center shadow-lg">
                    <img
                      src="/group-womens.webp"
                      alt="Quran Study"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 h-48 flex items-center justify-center shadow-lg">
                    <img
                      src="/group.webp"
                      alt="Islamic Calligraphy"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl p-6 h-44 flex items-center justify-center shadow-lg">
                    <img
                      src="/maka.webp"
                      alt="Peace and Nature"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 h-36 flex items-center justify-center shadow-lg opacity-60">
                    <img
                      src="/amirican-muslim.webp"
                      alt="Islamic Patterns"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Right column of masonry */}
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl p-6 h-36 flex items-center justify-center shadow-lg opacity-60">
                    <img
                      src="/pray.webp"
                      alt="Mosque Interior"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 h-52 flex items-center justify-center shadow-lg">
                    <img
                      src="/quran.webp"
                      alt="Community Prayer"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-6 h-44 flex items-center justify-center shadow-lg">
                    <img
                      src="/reading.webp"
                      alt="Learning Community"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl p-6 h-40 flex items-center justify-center shadow-lg">
                    <img
                      src="/women-pray.webp"
                      alt="Quran Reading"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-6 h-48 flex items-center justify-center shadow-lg opacity-60">
                    <img
                      src="/group.webp"
                      alt="Family Learning"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Authentic Learning</h3>
              <p className="text-sm text-muted-foreground">
                Learn from verified Islamic sources and scholarly content
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Real Stories</h3>
              <p className="text-sm text-muted-foreground">
                Watch authentic conversion stories from real people
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Community Support</h3>
              <p className="text-sm text-muted-foreground">
                Connect with supportive community of learners
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Multiple Languages</h3>
              <p className="text-sm text-muted-foreground">
                Available in European languages for better understanding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-emerald-50/30 to-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Core Beliefs of Islam
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the fundamental principles that guide Muslim life
              and faith
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">
                  Tawhid (Oneness of God)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  The belief in one God (Allah) who is the creator and sustainer
                  of all existence, without partners or equals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Prophethood</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Belief in all prophets sent by God, including Abraham, Moses,
                  Jesus, and Muhammad (peace be upon them all) as the final
                  messenger.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Afterlife</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Belief in life after death, where individuals are held
                  accountable for their actions and rewarded accordingly.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              How Moratil Works
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your journey to understanding Islam in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-emerald-600">1</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4">Download & Explore</h4>
              <p className="text-muted-foreground leading-relaxed">
                Download the Moratil app and start exploring Islamic teachings
                at your own pace with our guided learning paths.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">2</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4">Watch & Learn</h4>
              <p className="text-muted-foreground leading-relaxed">
                Watch authentic stories from real converts and access
                educational content about Islamic beliefs and practices.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-600">3</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4">Connect & Grow</h4>
              <p className="text-muted-foreground leading-relaxed">
                Join our supportive community, ask questions, and continue your
                spiritual journey with guidance from knowledgeable mentors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Stories Section */}
      <section
        id="stories"
        className="py-20 bg-gradient-to-b from-slate-50 to-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Real Stories, Real Transformations
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch authentic conversion stories from Europeans and people
              worldwide who found peace and truth in Islam
            </p>
          </div>

          {/* Featured Video Player */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-video bg-slate-700 rounded-2xl relative overflow-hidden group cursor-pointer">
                <img
                  src={"/american-muslim.webp"}
                  alt="Featured Conversion Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-slate-800 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="text-white font-semibold text-lg mb-1">
                      Sarah's Journey to Islam
                    </h4>
                    <p className="text-white/80 text-sm">
                      Former Christian from Germany shares her spiritual
                      transformation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Marcus from Sweden",
                description: "Engineer discovers Islam through science",
                thumbnail: "/friday.webp",
                duration: "12:45",
              },
              {
                title: "Elena from Italy",
                description: "Artist finds peace in Islamic community",
                thumbnail: "group.webp",
                duration: "8:30",
              },
              {
                title: "James from UK",
                description: "Former atheist embraces Islamic faith",
                thumbnail: "group-womens.webp",
                duration: "15:20",
              },
              {
                title: "Marie from France",
                description: "Teacher's spiritual awakening story",
                thumbnail: "maka.webp",
                duration: "10:15",
              },
              {
                title: "David from Netherlands",
                description: "Businessman finds purpose in Islam",
                thumbnail: "quran.webp",
                duration: "9:45",
              },
              {
                title: "Anna from Poland",
                description: "Student's journey to Islamic faith",
                thumbnail: "pray.webp",
                duration: "11:30",
              },
            ].map((video, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <Play className="w-5 h-5 text-slate-800 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                    {video.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base">
                    {video.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-3 p-0 h-auto text-emerald-600 hover:text-emerald-700"
                  >
                    Watch Story <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-2"
            >
              View All Stories <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              The Five Pillars of Islam
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The foundational practices that shape a Muslim's spiritual and
              daily life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "1",
                title: "Shahada (Declaration of Faith)",
                description:
                  "The testimony that there is no god but Allah, and Muhammad is His messenger.",
                icon: Star,
                color: "from-emerald-500 to-emerald-600",
              },
              {
                number: "2",
                title: "Salah (Prayer)",
                description:
                  "Five daily prayers that connect the believer directly with Allah.",
                icon: Heart,
                color: "from-blue-500 to-blue-600",
              },
              {
                number: "3",
                title: "Zakat (Charity)",
                description:
                  "Giving a portion of wealth to help those in need and purify one's soul.",
                icon: Users,
                color: "from-purple-500 to-purple-600",
              },
              {
                number: "4",
                title: "Sawm (Fasting)",
                description:
                  "Fasting during the month of Ramadan to develop self-discipline and empathy.",
                icon: BookOpen,
                color: "from-orange-500 to-orange-600",
              },
              {
                number: "5",
                title: "Hajj (Pilgrimage)",
                description:
                  "The pilgrimage to Mecca, performed once in a lifetime if physically and financially able.",
                icon: Globe,
                color: "from-teal-500 to-teal-600",
              },
            ].map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <Card
                  key={pillar.number}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white p-6"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-gray-700">
                          {pillar.number}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-4">
                      {pillar.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="learn" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about Islam answered with clarity and respect
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What does 'Islam' mean?",
                answer:
                  "Islam means 'submission to God' and 'peace.' It represents the willing surrender to Allah's guidance and the peace that comes from living according to divine wisdom.",
              },
              {
                question: "How do Muslims view Jesus?",
                answer:
                  "Muslims deeply respect Jesus (Isa in Arabic) as one of the greatest prophets of God. The Quran speaks of his miraculous birth and his important message to humanity.",
              },
              {
                question: "What is the Quran?",
                answer:
                  "The Quran is the holy book of Islam, believed to be the direct word of God revealed to Prophet Muhammad. It serves as guidance for all aspects of life.",
              },
              {
                question: "Can anyone become Muslim?",
                answer:
                  "Yes, Islam welcomes all people regardless of their background, race, or previous beliefs. The path to Islam is open to anyone seeking truth and spiritual fulfillment.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Download the Moratil app to access the complete Quran, educational
            resources, and connect with a supportive community of learners from
            around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-6 bg-white text-emerald-700 hover:bg-gray-50 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Moratil App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Questions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Moratil</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Bridging hearts to the truth of Islam through education,
                understanding, and community.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Learn</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About Islam
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Five Pillars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Quran Study
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Prayer Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Community</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Conversion Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Local Mosques
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Study Groups
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Ask Questions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Find Local Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Educational Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 Moratil. Built with respect and dedication to sharing
              the truth of Islam.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
