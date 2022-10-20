import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Gear } from "phosphor-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Drop: React.FC = () => {
  const { changeLanguage } = useLanguage();
  return (
    <div className="fixed lg:bottom-12 bottom-4 right-6 -translate-x-1/2 z-40 ">
      <Popover className="relative">
        <Popover.Button className="outline-none">
          <Gear
            className="outline-none"
            size={32}
            weight="fill"
            color="#02cd1a"
          />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="fixed right-[50%] bottom-12 mt-3 w-[200px]">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="bg-gray-700 p-4 pl-4 pr-4 pb-3 flex justify-between  items-center gap-4">
                <a href="#hero" className="text-sm text-gray-300 font-semibold">
                  Voltar ao inicio
                </a>
              </div>
              <div className="bg-gray-700 p-4 pl-4 pr-4 flex justify-between items-center gap-4">
                <p
                  role="button"
                  onClick={changeLanguage}
                  className="text-sm text-gray-300 font-semibold"
                >
                  Mudar idioma para Inglês
                </p>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
