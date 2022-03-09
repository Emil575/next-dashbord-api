import { config } from 'dotenv'
import { createApp } from './utils/createApp';
config();
import './database'
const PORT = process.env.PORT || 3001;

async function main() {
    try {
        const app = createApp();
        app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
        console.log(`Running in ${process.env.ENVIRONMENT} mode.`)
    } catch (error) {
        console.log(error)
    }
}
main()