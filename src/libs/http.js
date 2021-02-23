import axios from "axios";

import {JUHE_APPKEY,VUE_APP_URL} from '../configs/keys';

function axoisGet(options){
    axios(VUE_APP_URL + options.url + '&key=' + JUHE_APPKEY)
        .then((res) =>{

            options.success(res.data);
        })
        .catch((err)=>{
            options.error(err);
        });
}

export {
    axoisGet
}