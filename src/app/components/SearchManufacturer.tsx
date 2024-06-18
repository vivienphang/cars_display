'use client';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { SearchManufacturerProps } from '../types';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxButton,
  Transition,
} from '@headlessui/react';
import CarLogo from '../../../public/car-logo.svg';
import { manufacturers } from '../constants';
import clsx from 'clsx';
import { CheckIcon } from '@heroicons/react/20/solid';

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  // Get list of manufacturers and filter
  const regexEx = /s+/g;
  const filteredManufacturers =
    query === ' '
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(regexEx, '')
            .includes(query.toLowerCase().replace(regexEx, ''))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src={CarLogo}
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.map((item) => (
                <ComboboxOption key={item} value={item}>
                  {({ focus, selected }) => (
                    <div
                      className={clsx(
                        'relative search-manufacturer__option',
                        focus ? 'bg-primary-blue text-white' : 'text-gray-900'
                      )}
                    >
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        {selected && <CheckIcon className="size-4" />}
                        {item}
                      </span>
                    </div>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
