import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import dotenv from 'dotenv';
import logger from "./logger"; 

dotenv.config(); 

export async function login(page: Page) {
    logger.info('Starting login process...');
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/');
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    logger.info('Login successful.');
}