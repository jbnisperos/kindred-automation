import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import dotenv from 'dotenv';

dotenv.config(); 

export async function login(page: Page) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/');
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
}