import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    try {
        // Пытаемся распарсить значение из JSON
        const initial = JSON.parse(saved);
        // Если успешно распарсили, возвращаем его
        return initial || defaultValue;
    } catch (error) {
        // Если не удалось распарсить, возвращаем значение по умолчанию
        return defaultValue;
    }
}

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
