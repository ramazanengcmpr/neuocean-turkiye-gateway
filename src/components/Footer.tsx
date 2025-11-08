import { Link } from "react-router-dom";
import { Mail, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-primary bg-clip-text text-transparent">
              Neu Ocean Türkiye
            </h3>
            <p className="text-sm text-muted-foreground">
              Türkiye Temsilciliği - Dijital İş Dönüşümü Çözümleri
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Hızlı Erişim</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Çözümler
                </Link>
              </li>
              <li>
                <Link to="/why-neu-ocean" className="text-muted-foreground hover:text-primary transition-colors">
                  Neden Neu Ocean
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Çözümlerimiz</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Jirlie Cloud</li>
              <li>Jirlie Enterprise</li>
              <li>İş Yönetim Sistemi</li>
              <li>CRM & ERP</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@ramazangulmez.com" className="hover:text-primary transition-colors">
                  info@ramazangulmez.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+90 5XX XXX XX XX</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Linkedin className="h-4 w-4" />
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ramazan Gülmez - Neu Ocean Technologies Ltd. Türkiye Temsilcisi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
