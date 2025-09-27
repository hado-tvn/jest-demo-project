const mapping = (n) => {
    switch (n) {
        case 0:
            return "không"
        case 1:
            return "một"
        case 2:
            return "hai"
        case 3:
            return "ba"
        case 4:
            return "bốn"
        case 5:
            return "năm"
        case 6:
            return "sáu"
        case 7:
            return "bảy"
        case 8:
            return "tám"
        case 9:
            return "chín"
    }
}

function convertNumToString (num) {
    let output = ""
    if (num < 0) {
        output += "âm "
        num = -num
    }

    if (num < 10) {
        output += mapping(num)
        console.log(output.trim())
        return output.trim()
    }
    hang_don_vi = num % 10
    hang_chuc = Math.floor((num % 100) / 10)  
    hang_tram = Math.floor((num % 1000) / 100)  
    hang_nghin = Math.floor((num % 10000) / 1000)

    if (hang_nghin > 0&& hang_chuc ==0 && hang_don_vi==0)  {
        output += mapping(hang_nghin) + " nghìn"
        console.log(output.trim())
        return  output.trim()``
    }
    if (hang_nghin > 0 && hang_tram==0 && hang_chuc==0) {
        output += mapping(hang_nghin) + " nghìn lẻ " + mapping(hang_don_vi)
        console.log(output.trim())
        return output.trim()
    }
    if (hang_nghin > 0 && hang_tram==0) {
        output += mapping(hang_nghin) + " nghìn không trăm "
    }
    
    if (hang_nghin > 0) {
        output += mapping(hang_nghin) + " nghìn "
    }


    if (hang_tram > 0&& hang_chuc ==0 && hang_don_vi==0)  {
        output += mapping(hang_tram) + " tram"
        console.log(output.trim())
        return output.trim()
    }
    // so co 3 chu so
    if (hang_tram>0 && hang_chuc==0) {
        output += mapping(hang_tram) + " trăm lẻ " + mapping(hang_don_vi)
        console.log(output.trim())
        return output.trim()
    }

   if( hang_tram>0){
    output += mapping(hang_tram) + " trăm "
   }
    // só có 2 chứ số 
    hang_chuc == 1 ? output += "mười" : output += mapping(hang_chuc) + " mươi"
    if (hang_don_vi > 0) {
        output +=
            hang_don_vi == 1
                ? " mốt"
                : hang_don_vi == 5
                ? " lăm"
                : " " + mapping(hang_don_vi)
    }

    return output.trim()
}

module.exports = convertNumToString;