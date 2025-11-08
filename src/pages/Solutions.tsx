import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Building2, 
  Users, 
  BarChart3, 
  Package, 
  CreditCard,
  FileText,
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  Globe
} from "lucide-react";
import dashboardImage from "@/assets/jirlie-dashboard.jpg";

const Solutions = () => {
  const cloudFeatures = [
    { icon: Users, title: "CRM & Satış Yönetimi", description: "Müşteri ilişkilerinizi tek platformda yönetin" },
    { icon: BarChart3, title: "Yapay Zeka Analitiği", description: "Akıllı raporlama ve tahmin araçları" },
    { icon: Package, title: "Envanter Takibi", description: "Stok ve tedarik zinciri yönetimi" },
    { icon: CreditCard, title: "Muhasebe", description: "e-Fatura entegrasyonlu finansal yönetim" },
    { icon: FileText, title: "Proje Yönetimi", description: "Görev ve proje takip sistemi" },
    { icon: Calendar, title: "İK & Bordro", description: "İnsan kaynakları ve personel yönetimi" },
  ];

  const enterpriseFeatures = [
    { icon: Building2, title: "Özelleştirilebilir Modüller", description: "İşletmenize özel çözümler" },
    { icon: Shield, title: "Gelişmiş Güvenlik", description: "ISO standartlarında veri koruması" },
    { icon: Globe, title: "Çoklu Lokasyon Desteği", description: "Tüm şubelerinizi tek panoda" },
    { icon: MessageSquare, title: "Sanal Asistan", description: "AI destekli otomatik yanıt sistemi" },
    { icon: Zap, title: "API Entegrasyonları", description: "Mevcut sistemlerinizle sorunsuz entegrasyon" },
    { icon: Users, title: "Özel Eğitim & Destek", description: "Türkçe onboarding ve 7/24 destek" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-white">İşinize Özel Dijital Çözümler</h1>
            <p className="text-xl text-white/90">
              Küçük işletmelerden büyük kuruluşlara, her ölçekte işletme için uygun platformlar
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-24">
            <div className="order-2 md:order-1">
              <img
                src={dashboardImage}
                alt="Jirlie Platform"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                Tek Platform, Sınırsız Olasılık
              </div>
              <h2>Jirlie ile İş Yönetimi</h2>
              <p className="text-lg text-muted-foreground">
                Jirlie, satıştan muhasebeye, İK'dan envantera kadar tüm iş süreçlerinizi tek bir 
                platformda birleştirir. Cloud ve Enterprise seçenekleriyle her büyüklükteki işletme 
                için uygun çözümler sunuyoruz.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Dakikalar içinde kurulum ve kullanıma hazır</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">29+ veri merkeziyle dünya çapında erişim</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">%99.9 uptime garantisi ile kesintisiz hizmet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Jirlie Cloud */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-4">
                <Cloud className="h-6 w-6 text-primary" />
                <h2 className="text-3xl">Jirlie Cloud</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                KOBİ'ler için mükemmel - hızlı, esnek, bulut tabanlı iş yönetim platformu
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cloudFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="shadow-card hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Jirlie Cloud ile Başlayın</h3>
                    <p className="text-muted-foreground">
                      Küçük ve orta ölçekli işletmeler için ideal başlangıç paketi. 
                      Esnek aylık ödeme seçenekleri ve kolay ölçeklendirme.
                    </p>
                  </div>
                  <Button size="lg" className="gradient-primary whitespace-nowrap" asChild>
                    <Link to="/contact">Demo Talep Et</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Jirlie Enterprise */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full mb-4">
                <Building2 className="h-6 w-6 text-accent" />
                <h2 className="text-3xl">Jirlie Enterprise</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Büyük kuruluşlar için özelleştirilmiş, ölçeklenebilir dijital çözümler
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {enterpriseFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="shadow-card hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-accent/20 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Enterprise Çözüm Görüşmesi</h3>
                    <p className="text-muted-foreground">
                      Büyük ölçekli işletmeniz için özel çözümler. İhtiyaçlarınıza göre 
                      özelleştirilebilir modüller ve öncelikli destek.
                    </p>
                  </div>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white whitespace-nowrap" asChild>
                    <Link to="/contact">Görüşme Planlayın</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2>Hangi Çözüm Sizin İçin Uygun?</h2>
            <p className="text-lg text-muted-foreground">
              İşletmenizin büyüklüğü ve ihtiyaçları hakkında konuşalım, size en uygun çözümü birlikte belirleyelim
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary">
                <Link to="/contact">Ücretsiz Danışmanlık</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/why-neu-ocean">Neden Neu Ocean?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
