import {DefaultApi} from "./index.js";


const API = new DefaultApi()

export default class ApiClient {

    constructor() {
        this.api = API;
    }

    callback(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log(response)
            console.log('API called successfully.');
            return data
        }
    }


    getAssets(){
        return this.api.assetsGet(this.callback);
    }
    getVulnerabilities(){
        return this.api.vulnerabilitiesGet(this.callback)
    }
    getIncidents(){
        return this.api.incidentsGet(this.callback)
    }
    getActors(){
        return this.api.threatActorsGet(this.callback)
    }


}


