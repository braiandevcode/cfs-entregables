// CLASE MOTOR
export class Motor {
    private motor: string;   // VARIABLES Y/O ATRIBUTO INTERNA DE CLASE
    public constructor(motor: string) {
        this.motor = motor;
    }

    public getNameMotor(): string {
        return this.motor;
    }

    public setNameMotor(motor:string):void {
        this.motor=motor;
    }
}