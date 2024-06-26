import express from "express";
import foodController from "../controllers/foodController.js"
import functionController from "../controllers/functionController.js";

const ROUTES = express.Router();

ROUTES.post("/food", foodController.createFood);
ROUTES.get("/food", foodController.getFoods);
ROUTES.put("/food/:id", foodController.editFood);
ROUTES.delete("/food/:id", foodController.deleteFood);
ROUTES.get("/food/:id", foodController.getFoodById); 

ROUTES.get("/calculateKg", functionController.sumByKg);
ROUTES.get("/calculatePrice", functionController.sumByPrice);

ROUTES.get("/weight", functionController.spentPerMonth);

export default ROUTES;
