import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl">MySkill</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              In association with Sardar Vallabhbhai Patel University. Building global careers through language excellence.
            </p>
          </div>

          {/* Language Courses */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Language Courses</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/german" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  🇩🇪 German Language
                </Link>
              </li>
              <li>
                <Link to="/courses/spanish" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  🇪🇸 Spanish Language
                </Link>
              </li>
              <li>
                <Link to="/courses/japanese" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  🇯🇵 Japanese Language
                </Link>
              </li>
              <li>
                <Link to="/courses/mandarin" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  🇨🇳 Mandarin Language
                </Link>
              </li>
            </ul>
          </div>

          {/* English Programs */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">English Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/ielts" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  IELTS Preparation
                </Link>
              </li>
              <li>
                <Link to="/courses/gre" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  GRE Preparation
                </Link>
              </li>
              <li>
                <Link to="/courses/toefl" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  TOEFL Preparation
                </Link>
              </li>
              <li>
                <Link to="/certification" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail className="w-4 h-4" />
                info@myskill.edu
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                Sardar Vallabhbhai Patel University Campus, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 MySkill. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              In association with Sardar Vallabhbhai Patel University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
