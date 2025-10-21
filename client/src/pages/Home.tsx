import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle2, Clock, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

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
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo-gold.png" alt="NR Solutions Admin" className="h-12 w-auto" />
              <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">NR Solutions Admin</div>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#accueil" className="hover:text-accent transition-colors">Accueil</a>
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
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
                Bras droit administratif et financier des dirigeants de TPE et artisans
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Je vous aide à reprendre le contrôle de votre temps, structurer votre activité et faire grandir votre business en toute sérénité.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="#contact">Prendre contact</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#services">Découvrir mes services</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/banner.png" 
                alt="Bannière NR Solutions Admin" 
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
              Mes Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Un accompagnement sur mesure pour libérer votre temps et optimiser votre gestion administrative et financière
            </p>
            <div className="max-w-3xl mx-auto mb-12">
              <img 
                src="/workspace.jpg" 
                alt="Espace de travail professionnel" 
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
                  Traitement du courrier, gestion des emails, organisation de l'agenda, préparation de documents et suivi administratif quotidien.
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
                  Suivi de trésorerie, facturation clients, gestion des fournisseurs, rapprochements bancaires et tableaux de bord financiers.
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

      {/* À propos Section */}
      <section id="apropos" className="py-20 bg-accent/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/profile.jpg" 
                alt="Photo professionnelle" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                À propos
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  Assistante administrative et financière indépendante, je mets mon expertise au service des dirigeants de TPE et artisans qui souhaitent se concentrer sur leur cœur de métier.
                </p>
                <p>
                  Avec une approche personnalisée et professionnelle, je vous accompagne dans la gestion quotidienne de votre activité. Mon objectif est de vous permettre de reprendre le contrôle de votre temps tout en assurant une gestion rigoureuse et efficace de vos tâches administratives et financières.
                </p>
                <p>
                  Que vous ayez besoin d'un accompagnement ponctuel ou régulier, je m'adapte à vos besoins pour vous offrir un service de qualité, dans la confidentialité et la confiance.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Expérience en gestion administrative et financière</span>
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
                        <p className="text-muted-foreground">Biarritz et 25 km alentours (Pays Basque et Sud Landes)</p>
                        <p className="text-sm text-muted-foreground mt-1">Sur site, à distance ou formule mixte selon vos besoins</p>
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
              <p className="text-primary-foreground/80">
                Votre bras droit administratif et financier pour développer votre activité en toute sérénité.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <div className="flex flex-col gap-2">
                <a href="#accueil" className="text-primary-foreground/80 hover:text-accent transition-colors">Accueil</a>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</a>
                <a href="#apropos" className="text-primary-foreground/80 hover:text-accent transition-colors">À propos</a>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="flex flex-col gap-2 text-primary-foreground/80">
                <a href="mailto:nr.solutionsadm@gmail.com" className="hover:text-accent transition-colors">nr.solutionsadm@gmail.com</a>
                <a href="tel:+33650974076" className="hover:text-accent transition-colors">06 50 97 40 76</a>
                <a href="https://wa.me/33650974076" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp : 06 50 97 40 76</a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground/60">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-2">
              <p>&copy; {new Date().getFullYear()} NR Solutions Admin. Tous droits réservés.</p>
              <span className="hidden md:inline">•</span>
              <a href="/cgvps.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Conditions Générales de Vente et de Prestation de Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

