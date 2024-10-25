"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { Bot, ChefHat, Stethoscope, Briefcase, Github, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll be in touch soon!",
    });
    setEmail("");
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Future Geeks: Your Industry-Specific AI Assistant
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Unlock the power of AI with virtual assistants tailored to your industry's unique needs
          </p>
          <form onSubmit={handleWaitlist} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
            />
            <Button type="submit" size="lg">
              Get Early Access
            </Button>
          </form>
        </motion.div>
      </section>

      {/* AI Assistants Preview */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <Avatar className="h-16 w-16 mb-6">
                <ChefHat className="h-8 w-8" />
              </Avatar>
              <h3 className="text-xl font-semibold mb-4">Hospitality Expert</h3>
              <p className="text-muted-foreground">Streamline guest services, manage bookings, and optimize operations with AI-powered insights.</p>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <Avatar className="h-16 w-16 mb-6">
                <Stethoscope className="h-8 w-8" />
              </Avatar>
              <h3 className="text-xl font-semibold mb-4">Healthcare Assistant</h3>
              <p className="text-muted-foreground">Enhance patient care, manage schedules, and streamline administrative tasks efficiently.</p>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <Avatar className="h-16 w-16 mb-6">
                <Briefcase className="h-8 w-8" />
              </Avatar>
              <h3 className="text-xl font-semibold mb-4">Business Analyst</h3>
              <p className="text-muted-foreground">Make data-driven decisions, analyze market trends, and optimize business strategies.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Future Geeks?</h2>
            <p className="text-muted-foreground">Experience the next generation of AI assistance, tailored specifically for your industry.</p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <Bot className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Industry-Specific Expertise</h3>
              <p className="text-muted-foreground">Our AI assistants are trained on industry-specific data, ensuring relevant and accurate support for your business needs.</p>
            </div>
            <div>
              <Bot className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Customizable Solutions</h3>
              <p className="text-muted-foreground">Adapt your AI assistant to your unique workflows and requirements with our flexible customization options.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="bg-primary text-primary-foreground py-24">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Be Among the First to Experience Future Geeks</h2>
          <p className="text-xl mb-8 opacity-90">Join our waitlist today and revolutionize your industry with AI</p>
          <form onSubmit={handleWaitlist} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-primary-foreground text-primary"
            />
            <Button type="submit" size="lg" variant="secondary">
              Join Waitlist
            </Button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Future Geeks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}