import axios from "axios";

const initProducts = [
    {
        id: 1,
        name: 'Monitor Samsung 65',
        price: 500,
        description: 'El monitor es increible'
    },

    {
        id: 2,
        name: 'Iphone 16',
        price: 5000,
        description: 'El Telefono es muy bueno'
    }
]

const baseURL = 'http://localhost:8080/products'


export const listProduct = () => {
    return initProducts;
}

export const findAll = async () => {

    try {
        const response = await axios.get(baseURL);
        return response;

    } catch (error) {
        return console.log(error);

    }
    return null;
}

export const create = async ({name, description, price}) => {

    try {
        const response = await axios.post(baseURL, {
            name,
            description,
            price
        });
        
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;

}

export const update = async ({id, name, description, price}) => {

    try {
        const response = await axios.put(`${baseURL}/${id}`, {
            name,
            description,
            price
        });
        
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;

}

export const remove = async (id) => {
    try {
        await axios.delete(`${baseURL}/${id}`)
    } catch (error) {
    console.log(error);
        
    }
}