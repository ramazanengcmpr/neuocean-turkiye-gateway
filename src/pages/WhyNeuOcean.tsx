import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  TrendingUp, 
  Shield, 
  Headphones, 
  DollarSign,
  Users,
  Globe,
  Zap,
  BarChart3,
  Lock
} from "lucide-react";

const WhyNeuOcean = () => {
  const benefits = [
    {
      icon: Cloud,
      title: "%100 Bulut Hazır ve Ölçeklenebilir",
      description: "İster küçük bir ekiple başlayın, ister milyonlarca kullanıcıya ölçeklendirin - altyapımız sizinle birlikte büyür.",
    },
    {
      icon: BarChart3,
      title: "Entegre İş Zekası",
      description: "Yapay zeka destekli analitiği ve akıllı raporlama araçlarıyla veriye dayalı kararlar alın.",
    },
    {
      icon: Globe,
      title: "Küresel Uzmanlık + Yerel Türkiye Desteği",
      description: "Dünya çapında kanıtlanmış çözümler, Türkçe destek ve yerel iş süreçlerine uyumlu özellikler.",
    },
    {
      icon: Shield,
      title: "ISO Uyumlu Güvenlik Standartları",
      description: "Verileriniz en yüksek güvenlik standartlarıyla korunur. Otomatik yedekleme ve şifreleme.",
    },
    {
      icon: DollarSign,
      title: "Rekabetçi Türkiye Fiyatlandırması",
      description: "KOBİ'lerden büyük kuruluşlara, her bütçeye uygun esnek paket seçenekleri.",
    },
    {
      icon: Zap,
      title: "Hızlı Kurulum, Anında Verimlilik",
      description: "Karmaşık entegrasyon yok - dakikalar içinde başlayın, hemen üretken olun.",
    },
  ];

  const features = [
    "✓ Tek Panelde Bütünleşik Yönetim",
    "✓ HR, Muhasebe, Satış, CRM, Envanter Modülleri",
    "✓ AI-Destekli Analitik ve Tahmin",
    "✓ 29+ Global Veri Merkezi ile Güvenli Hosting",
    "✓ %99.9 Uptime Garantisi",
    "✓ Mobil ve Web Erişim",
    "✓ API Entegrasyonları",
    "✓ Özelleştirilebilir Dashboard'lar",
  ];

  const stats = [
    { number: "29+", label: "Global Veri Merkezi" },
    { number: "%99.9", label: "Uptime Garantisi" },
    { number: "7/24", label: "Türkçe Destek" },
    { number: "1000+", label: "Mutlu İşletme" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-white">Neden Neu Ocean ile Çalışmalısınız?</h1>
            <p className="text-xl text-white/90">
              Dijital dönüşümde güvenilir ortağınız - global uzmanlık, yerel destek
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4">Değer Önermemiz</h2>
            <p className="text-lg text-muted-foreground">
              Modern işletmelerin ihtiyaç duyduğu her şey, kullanımı kolay bir platformda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                      Öne Çıkan Özellikler
                    </div>
                    <h2>Jirlie ile Kazanacaklarınız</h2>
                    <p className="text-lg text-muted-foreground">
                      Tüm iş süreçlerinizi tek bir platformda birleştiren kapsamlı özellik seti
                    </p>
                  </div>
                  <div className="space-y-3">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Güvenilir Ortağınız</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full gradient-primary flex items-center justify-center">
                    <Lock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Güvenlik Önceliği</h3>
                  <p className="text-muted-foreground">
                    ISO standartlarında şifreleme, otomatik yedekleme ve çok katmanlı güvenlik
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full gradient-primary flex items-center justify-center">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Yerel Destek</h3>
                  <p className="text-muted-foreground">
                    Türkçe eğitim, onboarding süreçleri ve 7/24 teknik destek ekibi
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full gradient-primary flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Büyüme Odaklı</h3>
                  <p className="text-muted-foreground">
                    İşletmenizle birlikte büyüyen esnek ve ölçeklenebilir altyapı
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant border-primary/20">
              <CardContent className="p-12 text-center space-y-6">
                <Users className="h-16 w-16 mx-auto text-primary" />
                <blockquote className="text-2xl font-medium text-foreground">
                  "Dijital dönüşüm sadece yazılım değil, doğru ortakla çalışmaktır. 
                  Neu Ocean ile Türk işletmeleri global standartlarda çözümlere ulaşıyor."
                </blockquote>
                <div className="pt-4">
                  <p className="font-semibold">Ramazan Gülmez</p>
                  <p className="text-sm text-muted-foreground">
                    Türkiye Temsilcisi, Neu Ocean Technologies
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 gradient-primary rounded-2xl p-12 shadow-elegant">
            <h2 className="text-white">Dijital Dönüşüm Yolculuğunuza Başlayın</h2>
            <p className="text-xl text-white/90">
              İşletmeniz için en uygun çözümü birlikte belirleyelim
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Ücretsiz Demo Talep Et</Link>
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

// Fix import
import { Cloud } from "lucide-react";

export default WhyNeuOcean;
