import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mesajınız alındı!",
        description: "En kısa sürede size geri dönüş yapacağım.",
      });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@ramazangulmez.com",
      link: "mailto:info@ramazangulmez.com",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 5XX XXX XX XX",
      link: "tel:+905XXXXXXXX",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Ramazan Gülmez",
      link: "https://linkedin.com",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pzt-Cuma, 09:00-18:00",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-white">İletişime Geçin</h1>
            <p className="text-xl text-white/90">
              Dijital dönüşüm yolculuğunuzda size nasıl yardımcı olabileceğimizi konuşalım
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Mesaj Gönderin</h2>
                    <p className="text-muted-foreground">
                      Formu doldurun, en kısa sürede size geri dönüş yapalım
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Adınız ve soyadınız"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ornek@sirket.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Şirket</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Şirket adı"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mesajınız *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Projeniz veya ihtiyaçlarınız hakkında bize bilgi verin..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Gönderiliyor..."
                      ) : (
                        <>
                          Mesaj Gönder
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">İletişim Bilgileri</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      return (
                        <div key={info.title} className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium mb-1">{info.title}</p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-muted-foreground hover:text-primary transition-colors"
                                target={info.link.startsWith("http") ? "_blank" : undefined}
                                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.content}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Lokasyon</p>
                      <p className="text-muted-foreground">
                        Türkiye
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Neu Ocean Technologies Ltd. resmi Türkiye temsilciliği
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-primary shadow-elegant">
                <CardContent className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-3">Hızlı Başlangıç</h3>
                  <p className="text-white/90 mb-4">
                    Dijital dönüşümünüze bugün başlayın. Ücretsiz demo ve danışmanlık hizmeti.
                  </p>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>✓ Ücretsiz platform demosu</li>
                    <li>✓ İhtiyaç analizi görüşmesi</li>
                    <li>✓ Özelleştirilmiş çözüm önerisi</li>
                    <li>✓ Türkçe teknik destek</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Hızlı İletişim için WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Sorularınız için WhatsApp üzerinden de bana ulaşabilirsiniz
              </p>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                asChild
              >
                <a
                  href="https://wa.me/905XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp ile Mesaj Gönderin
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
