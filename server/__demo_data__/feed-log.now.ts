import { Record } from "@servicenow/sdk-core/db";
import { x_snc_llamatracker_feed_log } from "../app/schema/llama.now";
import { lara, lenny, leroy, lily, lionel } from "./llamas.now";

Record({
    table: x_snc_llamatracker_feed_log,
    id: 1,
    data: {
        sys_id: "a7348c89ff733110771bfffffffffff2",
        food_weight: 25,
        llama: leroy,
        sys_created_on: "2024-01-15 21:04:53"
    }
});

Record({
    table: x_snc_llamatracker_feed_log,
    id: 2,
    data: {
        sys_id: "81348c89ff733110771bffffffffff66",
        food_weight: 20,
        llama: lionel,
        sys_created_on: "2024-01-15 21:04:24"
    }
});

Record({
    table: x_snc_llamatracker_feed_log,
    id: 3,
    data: {
        sys_id: "c3548c89ff733110771bffffffffff71",
        food_weight: 20,
        llama: lily,
        sys_created_on: "2024-01-15 21:05:08"
    }
});

Record({
    table: x_snc_llamatracker_feed_log,
    id: 4,
    data: {
        sys_id: "76e30889ff733110771bffffffffff1f",
        food_weight: 15,
        llama: lara,
        sys_created_on: "2024-01-15 21:03:17"
    }
});

Record({
    table: x_snc_llamatracker_feed_log,
    id: 5,
    data: {
        sys_id: "6f7440c9ff733110771bffffffffff8e",
        food_weight: 17,
        llama: lenny,
        sys_created_on: "2024-01-15 21:05:43"
    }
});