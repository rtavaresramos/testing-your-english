function duplicateRemove(data){
    var arr = data
    var newArr = [...new Set(arr)]
    
    return newArr
}