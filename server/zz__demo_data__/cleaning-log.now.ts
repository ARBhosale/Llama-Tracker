import { Record } from "@servicenow/sdk-core/db";
import { x_snc_llamatracker_cleaning_log } from "../app/schema/llama.now";
import { lara, lenny, leroy, lily, lionel } from "./llamas.now";

Record({
    table: x_snc_llamatracker_cleaning_log,
    id: 1,
    data: {
        sys_id: "01b484c9ff733110771bffffffffff1e",
        blow_dried: false,
        brushed: false,
        llama: leroy,
        washed: true,
        sys_created_on: "2024-01-15 21:06:35"
    }
});

Record({
    table: x_snc_llamatracker_cleaning_log,
    id: 2,
    data: {
        sys_id: "cba444c9ff733110771bffffffffffa2",
        blow_dried: false,
        brushed: true,
        llama: lionel,
        washed: false,
        sys_created_on: "2024-01-15 21:06:26"
    }
});

Record({
    table: x_snc_llamatracker_cleaning_log,
    id: 3,
    data: {
        sys_id: "97b4c4c9ff733110771bfffffffffffe",
        blow_dried: true,
        brushed: true,
        llama: lily,
        washed: true,
        sys_created_on: "2024-01-15 21:06:44"
    }
});

Record({
    table: x_snc_llamatracker_cleaning_log,
    id: 4,
    data: {
        sys_id: "20a484c9ff733110771bffffffffff4e",
        blow_dried: true,
        brushed: true,
        llama: lara,
        washed: true,
        sys_created_on: "2024-01-15 21:06:44"
    }
});

Record({
    table: x_snc_llamatracker_cleaning_log,
    id: 5,
    data: {
        sys_id: "91c408c9ff733110771bffffffffff06",
        blow_dried: false,
        brushed: true,
        llama: lenny,
        washed: true,
        sys_created_on: "2024-01-15 21:06:53"
    }
});