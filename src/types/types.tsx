export interface Area {
  name: string;
  areaType: string;
  parentArea?: Area;
  parentAreaId?: string;
  childArea?: Array<Area>;
}

export interface Address {
  customerId: string;
  seqNo: number;
  streetName: string;
  postalCode: string;
  villageId: string;
}
