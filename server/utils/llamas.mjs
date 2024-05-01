import {GlideRecord} from '@servicenow/glide';
import snakeCase from 'lodash.snakecase';
import {
    getElapsedDays
} from './misc.mjs';

export const getLastFed = llama => {
    const grfl = new GlideRecord('x_snc_llamatracker_feed_log');
    grfl.addQuery('llama', llama);
    grfl.query();
    if (!grfl.next()) {
        return 'Never';
    }

    return getElapsedDays(grfl.getDisplayValue('sys_created_on'));
};

export const getLastSheared = llama => {
    const grfl = new GlideRecord('x_snc_llamatracker_shearing_log');
    grfl.addQuery('llama', llama);
    grfl.query();
    if (!grfl.next()) {
        return 'Never';
    }

    return getElapsedDays(grfl.getDisplayValue('sys_created_on'));
};

export const getLastCleaned = llama => {
    const grfl = new GlideRecord('x_snc_llamatracker_cleaning_log');
    grfl.addQuery('llama', llama);
    grfl.query();
    if (!grfl.next()) {
        return 'Never';
    }

    return getElapsedDays(grfl.getDisplayValue('sys_created_on'));
};

export const getGrowthLog = llama => {
    const grgl = new GlideRecord('x_snc_llamatracker_growth_log');
    grgl.addQuery('llama', llama);
    grgl.orderBy('sys_created_on');
    grgl.query();
    const log = [];
    while (grgl.next()) {
        log.push({
            weight: grgl.getValue('current_weight'),
            furLength: grgl.getValue('current_fur_length'),
            date: grgl.getDisplayValue('sys_created_on')
        });
    }
    return log;
}

export const createLlamaEntry = llamaRecord => {
    return {
        name: llamaRecord.getValue('name'),
        weight: llamaRecord.getDisplayValue('weight'),
        fur_length: llamaRecord.getValue('fur_length'),
        fur_color: llamaRecord.getValue('fur_color'),
        cleanliness: llamaRecord.getValue('cleanliness'),
        lastCleaned: getLastCleaned(llamaRecord.sys_id),
        lastSheared: getLastSheared(llamaRecord.sys_id),
        lastFed: getLastFed(llamaRecord.sys_id),
        growthLog: getGrowthLog(llamaRecord.sys_id),
        className: snakeCase(llamaRecord.getValue('name') + llamaRecord.getValue('sys_id'))
    };
}