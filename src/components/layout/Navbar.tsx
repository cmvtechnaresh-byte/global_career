import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const languageCourses = [
  { name: "German", path: "/courses/german", flag: "🇩🇪" },
  { name: "Spanish", path: "/courses/spanish", flag: "🇪🇸" },
  { name: "Japanese", path: "/courses/japanese", flag: "🇯🇵" },
  { name: "Mandarin", path: "/courses/mandarin", flag: "🇨🇳" },
];

const englishCourses = [
  { name: "IELTS", path: "/courses/ielts" },
  { name: "GRE", path: "/courses/gre" },
  { name: "TOEFL", path: "/courses/toefl" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">MySkill</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Home
            </Link>
            
            {/* Language Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowLanguages(true)}
              onMouseLeave={() => setShowLanguages(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Languages <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {showLanguages && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl shadow-large border border-border overflow-hidden"
                  >
                    {languageCourses.map((course) => (
                      <Link
                        key={course.path}
                        to={course.path}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
                      >
                        <span className="text-lg">{course.flag}</span>
                        <span className="text-sm font-medium">{course.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* English Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowEnglish(true)}
              onMouseLeave={() => setShowEnglish(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                English Exams <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {showEnglish && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-40 bg-card rounded-xl shadow-large border border-border overflow-hidden"
                  >
                    {englishCourses.map((course) => (
                      <Link
                        key={course.path}
                        to={course.path}
                        className="block px-4 py-3 hover:bg-muted transition-colors text-sm font-medium"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/certification" 
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/certification' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Certification
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="gold" size="sm">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                >
                  Home
                </Link>
                <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">Languages</div>
                {languageCourses.map((course) => (
                  <Link
                    key={course.path}
                    to={course.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-6 py-2 hover:bg-muted transition-colors"
                  >
                    <span>{course.flag}</span>
                    <span>{course.name}</span>
                  </Link>
                ))}
                <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">English Exams</div>
                {englishCourses.map((course) => (
                  <Link
                    key={course.path}
                    to={course.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-2 hover:bg-muted transition-colors"
                  >
                    {course.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Button variant="gold" className="w-full">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
