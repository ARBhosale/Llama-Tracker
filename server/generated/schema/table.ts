import "@servicenow/sdk-core/global";
import { Table } from "@servicenow/sdk-core/db";
import { x_snc_llamatracker_cleaning_log, x_snc_llamatracker_feed_log, x_snc_llamatracker_growth_log, x_snc_llamatracker_llama, x_snc_llamatracker_shearing_log } from "../../app/schema/llama.now";

declare global {
    namespace Now {
        namespace Internal {
            namespace TableSchemas {
                interface x_snc_llamatracker_cleaning_log extends Helper<typeof x_snc_llamatracker_cleaning_log> {}
                interface x_snc_llamatracker_feed_log extends Helper<typeof x_snc_llamatracker_feed_log> {}
                interface x_snc_llamatracker_growth_log extends Helper<typeof x_snc_llamatracker_growth_log> {}
                interface x_snc_llamatracker_llama extends Helper<typeof x_snc_llamatracker_llama> {}
                interface x_snc_llamatracker_shearing_log extends Helper<typeof x_snc_llamatracker_shearing_log> {}
            }
            interface Tables {
                x_snc_llamatracker_cleaning_log: Table<TableSchemas.x_snc_llamatracker_cleaning_log>;
                x_snc_llamatracker_feed_log: Table<TableSchemas.x_snc_llamatracker_feed_log>;
                x_snc_llamatracker_growth_log: Table<TableSchemas.x_snc_llamatracker_growth_log>;
                x_snc_llamatracker_llama: Table<TableSchemas.x_snc_llamatracker_llama>;
                x_snc_llamatracker_shearing_log: Table<TableSchemas.x_snc_llamatracker_shearing_log>;
            }
        }
    }
}
