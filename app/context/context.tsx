import { createContext } from 'react';

export interface ContextValueInterface<T> {
    value: T;
    setValue: (value: T) => void;
}

type context<T> = ContextValueInterface<T> | null;

export const LangContext = createContext<context<string>>(null);
