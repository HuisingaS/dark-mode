import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('value');

    return [value, setValue];
};