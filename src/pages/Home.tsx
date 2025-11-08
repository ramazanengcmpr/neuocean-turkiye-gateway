import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Cloud, Users, Shield, Globe, Zap } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";
import dashboardImage from "@/assets/jirlie-dashboard.jpg";

const Home = () => {
  const features = [
    {
      icon: Cloud,
      title: "Bulut Tabanlı",
      description: "Her yerden erişim, %99.9 uptime garantisi",
    },
    {
      icon: BarChart3,
      title: "Yapay Zeka Analitiği",
      description: "Veriye dayalı akıllı iş kararları",
    },
    {
      icon: Users,
      title: "Entegre Yönetim",
      description: "Satış, muhasebe, İK tek panoda",
    },
    {
      icon: Shield,
      title: "Güvenli Altyapı",
      description: "ISO standartlarında veri güvenliği",
    },
    {
      icon: Globe,
      title: "Global Deneyim",
      description: "29+ veri merkezi ile dünya çapında",
    },
    {
      icon: Zap,
      title: "Hızlı Kurulum",
      description: "Dakikalar içinde işe başlayın",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Digital transformation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Neu Ocean Technologies Ltd. Türkiye Temsilciliği
            </div>
            
            <h1 className="text-white">
              Türkiye'de Dijital İş Dönüşümünün Öncüsü
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ben <span className="font-semibold text-accent">Ramazan Gülmez</span>, 
              Neu Ocean Technologies'in Türkiye Temsilcisi olarak, işletmenizin dijital dönüşümünü 
              <span className="font-semibold"> Jirlie</span> platformu ile gerçekleştiriyorum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                <Link to="/solutions">
                  Çözümleri Keşfet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Ücretsiz Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                Tek Platform, Sınırsız Olasılık
              </div>
              <h2 className="text-foreground">
                İşinizi Tek Panodan Yönetin
              </h2>
              <p className="text-lg text-muted-foreground">
                Jirlie Cloud ve Enterprise çözümleri ile satış, muhasebe, İK, envanter ve daha fazlasını 
                tek bir platformda birleştirin. Küçük işletmelerden büyük kuruluşlara kadar her ölçekte 
                dijital dönüşüm sağlıyoruz.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Tüm iş süreçleriniz tek panoda</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Veriye dayalı karar alma</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Türkçe destek ve yerel çözümler</span>
                </li>
              </ul>
              <Button asChild className="gradient-primary">
                <Link to="/why-neu-ocean">Neden Neu Ocean?</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={dashboardImage}
                alt="Jirlie Dashboard"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Güçlü Özellikler, Kolay Kullanım</h2>
            <p className="text-lg text-muted-foreground">
              Modern işletmelerin ihtiyaç duyduğu tüm araçlar, kullanıcı dostu bir arayüzde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-border/50 shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 gradient-primary rounded-2xl p-12 shadow-elegant">
            <h2 className="text-white">
              Dijital Dönüşüme Hazır mısınız?
            </h2>
            <p className="text-xl text-white/90">
              Türkiye'deki işletmeniz için özel çözümler hakkında konuşalım
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  İletişime Geç
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/solutions">Çözümleri İncele</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
