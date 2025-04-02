import { Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const Footer = ({ socialLinks }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <nav className="flex space-x-6">
              <a href="/contato" className="hover:text-white transition-colors">
                Contato
              </a>
            </nav>
          </div>

          <div className="flex space-x-4">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            )}
            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>

        <div className="text-center mt-8 text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados. Desenvolvido por Lucas Marujo
        </div>
      </div>
    </footer>
  );
};