module.exports = function toReadable (number) {
        const ednc = number % 10;
        const dcml = Math.floor(number % 100 / 10);
        const hndrd = Math.floor(number / 100);
        const hundreads_arr = [[], ['one hundred'], ['two hundred'], ['three hundred'] ,['four hundred'], ['five hundred'], ['six hundred'], ['seven hundred'], ['eight hundred'], ['nine hundred']];
        const decimils_arr = [[], ['ten'], ['twenty'], ['thirty'] ,['forty'], ['fifty'], ['sixty'], ['seventy'], ['eighty'], ['ninety']];
        const decimils_arr_2 = [['ten'], ['eleven'], ['twelve'], ['thirteen'] ,['fourteen'], ['fifteen'], ['sixteen'], ['seventeen'], ['eighteen'], ['nineteen']];
        const ones_arr = [[], ['one'], ['two'], ['three'] ,['four'], ['five'], ['six'], ['seven'], ['eight'], ['nine']];
            if (hndrd === 0 && dcml === 0 && ednc === 0) {
                var result = 'zero';
            }
            else if (dcml === 0 && ednc === 0) {
                var result = hundreads_arr[hndrd];
            }
            else if (hndrd === 0 && ednc === 0) {
                var result = decimils_arr[dcml];
            }
            else if (hndrd === 0 && dcml === 0) {
                var result = ones_arr[ednc];
            }
            else if (dcml === 1) {
                if (hndrd === 0) {
                    var result = decimils_arr_2[ednc];
                }
                else {
                    var result = hundreads_arr[hndrd] + ' ' + decimils_arr_2[ednc];
                }
            }   
            else if (hndrd === 0) {
                var result = decimils_arr[dcml] + ' ' + ones_arr[ednc];
            }
            else if (dcml === 0) {
                var result = hundreads_arr[hndrd] + ' ' + ones_arr[ednc];
            }
            else if (ednc === 0) {
                var result = hundreads_arr[hndrd] + ' ' + decimils_arr[dcml];
            }
            else {
                var result = hundreads_arr[hndrd] + ' ' + decimils_arr[dcml] + ' ' + ones_arr[ednc];
            }
    return result;
}
