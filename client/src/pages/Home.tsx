import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle2, Clock, TrendingUp, Users } from "lucide-react";
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

      {/* Hero Section avec bannière */}
      <section id="accueil" className="relative bg-gradient-to-br from-accent/20 to-background py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Assistante Administrative Indépendante à Arbonne - Biarritz
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Services administratifs externalisés pour TPE, PME et artisans du Pays Basque. Gagnez du temps, je m'occupe de votre gestion administrative et financière.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="#contact">Devis gratuit</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://calendly.com/nr-solutionsadmin" target="_blank" rel="noopener noreferrer">Rendez-vous découverte</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/banner.png" 
                alt="Roxane - Assistante administrative et financière indépendante à Biarritz, Pays Basque" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Services Administratifs Externalisés
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Gestion administrative externalisée, télésecrétariat professionnel et soutien administratif à distance pour TPE, PME et artisans du Pays Basque
            </p>
            <div className="max-w-2xl mx-auto mb-12">
              <img 
                src="/workspace.jpg" 
                alt="Gestion administrative et financière pour TPE et artisans - NR Solutions Admin" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Gestion Administrative</h3>
                <p className="text-muted-foreground">
                  Gestion de la messagerie professionnelle, organisation d'agenda et rendez-vous, traitement du courrier, saisie de données, classement et archivage de documents, rédaction administrative.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Gestion Financière</h3>
                <p className="text-muted-foreground">
                  Création de devis et factures, suivi des paiements, relance des impayés, préparation comptable, gestion de la facturation et tableaux de bord financiers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Gestion RH</h3>
                <p className="text-muted-foreground">
                  Suivi des contrats, gestion des congés et absences, préparation des éléments de paie et relation avec les organismes sociaux.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Organisation & Structuration</h3>
                <p className="text-muted-foreground">
                  Mise en place de processus, optimisation des outils de gestion, création de tableaux de bord et amélioration de l'efficacité.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Communication</h3>
                <p className="text-muted-foreground">
                  Gestion de la communication interne et externe, rédaction de documents professionnels et coordination des échanges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Accompagnement Projet</h3>
                <p className="text-muted-foreground">
                  Suivi de projets spécifiques, coordination avec les prestataires et accompagnement dans le développement de votre activité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formules Section */}
      <section id="formules" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Mes Formules d'Accompagnement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions flexibles adaptées à vos besoins. Tarifs sur devis, forfaits possibles selon le nombre d'heures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-accent hover:shadow-2xl transition-all scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Accompagnement Quotidien</h3>
                  <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full">Populaire</span>
                </div>
                <p className="text-foreground/80 mb-6">
                  Un soutien régulier pour gérer vos tâches administratives et financières au quotidien. Idéal pour libérer du temps et vous concentrer sur votre cœur de métier.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Suivi régulier et personnalisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Gestion continue de vos dossiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Disponibilité et réactivité</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                    <a href="#contact">Demander un devis</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Accompagnement Ponctuel</h3>
                </div>
                <p className="text-foreground/80 mb-6">
                  Une intervention ciblée pour répondre à un besoin spécifique : rattrapage administratif, projet particulier, ou remplacement temporaire.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Intervention rapide et efficace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Flexibilité selon vos besoins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sans engagement long terme</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="w-full" variant="outline" asChild>
                    <a href="#contact">Demander un devis</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Mission 90 Jours</h3>
                </div>
                <p className="text-foreground/80 mb-6">
                  Préparation complète de votre bilan sur 90 jours. Un accompagnement structuré pour une gestion financière optimale et une clôture sereine.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Préparation bilan comptable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Suivi sur 3 mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Optimisation financière</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="w-full" variant="outline" asChild>
                    <a href="#contact">Demander un devis</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              <strong>Tarifs sur devis</strong> - Forfaits possibles selon le nombre d'heures nécessaires
            </p>
            <Button size="lg" asChild>
              <a href="https://calendly.com/nr-solutionsadmin" target="_blank" rel="noopener noreferrer">
                Réserver un rendez-vous découverte gratuit
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="py-20 bg-accent/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/profile.jpg" 
                alt="Roxane - Assistante administrative et financière indépendante, spécialisée en comptabilité TPE" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                À propos
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  Je suis Roxane, assistante administrative et financière indépendante. Je mets mon expertise au service des dirigeants de TPE et artisans qui souhaitent se concentrer sur leur cœur de métier.
                </p>
                <p>
                  Forte d'une expérience solide en comptabilité acquise dans le secteur automobile et moto, j'ai ensuite enrichi mon parcours par deux années en cabinet comptable. Durant cette période, j'ai géré les bilans d'un portefeuille d'une trentaine d'entreprises, tous secteurs confondus. Cette diversité m'a permis de développer une compréhension approfondie des enjeux spécifiques à chaque activité et de maîtriser les outils et processus essentiels à une gestion administrative et financière rigoureuse.
                </p>
                <p>
                  Avec une approche personnalisée et professionnelle, je vous accompagne dans la gestion quotidienne de votre activité. Mon objectif est de vous permettre de reprendre le contrôle de votre temps tout en assurant une gestion efficace et sereine de vos tâches administratives et financières.
                </p>
                <p>
                  Que vous ayez besoin d'un accompagnement ponctuel ou régulier, je m'adapte à vos besoins pour vous offrir un service de qualité, dans la confidentialité et la confiance.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Expérience en comptabilité (secteur auto/moto et cabinet comptable)</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Accompagnement personnalisé et flexible</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Confidentialité et professionnalisme garantis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Contactez-moi
              </h2>
              <p className="text-lg text-muted-foreground">
                Discutons de vos besoins et de la manière dont je peux vous accompagner
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
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
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
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
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez vos besoins..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Email</h3>
                        <a href="mailto:nr.solutionsadm@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">nr.solutionsadm@gmail.com</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Téléphone / WhatsApp</h3>
                        <a href="tel:+33650974076" className="text-muted-foreground hover:text-primary transition-colors block mb-1">06 50 97 40 76</a>
                        <a href="https://wa.me/33650974076" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-primary transition-colors inline-flex items-center gap-1">
                          <span>Contacter sur WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Zone d'intervention</h3>
                        <p className="text-muted-foreground mb-2">Arbonne, Biarritz et 25 km alentours</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Arbonne, Biarritz, Bidart, Anglet, Bayonne, Guéthary, Ahetze, Arcangues, Bassussarry, Ascain, Ciboure, Saint-Jean-de-Luz, Urrugne, Tarnos, Boucau, Côte Basque, Pays Basque et Sud Landes.
                        </p>
                        <p className="text-sm text-accent mt-2 font-medium">Sur site, à distance ou formule mixte selon vos besoins</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent/10 border-accent">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-primary mb-3">Disponibilité</h3>
                    <p className="text-foreground/80 mb-4">
                      Je suis disponible pour échanger sur vos besoins et vous proposer un accompagnement adapté à votre activité.
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <a href="https://calendly.com/nr-solutionsadmin" target="_blank" rel="noopener noreferrer">
                        Réserver un créneau
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-3">NR Solutions Admin</h3>
              <p className="text-primary-foreground/80 mb-4">
                Votre bras droit administratif et financier pour développer votre activité en toute sérénité.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/roxane-nos/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/nrsolutionsadmin/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <div className="flex flex-col gap-2">
                <a href="#accueil" className="text-primary-foreground/80 hover:text-accent transition-colors">Accueil</a>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</a>
                <a href="#formules" className="text-primary-foreground/80 hover:text-accent transition-colors">Formules</a>
                <a href="#apropos" className="text-primary-foreground/80 hover:text-accent transition-colors">À propos</a>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="flex flex-col gap-2 text-primary-foreground/80">
                <a href="mailto:nr.solutionsadm@gmail.com" className="hover:text-accent transition-colors">nr.solutionsadm@gmail.com</a>
                <a href="tel:+33650974076" className="hover:text-accent transition-colors">06 50 97 40 76</a>
                <a href="https://wa.me/33650974076" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a>
                <p>Arbonne 64210</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground/60">
            <div className="mb-4 text-sm">
              <p className="mb-1"><strong>Zones d'intervention :</strong></p>
              <p className="text-xs leading-relaxed max-w-4xl mx-auto">
                Arbonne, Biarritz, Bidart, Anglet, Bayonne, Guéthary, Ahetze, Arcangues, Bassussarry, Ascain, Ciboure, Saint-Jean-de-Luz, Urrugne, Tarnos, Boucau, Côte Basque, Pays Basque et Sud Landes
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p>&copy; {new Date().getFullYear()} NR Solutions Admin. Tous droits réservés.</p>
              <span className="hidden md:inline">•</span>
              <a href="/cgvps.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Conditions Générales
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

