import Product from './../models/Produto';
import axios from 'axios';
import User from '../models/Usuario';

export async function autenticar(login: string, password: string): Promise<any> {
    return await axios.post('https://example-ecommerce.herokuapp.com/user/login', { login, password })
    .then(response => response.data)
    .catch(error => {
        console.error('Error during authentication:', error);
        null;
    });
}

export async function getProdutos(): Promise<Product[]> {
    return await axios.get('https://example-ecommerce.herokuapp.com/product/list')
    .then(response => response.data)
    .catch(error => {
        console.log(error);
        [];
    });
};

export async function addUsuario(user: User) : Promise<any> {
    return await axios.post('https://example-ecommerce.herokuapp.com/user/customer/add', user)
    .then(response => response.data)
    .catch(error => {
        console.log(error);
        [];
    });
}
