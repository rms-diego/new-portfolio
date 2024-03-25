import { ChangeEvent } from 'react';

type Props = {
  label: string;
  inputType: 'text' | 'email';
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ label, inputType, value, handleChange }: Props) {
  return (
    <label className="flex flex-col w-[70%]">
      {label}
      <input
        type={inputType}
        className="p-2 border border-black rounded-sm"
        value={value}
        onChange={handleChange}
        required
      />
    </label>
  );
}
