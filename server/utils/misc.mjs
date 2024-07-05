// import {GlideDateTime} from '@servicenow/glide';
import moment from 'moment'
export const getElapsedDays = date => {
    // const start = new GlideDateTime(date);
    // const end = new GlideDateTime();
    // const diff = GlideDateTime.subtract(start, end);
    // const days = diff.getRoundedDayPart();
    // return days + ` day${days != 1 ? 's' : ''} ago`;
    return moment(date).fromNow()
};