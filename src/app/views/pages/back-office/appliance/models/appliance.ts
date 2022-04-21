import { TypeApplianceDto } from "../../type-appliance/models/typeApplianceDto";

export interface ApplianceDto {

    id: number,

    libelle: string,

    dbid: string,

    disponibilite: string,

    ref: string,

    typeApplianceDto: TypeApplianceDto,
}
