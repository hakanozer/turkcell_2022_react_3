import { OrderType } from "../types/OrderType";
import { Order } from "../../models/IOrders";

export interface OrderAction {
    type: OrderType,
    payload: Order[]
}