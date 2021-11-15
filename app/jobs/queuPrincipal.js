export const GenerateData = () => {
    try {
        const dataBase = new Date();
        const dataForm = new Date(dataBase.valueOf() - dataBase.getTimezoneOffset() * 60000);
        const data = dataForm.toISOString().replace(/\.\d{3}Z$/, '');

        return data;
    } catch (err) { if (err) throw err }
}