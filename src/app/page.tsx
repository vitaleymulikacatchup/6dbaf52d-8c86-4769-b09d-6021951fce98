"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Crown, HelpCircle, MapPin, MenuSquare, MessageSquare, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Coffee, Perfectly Crafted"
          description="Experience the finest coffee beans sourced from around the world, expertly roasted and brewed to perfection. Join us for an unforgettable coffee journey."
          tag="Fresh Roasted Daily"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Order Now",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "pricing"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior with warm lighting"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Brew & Bean"
          description={[
            "Founded in 2018, we're passionate about bringing you the world's finest coffee experiences. From farm to cup, we ensure quality at every step.",
            "Our expert baristas craft each drink with precision and care, using only premium beans sourced directly from sustainable farms around the globe."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Coffee"
          description="Discover our signature coffee blends and specialty drinks"
          tag="Popular Choices"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Premium Espresso",
              price: "$4.50",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rich espresso shot with crema"
            },
            {
              id: "2",
              name: "Artisan Cappuccino",
              price: "$5.25",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cappuccino with beautiful latte art"
            },
            {
              id: "3",
              name: "French Press Blend",
              price: "$6.00",
              imageSrc: "https://images.pexels.com/photos/2165933/pexels-photo-2165933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "French press coffee brewing setup"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Coffee Menu"
          description="Choose from our selection of premium coffee drinks and pastries"
          tag="Menu"
          tagIcon={MenuSquare}
          plans={[
            {
              id: "1",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$12.99",
              subtitle: "Perfect for coffee lovers",
              features: [
                "2 Premium coffee drinks",
                "Fresh pastry selection",
                "Free Wi-Fi access",
                "Loyalty points included"
              ]
            },
            {
              id: "2",
              badge: "Premium Experience",
              badgeIcon: Crown,
              price: "$18.99",
              subtitle: "For the ultimate coffee experience",
              features: [
                "3 Specialty coffee drinks",
                "Gourmet pastry selection",
                "Priority seating",
                "Free coffee refills",
                "Double loyalty points"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Coffee Impact"
          description="Numbers that showcase our commitment to quality coffee"
          tag="Since 2018"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              description: "Happy Coffee Customers"
            },
            {
              id: "2",
              value: "15",
              description: "Coffee Origin Countries"
            },
            {
              id: "3",
              value: "98%",
              description: "Customer Satisfaction"
            },
            {
              id: "4",
              value: "100%",
              description: "Ethically Sourced Beans"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Baristas"
          description="The talented people who craft your perfect cup of coffee"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Head Barista",
              imageSrc: "https://images.pexels.com/photos/712436/pexels-photo-712436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Rodriguez"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Coffee Roaster",
              imageSrc: "https://images.pexels.com/photos/6826026/pexels-photo-6826026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Chen"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who visit Brew & Bean"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/712436/pexels-photo-712436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Freelance Designer",
              company: "Creative Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6826026/pexels-photo-6826026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Business Owner",
              company: "Local Bookstore",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4473507/pexels-photo-4473507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Software Engineer",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4063590/pexels-photo-4063590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our coffee shop"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday to Friday from 6:30 AM to 7:00 PM, and weekends from 7:00 AM to 8:00 PM. We're closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer dairy-free alternatives?",
              content: "Yes! We have oat milk, almond milk, soy milk, and coconut milk available for all our coffee drinks at no extra charge."
            },
            {
              id: "3",
              title: "Can I order coffee beans to take home?",
              content: "Absolutely! We sell our premium coffee beans by the pound. You can choose from our signature blends or single-origin options."
            },
            {
              id: "4",
              title: "Do you have a loyalty program?",
              content: "Yes, we offer a loyalty card program. Buy 10 drinks and get the 11th free! Ask our baristas about signing up."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Come Experience Great Coffee"
          description="Visit our cozy coffee shop or stay updated with our latest blends and special offers. We'd love to serve you the perfect cup of coffee."
          imageSrc="https://images.pexels.com/photos/3907315/pexels-photo-3907315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee shop counter with barista working"
          inputPlaceholder="Enter your email"
          buttonText="Get Updates"
          termsText="By subscribing, you agree to receive our newsletter with coffee updates and special offers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Coffee Drinks",
                  href: "pricing"
                },
                {
                  label: "Pastries",
                  href: "product"
                },
                {
                  label: "Special Offers",
                  href: "contact"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Coffee Sources",
                  href: "about"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Visit Us",
                  href: "contact"
                },
                {
                  label: "Order Online",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Brew & Bean Coffee Shop"
        />
      </div>
    </ThemeProvider>
  );
}