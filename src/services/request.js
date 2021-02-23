import {axoisGet} from '../libs/http';

function getData(consName,type){
    return new Promise((resolve,reject)=>{
        axoisGet({
            url:`/api/constellation/getAll?consName=${consName}&type=${type}`,
            success(data){
                // console.log(data)
                resolve(data);
            },
            error(err){
                reject(err);
            }
        });
    })
}

export {
    getData
}