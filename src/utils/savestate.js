export const loadstate = (key) => {
    try {
        const storeGet = localStorage.getItem(key);
        if (!storeGet) return undefined;
        return JSON.parse(storeGet);
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export const saveState = (key, data) => {
    try {
        const storeSet = JSON.stringify(data);
        localStorage.setItem(key, storeSet);
    } catch (error) {
        console.log(error);
    }
};