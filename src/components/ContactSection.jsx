import React from "react";
import { MessageSquareMore } from "lucide-react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "824509d6-2c4e-42c7-9c30-67b7e7a8fdbd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#0B0F19] text-white relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            Have a project in mind or want to collaborate? Feel free to reach out. I’m always open to discussing new opportunities.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-primary" />
              <span>aryanupadhyay771@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary" />
              <span>+91 9336030279</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-primary" />
              <span>Dombivli - 421201</span>
            </div>
          </div>

          <div className="pt-6">
            <p className="mb-2 text-gray-400">Connect With Me</p>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.linkedin.com/in/aryan30/"
                className="hover:text-primary"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a href="" className="hover:text-primary">
                <MessageSquareMore />
              </a>
              <a
                href="https://www.instagram.com/u_r_aryan_/"
                className="hover:text-primary"
                target="_blank"
              >
                <Instagram />
              </a>
              <a
                href="https://github.com/2G-Aryan"
                className="hover:text-primary"
                target="_blank"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 space-y-6 shadow-xl border border-white/10">
          <h3 className="text-xl font-semibold">Send a Message</h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-md bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2 rounded-md bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Your Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Type your message here..."
                required
                className="w-full px-4 py-2 rounded-md bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300"
            >
              Send Message <Send size={16} />
            </button>

            {result && (
              <p className="text-sm pt-2 text-gray-300">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
