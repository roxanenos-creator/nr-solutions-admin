import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle2, Clock, TrendingUp, Users, FileText } from "lucide-react";
import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Je vous recontacterai rapidement.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <SEOHead />
      <StructuredData />
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo-gold.png" alt="NR Solutions Admin - Assistante administrative et financière Biarritz" className="h-12 w-auto" />
              <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">NR Solutions Admin</div>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#accueil" className="hover:text-accent transition-colors">Accueil</a>
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#formules" className="hover:text-accent transition-colors">Formules</a>
              <a href="#apropos" className="hover:text-accent transition-colors">À propos</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section avec photo badge */}
      <section id="accueil" className="relative bg-gradient-to-br from-accent/20 to-background py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Photo badge à gauche au-dessus du titre */}
              <div className="flex justify-start mb-6">
                <img 
                  src="/roxane-badge-bw.jpg" 
                  alt="Roxane - Bras droit administratif et financier à Biarritz, Pays Basque" 
                  className="w-40 h-40 rounded-full object-cover object-top border-[6px] border-accent shadow-2xl"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Bras droit administratif et financier à Arbonne - Biarritz
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Services administratifs externalisés pour TPE, PME et artisans du Pays Basque. Gagnez du temps, je m'occupe de votre gestion administrative et financière.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg" asChild>
                  <a href="#contact">Devis gratuit</a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10" asChild>
                  <a href="https://calendly.com/nr-solutionsadmin" target="_blank" rel="noopener noreferrer">Rendez-vous découverte</a>
                </Button>
              </div>
            </div>
            
            {/* Workspace à droite */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-md">
                <img 
                  src="/workspace.jpg" 
                  alt="Gestion administrative professionnelle" 
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Services Administratifs Externalisés
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              <strong>En solo ou en renfort :</strong> j'interviens de manière autonome ou en complément de votre équipe administrative et comptable existante.
            </p>
          </div>

          {/* Compass Center with Services Around in Circular Layout */}
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop: Container with circular positioning */}
            <div className="hidden md:block relative" style={{ minHeight: '600px' }}>
              {/* Central Compass */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-accent/10 p-4 rounded-2xl border-4 border-accent/40 shadow-2xl">
                  <div className="flex flex-col items-center gap-2">
                    <img 
                      src="/compass.jpg" 
                      alt="Gardez le cap sur votre métier" 
                      className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-accent/30"
                    />
                    <div className="text-center">
                      <p className="text-base font-bold text-primary mb-0.5">Gardez le cap</p>
                      <p className="text-xs text-muted-foreground">Je m'occupe de l'administratif</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Cards positioned in circle - Top (12h) */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2" style={{ width: '220px' }}>
                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-3 pb-3 space-y-1.5">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-primary text-center">Gestion Administrative</h3>
                    <p className="text-xs text-muted-foreground text-center leading-tight">
                      Messagerie, agenda, courrier, saisie, classement, rédaction.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Top Right (2h) */}
              <div className="absolute" style={{ top: '80px', right: '40px', width: '220px' }}>
                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-3 pb-3 space-y-1.5">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-primary text-center">Gestion Financière</h3>
                    <p className="text-xs text-muted-foreground text-center leading-tight">
                      Devis, factures, suivi paiements, préparation comptable.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Right (4h) */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2" style={{ width: '220px' }}>
                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-3 pb-3 space-y-1.5">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-primary text-center">Gestion RH</h3>
                    <p className="text-xs text-muted-foreground text-center leading-tight">
                      Contrats, congés, paie, organismes sociaux.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Right (6h) */}
              <div className="absolute" style={{ bottom: '80px', right: '40px', width: '220px' }}>
                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-3 pb-3 space-y-1.5">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-primary text-center">Organisation</h3>
                    <p className="text-xs text-muted-foreground text-center leading-tight">
                      Processus, outils, tableaux de bord, efficacité.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom (8h) */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" style={{ width: '220px' }}>
                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-3 pb-3 space-y-1.5">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-primary text-center">Accompagnement Projet</h3>
                    <p className="text-xs text-muted-foreground text-center leading-tight">
                      Suivi projets, coordination prestataires.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Left (10h) */}
              <div className="absolute" style={{ bottom: '80px', left: '40px', width: '220px' }}>
                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-3 pb-3 space-y-1.5">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-primary text-center">Communication</h3>
                    <p className="text-xs text-muted-foreground text-center leading-tight">
                      Interne, externe, rédaction, coordination.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mobile: Grid layout */}
            <div className="md:hidden space-y-6">
              {/* Compass at top on mobile */}
              <div className="flex justify-center mb-8">
                <div className="bg-accent/10 p-4 rounded-2xl border-4 border-accent/40 shadow-2xl">
                  <div className="flex flex-col items-center gap-2">
                    <img 
                      src="/compass.jpg" 
                      alt="Gardez le cap sur votre métier" 
                      className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-accent/30"
                    />
                    <div className="text-center">
                      <p className="text-base font-bold text-primary mb-0.5">Gardez le cap</p>
                      <p className="text-xs text-muted-foreground">Je m'occupe de l'administratif</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service cards in grid */}
              <div className="grid grid-cols-1 gap-4">
                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-4 pb-4 space-y-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-primary text-center">Gestion Administrative</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      Messagerie, agenda, courrier, saisie, classement, rédaction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-4 pb-4 space-y-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-primary text-center">Gestion Financière</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      Devis, factures, suivi paiements, préparation comptable.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-4 pb-4 space-y-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-primary text-center">Gestion RH</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      Contrats, congés, paie, organismes sociaux.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-4 pb-4 space-y-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-primary text-center">Organisation</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      Processus, outils, tableaux de bord, efficacité.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-4 pb-4 space-y-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-primary text-center">Accompagnement Projet</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      Suivi projets, coordination prestataires.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-4 pb-4 space-y-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-primary text-center">Communication</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      Interne, externe, rédaction, coordination.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formules Section */}
      <section id="formules" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Mes Formules d'Accompagnement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions flexibles adaptées à vos besoins. Tarifs personnalisés selon le nombre d'heures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Accompagnement Ponctuel */}
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="pt-8 pb-8 space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Accompagnement Ponctuel</h3>
                  <p className="text-sm text-muted-foreground">
                    Une intervention ciblée pour gérer vos pics d'activité
                  </p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Intervention ponctuelle pour répondre à vos besoins temporaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Gestion de pics d'activité saisonniers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Support lors d'absences dans votre équipe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Flexibilité et réactivité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Disponibilité en fonction de vos urgences</span>
                  </li>
                </ul>

                <Button className="w-full" variant="outline" asChild>
                  <a href="#contact">Demander un devis</a>
                </Button>
              </CardContent>
            </Card>

            {/* Accompagnement Quotidien - POPULAIRE */}
            <Card className="border-4 border-accent hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  POPULAIRE
                </span>
              </div>
              <CardContent className="pt-10 pb-8 space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Accompagnement Quotidien</h3>
                  <p className="text-sm text-muted-foreground">
                    Un soutien régulier pour gérer vos tâches administratives au quotidien
                  </p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Présence régulière selon vos besoins (quelques heures par semaine ou par mois)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Gestion continue de vos tâches administratives et financières</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Suivi personnalisé et proactif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Disponibilité et réactivité garanties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Engagement long terme</span>
                  </li>
                </ul>

                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="#contact">Demander un devis</a>
                </Button>
              </CardContent>
            </Card>

            {/* Mission 90 Jours */}
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="pt-8 pb-8 space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Mission 90 Jours</h3>
                  <p className="text-sm text-muted-foreground">
                    Préparation complète de vos dossiers pour transmission à votre expert-comptable
                  </p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Récupération et organisation de toutes les pièces manquantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Classement et archivage méthodique de vos documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Saisie et préparation comptable complète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Transmission d'un dossier propre et complet à votre expert-comptable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Délai garanti de 90 jours</span>
                  </li>
                </ul>

                <Button className="w-full" variant="outline" asChild>
                  <a href="#contact">Demander un devis</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground italic">
              Tous nos tarifs, établis selon le nombre d'heures nécessaires
            </p>
            <Button size="lg" className="mt-6 bg-primary hover:bg-primary/90" asChild>
              <a href="https://calendly.com/nr-solutionsadmin" target="_blank" rel="noopener noreferrer">
                Réserver un rendez-vous découverte
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="py-20 bg-accent/10">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  À propos
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Je suis <strong>Roxane</strong>, assistante administrative et financière indépendante, spécialisée dans l'accompagnement des TPE, PME et artisans du Pays Basque.
                  </p>
                  <p>
                    Forte d'une expérience en comptabilité dans le secteur automobile et motocycle, puis de 2 ans passés en cabinet comptable où j'ai géré une trentaine d'entreprises de tous secteurs, j'ai acquis une expertise approfondie en gestion administrative et financière.
                  </p>
                  <p>
                    Aujourd'hui, je mets mes compétences au service de votre entreprise pour vous libérer des tâches administratives chronophages. Mon objectif : vous permettre de vous concentrer pleinement sur votre cœur de métier pendant que je m'occupe de l'essentiel.
                  </p>
                  <p>
                    Que ce soit en solo ou en renfort de votre équipe existante, j'interviens de manière flexible et personnalisée selon vos besoins.
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="font-semibold">Expérience en comptabilité secteur auto/moto et cabinet comptable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="font-semibold">Accompagnement personnalisé et flexible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="font-semibold">Confidentialité et professionnalisme garantis</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/roxane-original.jpg" 
                    alt="Roxane - Assistante administrative et financière indépendante" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Option B */}
      <section id="contact" className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Contactez-moi
            </h2>
            <p className="text-lg text-muted-foreground">
              Discutons de vos besoins et trouvons ensemble la meilleure solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Coordonnées et Zone d'intervention */}
            <div className="space-y-6">
              {/* Coordonnées */}
              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary mb-4">Mes coordonnées</h3>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Email</p>
                      <a href="mailto:nr.solutionsadm@gmail.com" className="text-primary hover:text-accent transition-colors">
                        nr.solutionsadm@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Téléphone / WhatsApp</p>
                      <a href="tel:+33650974076" className="text-primary hover:text-accent transition-colors">
                        06 50 97 40 76
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Localisation</p>
                      <p className="text-primary">Arbonne 64210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zone d'intervention */}
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Zone d'intervention</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Biarritz et alentours</strong> (rayon de 25 km)
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Anglet, Bayonne, Bidart, Guéthary, Saint-Jean-de-Luz, Ciboure, Hendaye, Urrugne, Ascain, Espelette, Cambo-les-Bains, Hasparren, Ustaritz, Arcangues, Ahetze, Saint-Pée-sur-Nivelle, et plus encore.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Calendly Card mise en avant */}
            <Card className="border-4 border-accent bg-gradient-to-br from-accent/5 to-accent/10 shadow-xl">
              <CardContent className="pt-8 pb-8 space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Réserver un créneau</h3>
                  <p className="text-muted-foreground">
                    Planifiez un rendez-vous découverte gratuit pour discuter de vos besoins
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Échange de 30 minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Sans engagement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Analyse de vos besoins</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Devis personnalisé</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-lg" asChild>
                  <a href="https://calendly.com/nr-solutionsadmin" target="_blank" rel="noopener noreferrer">
                    Prendre rendez-vous
                  </a>
                </Button>

                <p className="text-xs text-center text-muted-foreground italic">
                  Vous préférez m'écrire ? Utilisez le formulaire ci-dessous
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact en pleine largeur */}
          <Card className="border-2 mt-8">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">Ou envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez vos besoins..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NR Solutions Admin</h3>
              <p className="text-sm text-primary-foreground/80">
                Votre bras droit administratif et financier au Pays Basque
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#accueil" className="hover:text-accent transition-colors">Accueil</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#formules" className="hover:text-accent transition-colors">Formules</a></li>
                <li><a href="#apropos" className="hover:text-accent transition-colors">À propos</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="mailto:nr.solutionsadm@gmail.com" className="hover:text-accent transition-colors">
                    nr.solutionsadm@gmail.com
                  </a>
                </li>
                <li>Arbonne 64210</li>
                <li className="pt-3">
                  <strong className="text-primary-foreground">Zone d'intervention :</strong><br />
                  Biarritz, Anglet, Bayonne, Bidart, Guéthary, Saint-Jean-de-Luz, Ciboure, Hendaye, Urrugne, Ascain, Espelette, Cambo-les-Bains, Hasparren, Ustaritz, Arcangues, Ahetze, Saint-Pée-sur-Nivelle
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 NR Solutions Admin. Tous droits réservés.
            </p>
            <div className="flex gap-6 items-center">
              <a 
                href="https://www.linkedin.com/in/roxane-nos/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/nrsolutionsadmin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                Instagram
              </a>
              <a 
                href="/cgvps.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                Conditions Générales
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

