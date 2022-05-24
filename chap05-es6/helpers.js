function toUpperCase(bien) {
    if (typeof bien === 'string') {
        return bien.toUpperCase();
    }
     return bien;
}

function sum(first,second) {
    if (isNaN(first) || isNaN(second)) {
        return "khong phải số.lượn :)) "
    }
    return first + second;
}


const phone = {
    name: "Dt iphone",
    moTa : function () {
        console.log("điện thoại đời mới");
    }
};
export {toUpperCase, sum};

// với default khi import có thể đặt tên vì giá trị đã đc mang sang
export default phone;