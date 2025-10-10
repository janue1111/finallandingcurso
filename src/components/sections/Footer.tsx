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
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">



        </div>


      </div>
    </footer>
  );
};