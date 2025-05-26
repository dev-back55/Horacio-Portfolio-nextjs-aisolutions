"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { sendEmailToPaciente } from "@/actions/emailActions";
import Image from "next/image";

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formState.email.trim() ||
      !formState.message.trim() ||
      !formState.name.trim() ||
      !formState.subject.trim()
    ) {
      toast.error("Por favor complete todos los campos");
      return;
    }
    // Here you would normally handle the form submission
    await sendEmailToPaciente(formState);
    console.log(formState);
    toast.success("Gracias por enviar tu mensaje. En breve te contactare.");
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Main content */}
      <main className="sm:ml-[220px] sm:w-[calc(100%-220px)] p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#18230F]"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg mb-12 text-[#27391C]"
          >
            Have a project in mind or want to discuss how we can work together?
            Feel free to reach out through any of the channels below or use the
            contact form.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-lg bg-[#A0D683] shadow-sm"
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1F7D53]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#18230F]">Email</h3>
              <p className="mb-2 text-[#27391C]">For project inquiries:</p>
              <Link
                href="/contact"
                className="text-[#1F7D53] hover:underline font-medium"
              >
                contacto@horacioabitu.com.ar
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-lg bg-[#FEFF9F] shadow-sm"
            >
              <div className="mb-4">
                <Phone size={24} className="text-[#1F7D53]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#18230F]">Phone</h3>
              <p className="mb-2 text-[#27391C]">Mon-Fri, 9am-5pm (GMT+3):</p>
              <Link
                href="https://calendar.app.google/qB7HtErZcYHQXboN7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1F7D53] hover:underline font-medium"
              >
                Schedule Call
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-lg bg-[#A0D683] shadow-sm"
            >
              <div className="mb-4">
                <MapPin size={24} className="text-[#1F7D53]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#18230F]">
                Location
              </h3>
              <p className="mb-2 text-[#27391C]">Based in:</p>
              <p className="text-[#18230F]">
                Rawson, Chubut Patagonia Argentina
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-lg bg-white shadow-sm border border-[#72BF78]/20 mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#18230F]">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-[#27391C]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#D3EE98] border border-[#72BF78]/30 text-[#18230F] focus:border-[#72BF78] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-[#27391C]"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#D3EE98] border border-[#72BF78]/30 text-[#18230F] focus:border-[#72BF78] focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-[#27391C]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#D3EE98] border border-[#72BF78]/30 text-[#18230F] focus:border-[#72BF78] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-[#27391C]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#D3EE98] border border-[#72BF78]/30 text-[#18230F] focus:border-[#72BF78] focus:outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-md font-medium flex items-center bg-[#72BF78] text-white hover:bg-[#72BF78]/90 transition-colors"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold mb-4 text-[#18230F]">
              Connect on Social Media
            </h3>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://x.com/AbituHoracio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#A0D683] hover:bg-[#A0D683]/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#18230F]"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/horacioabitu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#A0D683] hover:bg-[#A0D683]/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#18230F]"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
