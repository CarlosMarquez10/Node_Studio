import { Router } from "express";
import {inicio} from "../controllers/inicio.controller"
const router = Router();

router.get('/', inicio);

export default router;