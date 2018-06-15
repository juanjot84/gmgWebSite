export class Region {

    constructor(_id = '', nombreRegion = '', descripcionRegion = '') {
        this._id = _id;
        this.nombreRegion = nombreRegion;
        this.descripcionRegion = descripcionRegion;
    }

    _id: string;
    nombreRegion: string;
    descripcionRegion: string;

}
