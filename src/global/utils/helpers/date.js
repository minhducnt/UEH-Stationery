import dayjs from 'dayjs';
import moment from 'moment';

//* Trả về một ma trận đại diện cho các ngày của một tháng cụ thể
const getMonth = (month = dayjs().month()) => {
    month = Math.floor(month);
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
};

//* Chuyển đổi ngày từ định dạng ISO sang định dạng DD-MM-YY
const convertDateISOToDDMMYYY = dateISO => {
    const dateObj = new Date(dateISO);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString().substring(2);
    return `${day}-${month}-${year}`;
};

//* Chuyển đổi ngày từ định dạng ISO sang định dạng HH:mm
const convertDateISOToHHmm = dateISO => {
    if (dateISO) {
        if (moment.utc(dateISO).format('HH:mm') !== 'Invalid date') {
            return moment.utc(dateISO).format('HH:mm');
        }
    }
    return '--:--';
};

//* Chuyển đổi ngày từ định dạng ISO sang định dạng DD/MM/yyyy
const convertDateISOToDDMMyyyy = dateISO => {
    if (dateISO) {
        if (moment.utc(dateISO).format('DD/MM/yyyy') !== 'Invalid date') {
            return moment.utc(dateISO).format('DD/MM/yyyy');
        }
    }
    return '--/--/----';
};

//* Chuyển đổi ngày sang định dạng YYYY-MM-DD
const getMomentDateFormat = dateInput => {
    const date = new Date(dateInput).toUTCString();
    const formatDate = moment.utc(date).format('YYYY-MM-DD');
    return formatDate;
};

//* Chuyển đổi ngày từ định dạng ISO sang định dạng YYYY-MM-DD
const convertDateISOToYYYY_MM_DD = dateISO => {
    return dateISO.split('T')[0];
};

//* Kiểm tra xem ngày được chọn có trong tháng hiện tại không
function isInSameMonth(value) {
    if (value) {
        const currentMonth = new Date().getMonth();
        const selectedMonth = new Date(value).getMonth();
        return currentMonth === selectedMonth;
    }
    return true;
}

//* Chuyển đổi ngày sang định dạng YYYY-MM-DD
function convertDateToYYYYMMDD(date) {
    if (date) {
        return moment(date).format('YYYY-MM-DD');
    }
    return '';
}

//* Chuyển đổi ngày sang định dạng ISO
function convertToISOString(dateString) {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error('Invalid date format');
    }

    return date.toISOString();
}

export const DateHelper = {
    getMonth,
    convertDateISOToDDMMYYY,
    convertDateISOToHHmm,
    convertDateToYYYYMMDD,
    convertDateISOToDDMMyyyy,
    convertDateISOToYYYY_MM_DD,
    getMomentDateFormat,
    convertToISOString,
    isInSameMonth
};
