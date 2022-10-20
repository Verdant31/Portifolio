import { motion } from "framer-motion";
import React, { useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useWindowSize } from "../hooks/useWindowSize";
import { useLanguage } from "../contexts/LanguageContext";
import axios from "axios";
import { toast } from "react-toastify";

export const ContactMe: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const { currentLanguage } = useLanguage();
  const { width } = useWindowSize();

  const handleSubmitContactForm = async (e: any) => {
    e.preventDefault();
    if (!messageRef.current?.value) return;
    await axios
      .get(`localhost:3000/api/sendemail`, {
        params: {
          message: messageRef.current?.value,
          name: nameRef.current?.value,
          subject: subjectRef.current?.value,
        },
      })
      .then(() => {
        toast.success(
          currentLanguage === "pt"
            ? "Sua mensagem foi enviada!"
            : "Your message was sent!"
        );
        if (nameRef.current && subjectRef.current && messageRef.current) {
          nameRef.current.value = "";
          subjectRef.current.value = "";
          messageRef.current.value = "";
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <motion.div
      className="pt-12 h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="tracking-[12px] absolute top-20 xsm:top-24 uppercase trackng-[20px] text-gray-500 text-2xl">
        {currentLanguage === "pt" ? "CONTATO" : "CONTACT"}
      </h3>
      <div className="flex flex-col xsm:space-y-10 space-y-6">
        <h4 className="text-xl md:text-4xl font-semibold text-center px-4">
          {currentLanguage === "pt"
            ? "Posso te ajudar com o desenvolvimento de sites. "
            : "I can help you with sites development. "}
          <span className="decoration-green-500/50 underline">
            {currentLanguage === "pt" ? "Bora conversar?" : "Let's talk?"}
          </span>
        </h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-green-500 h-7 w-7 animate-pulse" />
            <p>+55 (67) 99973-6552</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-green-500 h-7 w-7 animate-pulse" />
            <p>verdantxd@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-green-500 h-7 w-7 animate-pulse" />
            <p>Curitiba - PR</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmitContactForm}
          className="flex flex-col space-y-2 sm:w-fit md:w-[80%] lg:w-[80%] mx-auto px-4 sm:px-0"
        >
          <div
            className={
              width > 580
                ? "flex space-x-2"
                : "flex flex-col space-y-2 w-[100%]"
            }
          >
            <input
              ref={nameRef}
              type="text"
              placeholder={currentLanguage === "pt" ? "Nome" : "Name"}
              className="contactInput"
            ></input>
            <input
              ref={subjectRef}
              type="text"
              placeholder={currentLanguage === "pt" ? "Assunto" : "Subject"}
              className="contactInput"
            />
          </div>

          <textarea
            ref={messageRef}
            className="contactInput"
            placeholder={currentLanguage === "pt" ? "Mensagem" : "Message"}
          />
          <button
            type="submit"
            className="bg-green-500 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            {currentLanguage === "pt" ? "Enviar" : "Submit"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};
