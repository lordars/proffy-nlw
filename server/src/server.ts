import express from "express"
import cors from "cors"
const app = express();
import router from './routes'

app.use(express.json());
app.use(router);
app.use(cors());


app.listen(3333);

