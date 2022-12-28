export class Bus {
    busId : number = 0;
    busPlateNo ?: string;
    busType ?: string;
    capacity ?: number;
    source ?: string;
    destination ?: string;
    scheduleDate ?: string;
    departureTime ?: string;
    estimatedArrivalTime ?: string;  
    fareAmount ?: number;
    remark ?: string; 
    driver ?: Object;
}
