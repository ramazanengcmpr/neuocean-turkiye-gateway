import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Code, Brain, Briefcase, GraduationCap, Target } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const expertise = [
    {
      icon: Code,
      title: "Yazılım Geliştirme",
      items: ["Python, JavaScript, Node.js", "FastAPI, Express", "MongoDB, SQLAlchemy"],
    },
    {
      icon: Brain,
      title: "Yapay Zeka & ML",
      items: ["Vision Transformers", "XGBoost, Random Forest", "Anomaly Detection"],
    },
    {
      icon: Briefcase,
      title: "İş Sistemleri",
      items: ["REST API Design", "Cloud Deployment", "Data Analytics"],
    },
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "Neu Ocean Technologies",
      location: "Dubai, UAE",
      period: "Ağustos 2025 - Günümüz",
      highlights: [
        "AI-driven emlak ve veri platformları için backend API'ler geliştirdim",
        "MongoDB ve SQLAlchemy veritabanlarını entegre ettim ve yönettim",
        "Property scoring algoritmaları geliştirdim",
        "Clustering ve anomaly detection modelleri uyguladım",
      ],
    },
    {
      role: "Software Engineer",
      company: "GrifonAI",
      location: "Çankırı, Türkiye",
      period: "Haziran 2024 - Kasım 2024",
      highlights: [
        "AI destekli uygulamaların geliştirilmesine katkıda bulundum",
        "Logistic Regression, Random Forest, XGBoost ve SVM algoritmalarını uyguladım",
        "Vision Transformers (ViT) ve ensemble yöntemleri ile deneyler gerçekleştirdim",
        "Tıbbi AI araştırma projelerinde çalıştım",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white mb-4">
              Türkiye Temsilcisi
            </div>
            <h1 className="text-white">Ramazan Gülmez</h1>
            <p className="text-xl text-white/90">
              Bilgisayar Mühendisi | Neu Ocean Technologies Türkiye Temsilcisi
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Yapay zeka, yazılım geliştirme ve dijital sistemler konusundaki uzmanlığımla, 
              Türk şirketlerinin teknoloji çözümlerini etkili bir şekilde benimsemeleri ve 
              sürdürülebilir büyüme sağlamaları için destek oluyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img
                src={teamImage}
                alt="Team collaboration"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                <h2>Misyonum</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Neu Ocean Technologies'in Türkiye Temsilcisi olarak görevim, Türk işletmelerini 
                <span className="font-semibold text-foreground"> Jirlie Cloud</span> ve 
                <span className="font-semibold text-foreground"> Jirlie Enterprise</span> gibi 
                yenilikçi yazılım çözümleriyle buluşturmaktır.
              </p>
              <p className="text-lg text-muted-foreground">
                Bu platformlar, operasyonları kolaylaştırmak, işbirliğini geliştirmek ve 
                veriye dayalı kararlar almayı sağlamak için tasarlanmıştır.
              </p>
              <div className="pt-4">
                <Button asChild className="gradient-primary">
                  <Link to="/contact">Birlikte Çalışalım</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4">Uzmanlık Alanlarım</h2>
            <p className="text-lg text-muted-foreground">
              Modern teknolojiler ve iş süreçleri konusunda derinlemesine deneyim
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {expertise.map((area) => {
              const Icon = area.icon;
              return (
                <Card key={area.title} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                    <ul className="space-y-2">
                      {area.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="h-8 w-8 text-primary" />
              <h2>Profesyonel Deneyim</h2>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-muted-foreground">{exp.period}</div>
                    </div>
                    <ul className="space-y-2 mt-6">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Eğitim</h3>
                </div>
                <p className="text-lg font-medium">Bilgisayar Mühendisliği</p>
                <p className="text-muted-foreground">Çankırı Karatekin Üniversitesi</p>
                <p className="text-muted-foreground mt-2">İyi Derece ile Mezun</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2>İşletmenizin Dijital Dönüşümünde Yanınızdayım</h2>
            <p className="text-lg text-muted-foreground">
              Neu Ocean'ın küresel uzmanlığını ve yerel Türkiye desteğini bir araya getiriyorum
            </p>
            <Button asChild size="lg" className="gradient-primary">
              <Link to="/contact">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
