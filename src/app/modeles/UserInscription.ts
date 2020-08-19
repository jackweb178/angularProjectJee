import { RoleData } from './RoleData';
export class UserInscription{

    constructor (
        public name: string,
        public username:string,
        public password:string,
        public tel:BigInteger,
        public email:string,
        public matricule:string,
        //public role:RoleData
    ){

    }
}