"use client";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";



export default function Contact() {
  return (
    <section
      className="overflow-x-clip py-32 text-white grid max-w-[1200px] mx-auto px-4"
      id="contact">
      <motion.div
        className="grid lg:grid-cols-2 gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <div className="space-y-12">
          <motion.h2
            className="text-7xl font-bold text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Get in <span className="text-purple-500 ">touch</span>
          </motion.h2>
          <motion.div
            className="glass p-6 space-x-8 rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="space-y-2">
              <p className="text-lg hover:text-purple-500">Phone</p>
              <a
                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                href="tel:+79263925070">
                +7 (926) 392 50 70
                <span>
                  <HiArrowUpRight className="w-5 h-5 text-gray-300" />
                </span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg ext-gray-300">Email</p>
              <a
                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                href="mailto:dreamer-1978@mail.ru">
                dreamer-1978@mail.ru
                <span>
                  <HiArrowUpRight className="w-5 h-5 text-gray-300" />
                </span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg ext-gray-300">Office</p>
              <address className="text-xl not-italic leading-relaxed">
                Russian, <br />
                Moscow <br />
                Izmailovo
                <span>
                  <HiArrowUpRight className="w-5 h-5 text-gray-300" />
                </span>
              </address>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35911.26517560006!2d37.74491236877954!3d55.76798519603918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acae16d170de9%3A0xe4edc5063677cd69!2z0YAt0L0g0JjQstCw0L3QvtCy0YHQutC-0LUsINCc0L7RgdC60LLQsA!5e0!3m2!1sru!2sru!4v1747485283877!5m2!1sru!2sru"
            allowFullScreen
            style={{ border: 0 }}
            loading="lazy"
            width="100%"
            height="100%"></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}
