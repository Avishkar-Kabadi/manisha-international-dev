import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Manisha International Solution</h3>
            <p className="text-primary-foreground/80 mb-2 font-semibold">
              Founded by Mr. Chaitanya Rajendra Papade
            </p>
            <p className="text-primary-foreground/70">
              Global trade specialist in Agro and Engineering commodities
            </p>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm font-semibold text-secondary mb-2">GST Registration:</p>
              <p className="text-primary-foreground/80 font-mono">27DHRPP673C1ZQ</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-primary-foreground/80 hover:text-secondary transition-colors">Products</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Phone</p>
                  <a href="tel:+919175431969" className="text-primary-foreground font-semibold hover:text-secondary transition-colors">
                    +91 9175431969
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Email</p>
                  <a href="mailto:connect.mis99@gmail.com" className="text-primary-foreground font-semibold hover:text-secondary transition-colors break-all">
                    connect.mis99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Address</p>
                  <p className="text-primary-foreground font-semibold">
                    Padali Post Manikdoh<br />
                    Tal-Junnar, Pune<br />
                    Maharashtra 410502
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Manisha International Solution. All rights reserved.
            </p>
            <p className="text-secondary font-semibold text-sm">
              Trust is our true currency
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
