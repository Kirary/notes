export const generateId = () => {
    const datePart = new Date().getTime().toString(36);
    const randomPart = Math.random()
        .toString(36)
        .substring(2, 10);

    return `${datePart}-${randomPart}`.toLocaleUpperCase();
};
