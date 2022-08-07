import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' }
        ]
        this._brands = [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Samsung' }
        ]
        this._devices = [
            {id:1, name:'12 pro', price:25000, rating: 5, img:'https://loremflickr.com/640/360'},
            {id:2, name:'12 pro', price:25000, rating: 5, img:'https://loremflickr.com/640/360'},
            {id:3, name:'12 pro', price:25000, rating: 5, img:'https://loremflickr.com/640/360'},
            {id:4, name:'12 pro', price:25000, rating: 5, img:'https://loremflickr.com/640/360'}
        ]
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }

}