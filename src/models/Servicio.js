class Servicio{
    constructor(idService, service, description, price, stateService, categoria){
        this._idService = idService,
        this._service = service,
        this.description = description,
        this._price = price,
        this._stateService = stateService,
        this._categoria = categoria
    }

    getIdService(){
        return this._idService;
    }
    setIdService(idService){
        this._idService = idService;
    }
    
    getService(){
        return this._service;
    }
    setService(service){
        this._service = service;
    }

    getDescription(){
        return this._description;
    }
    setDescription(description){
        this._description = description;
    }

    getPrice(){
        return this._price;
    }
    setPrice(price){
        this._price = price;
    }

    getStateService(){
        return this._stateService;
    }
    setStateService(stateService){
        this._stateService = stateService;
    }

    getCategoria(){
        return this._categoria;
    }
    setCategoria(categoria){
        this._categoria = categoria;
    }
    

    toString(){
        return `{"id_servicio":${this._idService},
        "servicio":"${this._service}",
        "descripcion":"${this._description}",
        "precio":"${this._price}",
        "estado":${this._stateService},
        "categoria":"${this._categoria}"
        }`;
    }
}


module.exports = Servicio;